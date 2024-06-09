# MARKDOWN

## [md文档](https://markdown.com.cn/basic-syntax/)
## [md在线编辑器](https://markdown.com.cn/editor/)
### 1. #号

```
    说明： 使用 # 表示标题
    注意： 1. #个数表示标题级别  2. # 后要有空格
    实例：
    # 一级标签
    ## 二级标签
    ### 三级标签
    #### 四级标签
    ##### 五级标签
    ###### 六级标签
```

#### 2. <h1~h6> (html 标题标签)

```
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>
```

#### 3. 文本下方添加任意数量的 == 或 --

```
    说明: 可以在文本下方添加任意数量的== 标识一级标题 或者 --标识二级标题
    注意: 使用时不能有缩进，需要顶格
    实例:
一级标题
======
二级标题
------
```

### 二、段落语法

```
直接进行书写  或 <p></p>
```

### 三、 换行语法

```
在一行的末尾添加两个或多个空格，然后按回车键 即可创建一个换行 或
使用<br> 换行标签
```

### 四、 强调语法

```
1. 粗体(Bold)
**test**  或 <strong></strong> 标签
2. 斜体(Italic)
*test*  或 _test_  或 <em></em> 或 <i></i>
3. 粗体 和 斜体
***test*** 或 ___test___ 或 __*test*__ 或 **_test_**
或 使用 strong标签 和 em标签互相嵌套
```

### 五、 引用语法

```
1. 符号： >

2. 多个段落的块引用 为段落之间空白行添加一个 >
> this is markdown
>
> this is markdown

3. 块的嵌套
> this is markdown
>
>> this is markdown

4. 带有其他元素的块引用
> ### this is markdown
>
> - this is markdown
> - this is markdown
>
> this is markdown
```

### 六、列表语法

```
1). 有序列表 及 嵌套(注意 点后要有空格，嵌套的子列表要有两个锁进)
1. first
2. second
    1. first
3. third
    1. first

或

<ol>
  <li>first</li>
  <li>second</li>
  <ol>
    <li>first</li>
    <li>second</li>
  </ol>
</ol>
2). 无序列表

- first
- second
或
* first
* second
或
+ first
+ second
或
<ul>
    <li>first</li>
    <li>second</li>
</ul>
嵌套与有序列表同理 略～～～

3)在列表中嵌套其他元素
在保留列表的连续性的同时在列表中添加另一种元素，请将该元素锁进四个空格或一个制表符
```

### 七、代码语法

````
1. 使用(`)反引号将单词或短语表示为代码
this is  `markdown`
2. 转义反引号如果 你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号中(``)
3.  使用 code 标签 <code>Use `code` in your Markdown file.</code>

4. 代码块， 请将代码块的每一行至少锁进四个空格或一个制表符
5. 围栏式代码块 将代码块使用三反引号包裹 (```)

````

### 八、分割语法

```
单独的一行 使用 三个或多个 *** --- ___ 星号 破折号 下划线
***
---
_____
```

### 九、链接语法

```
1. [链接名称](链接url)
[百度](https://www.baidu.com "百度")
<a href="https://www.baidu.com" title="百度">百度</a>

2. 使用尖括号可以很方便的将URL或者email地址变成可点击的链接
<https://www.baidu.com>
3. 格式化的链接
这是百度 ***[百度](https://www.baidu.com)***
这是百度 ***<https://www.baidu.com>***
4. 引用型链接：  ！！！ 没看懂 ！！！
```

### 十、图片语法

```
![图片名称](图片链接)
![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")
```

### 十一、转义字符

```
显示原本用于格式化md文档的字符，请在字符前面添加反斜杠
没太看懂 ！！！转义字符 ！！！
```

### 十二、内嵌 HTML 标签

```
md 文档自动支持 html标签
依照个人习惯 甚至可以不用md格式 而是采用html来书写md文档
行级内敛标签
<span> <cite> <del>
区块标签
<div> <table> <pre> <p> 等标签，必须在前后加上空行 以便用于内容区分，开始和结束标签不可以用tab或是空白来缩进


出于安全原因，并非所有md应用程序都支持在md文档中添加html
```

## 扩展语法

### 一、表格语法 [Markdown Tables Generator - 快速生成表格 ](https://www.tablesgenerator.com/markdown_tables)

```
    基础：
        1. 使用三个或多个连字符(---)创建每列的标题 并使用竖线(｜)分割每列。
        2. 不能有缩进，需要顶格 手写不变可以使用
        3. 可在表格中设置文本格式，但不能添加标题、块引用、列表、水平规则、图像、或html标签
        4. 可以使用html实体字符(&#124) 代替竖线(|)

    实例：
| Syntax    |  Description |
|-----------|--------------|
| Header    |     Title    |
| Paragraph |     Text     |

    对齐： 可在标题行的连字符的左侧、右侧、两侧添加(:) 控制文本的对齐方式
    实例：
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


```

### 二、围栏代码块

````
    基础：
      1. 使用一组 三个反印号(```)或 一组 三个波浪号(~~~)
      2. 语法高亮：可在代码块指定语言
    实例：
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

### 三、脚注(没会用)

```
    说明：读者可单击脚注 跳转至页面底部
    基础： [^1]
    实例：
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

### 四、标题编号(锚点) {#anchor}

```
步骤1 创建标题编号
### My Great Heading {#custom-id} (这种方式不知道为什么不生效)

<h3 id="custom-id">My Great Heading</h3>

步骤2 链接到标题ID(#headid)

[Heading IDs](#heading-ids)
<a href="#heading-ids"></a>
```

### 五、定义列表

```
实例：  这个不知道为什么在vscode中不生效捏
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

html：
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

```

### 六、 删除线

```
    使用一组 俩个波浪号包裹的单词/短语
    语法/实例: ~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

### 七、任务列表语法

```
    语法/实例：
    -[x] 学习markdonw
    -[ ] 学习JavaScript
```

### 八、Emoji 表情

```
没弄清楚 暂时不生效捏

去露营了！ :tent: 很快回来。

真好笑！ :joy:

```

### 九、自动网址链接

```
许多md处理器会自动将url转为链接  即使您未使用尖括号

http://www.example.com

您可以使用 反引号 `` 来禁用链接

`http://www.example.com`

```

