# RabbitMQ进阶

## `basicPublish`

```java
    void basicPublish(String exchange, String routingKey, boolean mandatory, boolean immediate, BasicProperties props, byte[] body)
            throws IOException;
```

mandatory和immediate都有当消息传递过程中不可达目的地时将消息返回给生产者的功能。

RabbitMQ提供的备份交换器（Alternate Exchange）可以将未能被交换器路由的消息（没有绑定队列或者没有匹配的绑定）存储起来，而不用返回给客户端。

### `mandatory`

当mandatory参数设为true时，交换器无法根据自身的类型和路由键找到一个符合条件的队列，那么RabbitMQ会调用Basic.Return命令将消息返回给生产者。当mandatory参数设置为false时，出现上述情形，则消息直接被丢弃。

通过调用channel.addReturnListener来添加**ReturnListener**监听器,生产者可以获取到没有被正确路由到合适队列的消息

### `immediate`
当immediate参数设为true时，如果交换器在将消息路由到队列时发现队列上并不存在任何消费者，那么这条消息将不会存入队列中。当与路由键匹配的所有队列都没有消费者时，该消息会通过Basic.Return返回至生产者。



**概括来说，mandatory参数告诉服务器至少将该消息路由到一个队列中，否则将消息返回给生产者。immediate参数告诉服务器，如果该消息关联的队列上有消费者，则立刻投递；如果所有匹配的队列上都没有消费者，则直接将消息返还给生产者，不用将消息存入队列而等待消费者了。**
RabbitMQ 3.0版本开始去掉了对immediate参数的支持，对此RabbitMQ官方解释是：immediate参数会影响镜像队列的性能，增加了代码复杂性，建议采用TTL和DLX的方法替代。（有关TTL和DLX的介绍请分别参考4.2节和4.3节。）

## 备份交换器

备份交换器，英文名称为Alternate Exchange，简称AE

生产者在发送消息的时候如果不设置mandatory参数，那么消息在未被路由的情况下将会丢失；如果设置了mandatory参数，那么需要添加ReturnListener的编程逻辑，生产者的代码将变得复杂。**如果既不想复杂化生产者的编程逻辑，又不想消息丢失，那么可以使用备份交换器，这样可以将未被路由的消息存储在RabbitMQ中，再在需要的时候去处理这些消息。**

可以通过在声明交换器（调用channel.exchangeDeclare方法）的时候添加alternate-exchange参数来实现，也可以通过策略（Policy，详细参考6.3节）的方式实现。如果两者同时使用，则前者的优先级更高，会覆盖掉Policy的设置。