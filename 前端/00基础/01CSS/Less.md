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

## 命名空间

## 映射

## 作用域

## 注释

## 导入

```

```
