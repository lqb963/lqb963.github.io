# LaTeX 与 Markdown

[写作：LaTeX 和 Markdown 中的数学公式和 HyperSnips 快捷输入](https://zhuanlan.zhihu.com/p/496081143)

## LaTeX

1. LaTeX 是一个强大的文档排版系统，用于创建高质量、专业的文档、尤其在学术和科研领域广泛使用
2. LaTeX 使用标记语言，通过输入 LaTeX 代码来描述文档结构、样式和内容
3. LaTeX 可以处理复杂的排版需求，包括数学公式、参考文献、自动编号、表格、图形等
4. LaTeX 生成的文档通常以 PDF 格式输出，具有高度的可定制外观

## Markdown

1. 轻量级标记语言
2. 使用简单的符号和标记来定义文本的格式，如标题、列表、链接、引用等
3. Markdown 的主要目标是提供一种易于写作和阅读的方式，适合在网页、博客、电子邮件等文本环境中使用
4. Markdown 通常不适用于复杂的排版需求，如学术论文，书籍等

## 相同点

1. 都是使用的标记语言
2. 都是文档排版系统

## 不同点

1. 标记语言的语法不同
2. LaTeX 可处理更复杂的排版需求 数学公式、参考文献、自动编号、表格、图形等，Markdown 更为简单易上手

## 当前 Markdown 和 LaTex 交叉点

数学公式 [【LaTeX 应用】常用数学公式和符号](https://zhuanlan.zhihu.com/p/464237097)

### KaTeX MathJax

1. 都是 js 库 用于渲染数学公式的
2. KaTex 渲染更快，支持若干简写字符，但本身支持的范围较小
3. MathJax 渲染稍慢 支持更多的复杂表示
4. 二者都支持 LaTeX 数学公式

#### KaTeX

小而快 的数学公式渲染库。因为 KaTeX 将注意力完全投入于将 标准 LaTeX 数学公式 渲染成 HTML 元素，而不考虑 LaTeX 拓展语法，例如 physics 宏包，也不打算将其渲染成 SVG 等图形，所以渲染速度极快

The fastest math typesetting library for the web

#### Mathjax

[什么是 Mathjax](https://www.osgeo.cn/mathjax/basic/mathjax.html)

1. 用于 latex、mathml 和 ascimath 表示法的开源 JavaScript 显示引擎
2. mathjax 允许您在 web 页面中包含数学，可以使用 latex、mathml 或 ascimath 表示法，数学将使用 javascript 处理以生成 html 或 svg，以便在任何现代浏览器中查看
3. 大而全 的数学公式渲染库。可以将以 LaTeX、MathML 和 AsciiMath 语法书写的数学公式，渲染成 HTML、SVG 或 MathML。并且支持扩展，比如 physics 宏包 和 amsmath 宏包

```
$$
\begin{align}
    \require{AMScd}
    \begin{CD}
        \rm\LaTeX@>>>
        \rm K\kern-.2em\raise.21em{\scriptstyle{A}}\kern-.17emT\kern-.14em\lower.5ex{E}\kern-.115em X\\
        @VVV \text{VS Code}@VVV@>>>e^{i\theta}=\cos \theta+i\sin\theta\\
        \text{MathJax} @>>> \text{markdown}
    \end{CD}
\end{align}
$$
```

### `$$...$$ 还是 \[...\]`

1. [LaTeX 中不带编号的行间公式为什么推荐用 `\[ … \] `而不是 `$$ … $$`？](https://www.zhihu.com/question/27589739)
2. [如果你想要行间的公式，可以使用 $$...$$（现在我们推荐使用 \[...\]，因为前者可能产生不良间距）](https://oi-wiki.org/tools/latex/#%E6%8F%92%E5%85%A5%E5%85%AC%E5%BC%8F)
