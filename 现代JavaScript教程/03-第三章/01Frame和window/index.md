# 弹窗和 window 的方法

1. 弹窗（pupup）是向用户显示其他文档的最古老的方法之一

```js
window.open('https://javascipt.info/');
//部分浏览器会拦截弹窗 防止广告等非用户意愿的打开新窗口就
```

2. 弹窗出现的最初想法：在不关闭窗口的情况下显示其他内容。当然随着现在 ajax 技术的出现，可以动态加载内容，使得弹窗使用率降低
3. 弹窗在移动设备上非常棘手，因为移动设备无法同时显示多个窗口
4. 但仍有一些任务在使用弹窗，例如进行 OAuth 授权(Google/Facebook/...登录)
   1. 弹窗是一个独立的窗口，具有自己的独立 js 环境，因此使用弹窗打开一个不信任的第三方网站是安全的
   2. 打开弹窗非常容易
   3. 弹窗可以导航(修改 URL)，并将消息发送到 opener 窗口(即打开弹窗的窗口)

## 阻止弹窗

如果弹窗是用户触发的事件处理程序之外调用，大多数浏览器会阻止此类弹窗

```js
// 弹窗被阻止
window.open('https://javascript.info');
// 弹窗被允许
button.onclick = () => {
  window.open('https://javascript.info');
};
```

1. 恶意网站经常滥用弹窗，弹出广告等，因此大多数浏览器都会通过阻止弹窗来保护用户
2. 如果弹窗是从 onclick 打开的，但是在 setTimeout 之后，该怎么办？这有点棘手。`不同浏览器的安全策略有所不同`

## window.open

```js
window.open(url, name, params);
```

1. url: String
   1. 要在新窗口中加载的 URL
2. name: String
   1. 新窗口名称
   2. 每个窗口都有一个 window.name
   3. 该参数用于指定哪个窗口用于弹窗
   4. 若存在该 name 的窗口，则将在该窗口打开给定的 URL
   5. 若不存在该 name 的窗口，则打开一个新的窗口，并将 name 赋值给该窗口
3. params: String
   1. 新窗口的配置字符串, 设置用逗号分隔，参数之间不能有空格
   2. 例如 `width=200,height=200`
   3. 具体配置项
      1. 位置
         1. left/top (数字) 屏幕上窗口的左上角坐标 (不能将新窗口置于屏幕外)
         2. width/height(数字) 新窗口的宽度和高度 (宽高最小值有限制，不可能创建一个不可见的窗口)
         3. 注：若用户多个屏幕，则以主屏为基准
      2. 窗口功能 `部分配置会因浏览器差异，导致效果有所差异，或功能是否有效`
         1. menubar(yes/no) 显示/隐藏新窗口的浏览器菜单
         2. toolbar(yes/no) 显示/隐藏新窗口的浏览器导航栏(后退、前进、重新加载等)
         3. location(yes/no) 显示/隐藏新窗口的 URL 字段。Firefox 和 IE 浏览器不允许默认隐藏它
         4. status(yes/no) 显示/或隐藏状态栏，同样，大多数浏览器都强制显示它
         5. resizable(yes/no) 允许/禁用新窗口大小调整
         6. scrollbars(yes/no) 允许/禁用新窗口的滚动条
4. 设置中的省略规则：
   1. 如果 open 调用中没有第三个参数，或者它是空的，则使用默认的窗口参数。
   2. 如果这里有一个参数字符串，但是某些 yes/no 功能被省略了，那么被省略的功能则被默认值为 no。因此，如果你指定参数，请确保将所有必需的功能明确设置为 yes。
   3. 如果参数中没有 left/top，那么浏览器会尝试在最后打开的窗口附近打开一个新窗口。
   4. 如果没有 width/height，那么新窗口的大小将与上次打开的窗口大小相同。
5. 还有一些不太受支持的特定于浏览器的功能，通常不使用。通常不使用这些功能，具体可查看[MDN 中的 window.open](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)

## 从弹窗访问窗口

open 的调用会返回对新窗口的引用，他可以用来操纵新弹窗的属性，更改位置，甚至更多操作

```js
let newWin = window.open('about:blank', 'hello', 'width=200,height=200');

newWin.document.write('Hello, world!');
```

在其加载完成后，修改其中内容

```js
let newWindow = open('/', 'example', 'width=300,height=300');
newWindow.focus();

alert(newWindow.location.href); // (*) about:blank，加载尚未开始

newWindow.onload = function () {
  let html = `<div style="font-size:30px">Welcome!</div>`;
  newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};
```

请注意：在刚刚进行了 window.open 的时候，新窗口还没有加载完成。我们可以通过 (\*) 行中的 alert 证实这一点。因此，我们需要等待 onload 以对新窗口进行更改。我们也可以对 newWin.document 使用 DOMContentLoaded 处理程序。

`!!!同源策略`  
只有在窗口是同源时，窗口才能自由访问彼此的内容

## 从弹窗访问窗口

弹窗也可以使用 window.opener 来访问 opener 窗口，

```js
let newWin = window.open('about:blank', 'hello', 'width=200,height=200');

newWin.document.write(
  "<script>window.opener.document.body.innerHTML = 'Test'</script>",
);
```

## 关闭弹窗

1. 关闭一个窗口: window.close()
2. 检查一个窗口是否被关闭：window.closed()
3. 若 window 不是同故宫 window.open 创建的，大多数浏览器都会忽略 window.close()，因此 close 只对弹窗起作用

```js
let newWindow = open(
  'https://www.baidu.com',
  'example',
  'width=300,height=300',
);
console.log('newWindow', newWindow.closed);
newWindow.close();
console.log('newWindow', newWindow.closed);
```

## 移动和调整大小

1. window.moveBy(x,y)
   1. 将窗口相对于当前位置向右移动 x 像素并向下移动 y 像素，允许负值
2. window.moveTo(x,y)
   1. 将窗口移动至屏幕坐标(x,y)处
3. window.resizeBy(width,height)
   1. 根据给定的相对于当前大小的 width/height 调整窗口大小，允许负值
4. window.resizeTo(width,height)
   1.
5. window.onresize 事件
6. 为了防止滥用，浏览器通常会阻止这些方法，它们仅在我们打开的，没有其他选项卡的弹窗中能够可靠的工作(需要同源)
7. 没有最小/最大化,js 无法最小化或者最大化一个窗口，这些操作系统级别的功能对于前端开发者而言时隐藏的，移动或者调整大小的方法不适用于最小/最大化窗口

## 滚动窗口

1. window.scrollBy(x,y)
2. window.scrollTo(x,y)
3. elem.scrollIntoView(top=true)
4. window.onscroll

## 弹窗的聚焦/失焦

window.onblur widnow.onfocus

## 总结

如今 弹窗使用的已经很少了，因为有其他的选择，使用 ajax 动态渲染页面，使用 iframe 加载和显示信息

1. 可以通过 open(url,name,params)调用打开一个弹窗，他会返回对新打开的窗口的引用
2. 浏览器会阻止来自用户之外代码的 open 调用，通常会显示一条通知，以便用户可以允许他们
3. 默认情况下，浏览器会打开一个标签页，但如果提供了窗口大小，那么浏览器将打开一个弹窗
4. 弹窗可以使用 window.opener 属性访问 opener 窗口
5. 如果主窗口和弹窗同源，那么他们可以彼此自由的读取和修改，否则，他们仅可以更改彼此的地址
6. 要关闭弹窗 使用 close()调用，用户也可以关闭弹窗，关闭后 window.closed 为 true
    1. focus()和blur()方法允许聚焦/失焦于窗口，但他们并不是一直有效
    2. focus和blur事件允许跟踪窗口的切换，