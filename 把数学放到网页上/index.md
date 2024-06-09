# 把数学放在网页上

要将数学放入 web 页面，可以使用 tex 和 latex 表示法、mathml 表示法、asciimath 表示法，或者在同一页面中使用这三种表示法的组合，  
mathjax 配置告诉 mathjax 要使用哪种表示法

## tex 和 latex 输入

### 数学分隔符

1. 用来告诉 mathjax 页面的哪个部分代表数学，什么是普通文本
2. 多种形式
   1. $$...$$
   2. \[...\]
   3. \(...\) 用于在线数学
   4. $...$ 是不默认使用的，因为美元符号经常出现在非数学环境中
3. 如果在博客、wiki 或其他内容管理系统中使用 mathjax 则该系统使用的标记语言可能会干扰 mathjax 使用的 tex 表示法 注意冲突

### 示例

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathJax TeX Test Page</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script
      type="text/javascript"
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    ></script>
  </head>
  <body>
    When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they
    are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
  </body>
</html>
```

## MATHML

1. 在 html 中可以直接使用 math 标签

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathJax MathML Test Page</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script
      type="text/javascript"
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js"
    ></script>
  </head>
  <body>
    <p>
      When
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>a</mi><mo>&#x2260;</mo><mn>0</mn> </math
      >, there are two solutions to
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup> <mo>+</mo> <mi>b</mi
        ><mi>x</mi> <mo>+</mo> <mi>c</mi> <mo>=</mo> <mn>0</mn>
      </math>
      and they are
      <math
        xmlns="http://www.w3.org/1998/Math/MathML"
        display="block"
      >
        <mi>x</mi> <mo>=</mo>
        <mrow>
          <mfrac>
            <mrow>
              <mo>&#x2212;</mo>
              <mi>b</mi>
              <mo>&#x00B1;</mo>
              <msqrt>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>&#x2212;</mo>
                <mn>4</mn><mi>a</mi><mi>c</mi>
              </msqrt>
            </mrow>
            <mrow> <mn>2</mn><mi>a</mi> </mrow>
          </mfrac>
        </mrow>
        <mtext>.</mtext>
      </math>
    </p>
  </body>
</html>
```

## asciimath

```html
<!DOCTYPE html>
<html>
<head>
<title>MathJax AsciiMath Test Page</title>
<script>
MathJax = {
  loader: {load: ['input/asciimath', 'output/chtml']}
}
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
</script>
<body>

<p>When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and
they are</p>
<p style="text-align:center">
  `x = (-b +- sqrt(b^2-4ac))/(2a) .`
</p>

</body>
</html>
```

## 将数学放入 JavaScript 字符串

若在 js 中处理数学 需要将 tex 或 latex 表达式放在字符串文本中 需要使用反斜杠`(\)` 作为字符串中的特殊字符 因为 tex 使用反斜杠来表示宏名, 因此所有的反斜杠都要加倍

```
var math = '\\frac{1}{\\sqrt{x^2 + 1}}';
var array = '\\begin{array}{cc} a & b \\\\ c & d \\end{array}';
```

## Q&A

### Katex 和 Mathjax 有什么区别

两个不同的 js 数学公式渲染库
