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
3. 交换器、路由、绑定
   * `Exchange`：交换器：生产者发送消息给`Exchange`，`Exchange`将消息路由到一个或多个队列中，如果路由不到则返回给生产者或直接丢弃
   * 交换器有四种类型，具有不同策略
   * `RoutingKey`：生产者将消息发送给交换器的时候，一般会指定一个`RoutingKey`，用来指定这个消息的路由规则，而这个`RoutingKey`需要与交换器类型和绑定键(`BindingKey`)联合使用才会生效
     在交换器和绑定键(`BingdingKey`)固定的情况下，生产者可以在发送消息给交换器时，通过指定`RoutingKey`来决定消息流向哪里
   * `Binding`：绑定。`RabbitMQ`中通过绑定将交换器与队列关联，在绑定的时候通常会指定绑定键(`BindingKey`)，这样`RabbitMQ`就知道如何正确地将消息路由到队列了
   * 生产者将消息发送给交换器时，需要一个`RoutingKey`，当`BindingKey`和`RoutingKey`相匹配时，消息会被路由到对应的队列中。在绑定多个队列到同一个交换器的时候，这些绑定允许使用相同的`BindingKey`。B`indingKey `并不是在所有的情况下都生效，它依赖于交换器类型，比如fanout类型的交换器就会无视`BindingKey`，而是将消息路由到所有绑定到该交换器的队列中。  
     * 在使用绑定的时候，其中需要的路由键是`BindingKey`。 涉及的客户端方法如:
     `channel.exchangeBind`、`channel.queueBind`,对应的AMQP命令为`Exchange.Bind`、`Queue.Bind`.
     * 在发送消息的时候，其中需要的路由键是`RoutingKey`。 涉及的客户端方法如
     `channel.basicPublish`,对应的AMQP命令为`Basic.Publish`。
   
   1. 生产者生产消息
   2. 根据`RoutingKey`将消息发送给对应的`Exchange`
   3. `Exchange`有四种不同类型，不同类型的`Exchange`根据自己的`BindingKey`规则将消息发送给对应的队列
   4. 消费者从队列消费消息

### 交换器类型

RabbitMQ常用的交换器类型有fanout、direct、topic、headers这四种。AMQP协议里还提到另外两种类型：System和自定义，这里不予描述。对于这四种类型下面一一阐述。