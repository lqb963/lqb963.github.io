# Less 预处理器

## 概览

Less(Leaner Style Sheets) 是一门向后兼容的 css 拓展语言, 又称为 css 预处理器

## 变量

通过 `@` 来声明变量

```less
@whith: 10px;

#header {
  width: @whith;
}
```

## 混合

将一组属性混入到另一组属性中的方法

```less
.base-style {
  font-size: 12px;
  color: aqua;
}
.header {
  .base-style();
}
```

## 嵌套

### 基本嵌套

```less
.header {
  .color: black;
}
.header .content {
  font-size: 12px;
}
/*  使用less的嵌套语法 我们可以这样写 */
.header {
  .content {
    font-size: 12px;
  }
}
```

### 嵌套中的`&`语法糖

`&`表示当前选择器的父级

```less
.clearfix {
  display: block;
  zoom: 1;
  &:after {
    content: '';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

### @规则嵌套和冒泡

```less
.component {
  width: 100px;
  @media (min-width: 768px) {
    width: 600px;
    @media (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
//编译后:
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

## 运算

算数运算符`+` `-` `*` `/`可以对任何 数字 颜色 或变量进行运算

算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换。

```less
@conversion-1: 5cm + 10mm; // 结果是6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是-1.5cm

@base: 5%;
@filter:@base * 2; //结果是10%
@other: @base + @filter; //结果是15%
```

乘法和除法不做转换

```less
@base:2cm * 3mm; //结果是6cm

//颜色运算
@color: #224488 / 2; //结果是#112244
background-color: #112244 + #111; //结果是#223355
```

### calc()特例

为了与 CSS 保持兼容，calc() 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。  
大概意思是不会进行变量计算 但是可以使用变量

```less
@var: 50vh/2;
width: calc(50% + (@var - 20px)); // 结果是 calc(50% + (25vh - 20px))
```

## 转义(Escaping)

转义允许你使用任意字符串作为属性或变量值

```less
@min768: ~'(min-width:768px)';
.element {
  @media @min768 {
    font-size: 1.2px;
  }
}
//从 3.5 开始 可以简写
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2px;
  }
}
```

## 函数

Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在(Less 函数手册)[https://less.bootcss.com/functions/]中有详细介绍。 ps：css 就不要写函数了吧哥 要不太顶了

```less
//函数的用法非常简单。下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

## 命名空间和访问符

有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 #bundle 之下，为了以后方便重用或分发：

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: gray;
    &:hover {
      bacckground-color: white;
    }
  }
  .tab {
    ...;
  }
  .citation {
    ...;
  }
}
// 把希望把.button 类混合到 #header a 中

#header a {
  color: orange;
  #bundle.button(); //还可以书写为 #bundle > .button 形式
}
```

## 映射

从 less3.5 开始 你还可以将混合(mixins)和规则集(rulesets) 作为一组值得映射(map)使用

```less
#colors() {
  primary: blue;
  secondary: green;
}
.button {
  //color: #colors.primary;
  //border: 1px solid #colors.secondary;
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## 作用域

Less 中得作用域 与 CSS 中得作用域非常相似，首先在本地查找变量和混合(mixins),如果找不到 则从父级作用域继承

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

## 注释

块注释和行注释都可以使用：

```less
/**
 * 这是一个注释
 */
@var: red;
// 这是一行注释
@var: white;
```

## 导入

“导入”的工作方式和你预期的一样。你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 .less 扩展名，则可以将扩展名省略掉：

```less
@import 'library'; // library.less
@import 'typo.css';
```
