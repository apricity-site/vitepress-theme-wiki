# RabbitMQ实战指南


## 第一章 消息中间件的作用
* 解耦：约定消息格式相当于约定协议，系统之间可以自定义消息/协议处理
* 存储：可以持久化消息，保证消息数据正确使用
* 削峰填谷：防止访问量剧增拖垮系统
* 顺序保证：大部分消息中间件支持一定程度上的顺序性
* 异步通信

### 安装
[官方文档](https://www.rabbitmq.com/download.html)  
Web控制台地址: 127.0.0.1:15672  
默认账户密码 guest/guest

默认账户远程访问受限，需要添加用户
```shell
# 创建用户 用户名root  密码root
rabbitmqctl add_user root root
# 为用户设置所有权限
rabbitmqctl add_user set_permission -p / root ".*" ".*" ".*"
# 设置用户为管理员角色
rabbitmqctl set_user_tags root administrator
```

## 第二章 入门
### Producer 生产者
生产者创建消息，然后发布到RabbitMQ中。消息一般可以包含2个部分:消息体和标签
(Label)。 消息体也可以称之为payload， 在实际应用中，消息体一般是一个带有业务逻辑结构
的数据，比如一个JSON字符串。当然可以进一步对这个消息体进行序列化操作。消息的标签用来表述这条消息，比如一个交换器的名称和一个路由键。生产者把消息交由RabbitMQ,
RabbitMQ之后会根据标签把消息发送给感兴趣的消费者(Consumer)。
### Consumer 消费者
消费者连接到RabbitMQ服务器，并订阅到队列上。当消费者消费一条消息时， 只是消费
消息的消息体(payload)。 在消息路由的过程中，消息的标签会丢弃，存入到队列中的消息只
有消息体，消费者也只会消费到消息体，也就不知道消息的生产者是谁，当然消费者也不需要知道。

### Broker 服务节点
对于RabbitMQ来说，一个RabbitMQ Broker 可以简单看做一个RabbitMQ服务节点，
或者RabbitMQ服务实例。大多数情况下也可以将一个RabbitMQ Broker 看作一台RabbitMQ服务器

#### 消息生产-消费流程
1. 生产者包装消息，然后发送消息(`basic.publish`)到Broker中。
2. 消费者订阅并接收消息(`basic.cusume`或者`basic.get`)，经过处理得到原始数据
3. 进行业务逻辑处理
业务逻辑与接收消息逻辑不需要使用同一个线程。消费者可以使用一个线程接收消息并存入内存中，比如`BlockingQueue`。业务处理逻辑
使用另一个线程从内存中读取
### 队列
1. `Queue`：队列，`RabbitMQ`的内部对象，用于存储消息
2. 多个消费者可以订阅同一个队列,这时队列中的消息会被平均分摊(`Round-Robin`,即轮询)
    给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理。
    例如：A与B消费同意队列，A消费消息1后，B就会消费消息2，不会消费同一消息



### 交换器、路由、绑定

  * `Exchange`：交换器

    生产者发送消息给`Exchange`，`Exchange`将消息路由到一个或多个队列中，如果路由不到则返回给生产者或直接丢弃

  * 交换器有四种类型，具有不同策略

  * `RoutingKey`：

    生产者将消息发送给交换器的时候，一般会指定一个`RoutingKey`，用来指定这个消息的路由规则，而这个`RoutingKey`需要与交换器类型和绑定键(`BindingKey`)联合使用才会生效
    在交换器和绑定键(`BingdingKey`)固定的情况下，生产者可以在发送消息给交换器时，通过指定`RoutingKey`来决定消息流向哪里

  * `Binding`：绑定。

    `RabbitMQ`中通过绑定将交换器与队列关联，在绑定的时候通常会指定绑定键(`BindingKey`)，这样`RabbitMQ`就知道如何正确地将消息路由到队列了

    生产者将消息发送给交换器时，需要一个`RoutingKey`，当`BindingKey`和`RoutingKey`相匹配时，消息会被路由到对应的队列中。在绑定多个队列到同一个交换器的时候，这些绑定允许使用相同的`BindingKey`。B`indingKey `并不是在所有的情况下都生效，它依赖于交换器类型，比如fanout类型的交换器就会无视`BindingKey`，而是将消息路由到所有绑定到该交换器的队列中。 
    * 在使用绑定的时候，其中需要的路由键是`BindingKey`。 涉及的客户端方法如:
    `channel.exchangeBind`、`channel.queueBind`,对应的AMQP命令为`Exchange.Bind`、`Queue.Bind`.
    * 在发送消息的时候，其中需要的路由键是`RoutingKey`。 涉及的客户端方法如
    `channel.basicPublish`,对应的AMQP命令为`Basic.Publish`。

#### 总结

  1. 生产者生产消息
  2. 根据`RoutingKey`将消息发送给对应的`Exchange`
  3. `Exchange`有四种不同类型，不同类型的`Exchange`根据自己的`RoutingKey`规则将消息发送给对应的队列
  4. 消费者从队列消费消息
  4. 路由消息叫`RoutingKey`，路由与队列绑定叫`BindingKey`

### 交换器类型

RabbitMQ常用的交换器类型有fanout、direct、topic、headers这四种

#### fanout 

它会把所有发送到该交换器的消息**路由到所有与该交换器绑定的队列中**。

#### direct

它会把消息**路由到那些`BindingKey`和`RoutingKey`完全匹配的队列中**。

#### topic

它会把消息路由到那些符合`BindingKey`和`RoutingKey`**匹配规则**的队列中。

规则：

* `RoutingKey`为一个点号`.`分隔的字符串（被点号`.`分隔开的每一段独立的字符串称为一个单词）,如`com.rabbitmq.client`、`java.util.concurrent`、`com.hidden.client`
* `BindingKey`和`RoutingKey`一样也是点号`.`分隔的字符串
* `BindingKey`中可以存在两种特殊字符串`*`和`＃`，用于做模糊匹配，其中`＃`用于匹配一个单词，`*`用于匹配多规格单词（可以是零个）

例子：

![](/book/rabbitmq-in-action-guide/rabbitmq-topic.svg)

* 路由键为`com.rabbitmq.client`的消息会同时路由到Queue1和Queue2；

* 路由键为`com.hidden.client`的消息只会路由到Queue2中；
* 路由键为`java.rabbitmq.demo`的消息只会路由到Queue1中；
* 路由键为`java.util.concurrent`的消息将会被丢弃或者返回给生产者

#### headers

headers类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的headers属性进行匹配。在绑定队列和交换器时制定一组键值对，当发送消息到交换器时，RabbitMQ会获取到该消息的headers（也是一个键值对的形式），对比其中的键值对是否完全匹配队列和交换器绑定时指定的键值对，如果完全匹配则消息会路由到该队列，否则不会路由到该队列。**headers类型的交换器性能会很差，而且也不实用，基本上不会看到它的存在。**



### 运转流程总结

了解了以上的RabbitMQ架构模型及相关术语，再来回顾整个消息队列的使用过程。在最初状态下，生产者发送消息的时候：

1. 生产者连接到RabbitMQ Broker，建立一个连接（Connection），开启一个信道（Channel）（详细内容请参考3.1节）。
2. 生产者声明一个交换器，并设置相关属性，比如交换机类型、是否持久化等（详细内容请参考3.2节）。
3. 生产者声明一个队列并设置相关属性，比如是否排他、是否持久化、是否自动删除等（详细内容请参考3.2节）。
4. 生产者通过路由键将交换器和队列绑定起来（详细内容请参考3.2节）。
5. 生产者发送消息至RabbitMQ Broker，其中包含路由键、交换器等信息（详细内容请参考3.3节）。
6. 相应的交换器根据接收到的路由键查找相匹配的队列。
7. 如果找到，则将从生产者发送过来的消息存入相应的队列中。
8. 如果没有找到，则根据生产者配置的属性选择丢弃还是回退给生产者（详细内容请参考4.1节）。
9. 关闭信道。
10. 关闭连接。

消费者接收消息的过程：

1. 消费者连接到RabbitMQ Broker，建立一个连接（Connection），开启一个信道（Channel）。
2. 消费者向RabbitMQ Broker请求消费相应队列中的消息，可能会设置相应的回调函数，以及做一些准备工作（详细内容请参考3.4节）。
3. 等待RabbitMQ Broker回应并投递相应队列中的消息，消费者接收消息。
4. 消费者确认（ack）接收到的消息。
5. RabbitMQ从队列中删除相应已经被确认的消息。
6. 关闭信道。
7. 关闭连接。

#### 信道与连接

无论是生产者还是消费者，都需要和RabbitMQ Broker建立连接，这个连接就是一条TCP连接，也就是Connection。一旦TCP连接建立起来，客户端紧接着可以创建一个AMQP信道（Channel），每个信道都会被指派一个唯一的ID。信道是建立在Connection之上的虚拟连接，RabbitMQ处理的每条AMQP指令都是通过信道完成的。

RabbitMQ采用类似NIO（Non-blocking I/O）的做法，选择TCP连接复用，不仅可以减少性能开销，同时也便于管理。

每个线程把持一个信道，所以信道复用了Connection的TCP连接。同时RabbitMQ可以确保每个线程的私密性，就像拥有独立的连接一样。当每个信道的流量不是很大时，复用单一的Connection可以在产生性能瓶颈的情况下有效地节省TCP连接资源。**但是当信道本身的流量很大时，这时候多个信道复用一个Connection就会产生性能瓶颈，进而使整体的流量被限制了。此时就需要开辟多个Connection，将这些信道均摊到这些Connection中。**

