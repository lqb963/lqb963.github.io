# 前端监控

[百万 QPS 前端性能监控系统设计与实现](https://segmentfault.com/a/1190000041126532)

[目前为止整理最全的前端监控体系搭建篇(长文预警)](https://cloud.tencent.com/developer/article/1983779)

## 为什么要做前端监控

## 监控哪些内容

1. 用户行为 (通常使用埋点来进行监控)
   1. pv uv 监控用户数据
   2. 操作日志
2. 性能监控
3. 错误监控

## 本质目的

1. 保障整体业务
2. 提升项目稳定性
3. 提升用户体验

## 实施流程

1. 前端埋点
2. 数据上报
3. 加工汇总
4. 可视化展示
5. 监控报警
