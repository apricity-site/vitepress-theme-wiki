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

