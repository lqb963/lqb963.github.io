# video 标签自适应高度

1. 获取视频宽高比
2. 计算视频高度
3. 将视频高度赋值给 video 标签
4. @loadedmetadata (event: Event) => void - 视频元数据加载完成时触发。event.detail = {width, height, duration}

# 滑动穿透问题

描述：小程序一些二级确认框等会出现滑动穿透问题  
阻止事件冒泡：https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
1. 弹出层/确认框 添加属性 :catchtouchmove="true"
2. 子级使用 scroll-view

