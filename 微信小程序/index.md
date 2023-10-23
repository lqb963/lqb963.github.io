# video 标签自适应高度

1. 获取视频宽高比
2. 计算视频高度
3. 将视频高度赋值给 video 标签
4. @loadedmetadata (event: Event) => void - 视频元数据加载完成时触发。event.detail = {width, height, duration}
