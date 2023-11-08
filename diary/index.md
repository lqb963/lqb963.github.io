# 231012

1. 小程序滑动穿透问题
   - 父元素添加 catchtouchmove="true"
   - 子元素使用 scroll-view
   - 参考：https://blog.csdn.net/u010809694/article/details/88317752
2. h5 与 移动端交互
   - https://etm6ai5fqq.feishu.cn/docx/VUOMdGp1YogNHUx4CY4cEthwnib?from=from_copylink
3. 组件拆分
   - 颗粒度细化 便于维护
   - 常量、配置项相关要抽离
4. 浏览器缩放问题
   1. 页面元素自适应，根据窗口大小进行缩放
   2. 页面设置最小宽高，元素大小不变，窗口小于最小宽高时，出现滚动条
5. uniapp 中 provide/inject 不好用
6. 页面评审时要有相应的流程，不要总觉得好做，细节很多的 例：
   1. 表单
      - 输入框的输入类型(手机号，文本)，长度，格式校验等
      - 必填校验
      - 是否有动态的表单
      - 回显不可编辑 和 新建时的样式是否不同

# 231108

导出 excel 注：请求的 responseType 设置为 blob

```js
/**
 * @downLoadExcel 下载excel表
 */
export function downLoadExcel(res, excelName) {
  let blob = new Blob([res], { type: res.type });
  let link = document.createElement('a');
  link.style.display = 'none';
  let objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.setAttribute('download', `${excelName || 'xx报表'}.xlsx`);
  link.click();
  URL.revokeObjectURL(objectUrl);
}
```

## excel 表格导出
