---
title: 服务自检功能
date: 2021-04-16
tags:
 - 持续集成
categories:
 - 工作
sidebar: 'auto'
---

::: tip
* 源码阅读
* 思考过程
:::

# 服务自检功能

## 功能介绍
- A服务 提供一个健康检查接口,用于表示所有服务(A,B,C,D服务)的健康状态,以便网关进行流量切换
- 网关可以设置以下参数
  - 探测间隔(一般为10s)
  - 超时时间(通常与探测间隔一致)
  - 如果超时时间10s,探测间隔为5s, 5s后不论上一次探测是否有结果,都会再发探测请求
- 网关探测到A机房的健康状态为DOWN时,将流量切换至其他机房

## 功能分析
- A服务自检接口所需要的时间 不能超过网关设置的超时时间
  - A服务自身的健康检查所耗时间
  - A服务服务远程访问其他服务(B,C,D)的健康状态所耗时间
     - 当连接某个服务超时时,所耗时间以连接超时时间为准,若超时设置为10s，则自检接口至少需要10s,这种情况下会超过网关设置的超时时间

## 功能设计
- 由于Spring自带的/actuator/health接口会实时检测服务的健康状态,自检时可能会出现超时情况
- 所以设计一个缓存状态,每次网关请求时,可以立马返回该状态,耗时最短
  - 该缓存状态的刷新机制由定时任务去完成
  - A,B,C,D服务都做定时任务,每一个服务都有一个缓存状态,对外都提供一个/health接口
  
## 思路

- 1.Spring已经自带了健康检查功能,自定义自检项继承AbstractHealthIndicator类即可
- 2.如自带的: RabbitHealthIndicator,NacosDiscoveryHealthIndicator等
- 3.访问/actuator/health,Spring即会找到所有的HealthIndicator类,逐项检查,汇总结果
- 4.我们的任务只要在定时任务中去手动触发Spring自检即可,并刷新服务健康状态的缓存

### 如何手动触发Spring自检
- 通过阅读Spring自检源码来了解Spring是如何做健康检查的
- [SpringBoot健康检查源码走读](https://blog.csdn.net/shengqianfeng/article/details/115112070)

### 实现代码
- 定时任务.
```
```
## 过程中遇到的问题
- 配置文件自检时 所有项显示为 不能为空
- FeignClient指定URL调用