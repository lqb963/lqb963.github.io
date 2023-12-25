# 菜鸟教程

## typescript 简介

1. ts 是 js 的超集，支持 es6 标准
2. ts 是由微软开发的开源变成语言
3. ts 设置的目标是开发大型应用，可编译成纯 js，编译出来的 js 可以运行在任何浏览器上

### ts 可以运行在浏览器上吗

不能，浏览器运行的是 js

### 语言特性

1. 类型批注、
2. 编译时类型检查
3. 类型推断
4. 类型擦除
5. 接口
6. 枚举
7. Mixin
8. 泛型编程
9. 名字空间
10. 元组
11. Await

从 ECMA2015 反向移植而来

1. 类
2. 模块
3. lambda 函数的箭头语法
4. 可选参数及默认参数

### js 和 ts 的区别

1. ts 是 js 的超集，拓展了 js 语法，因此现有的 js 代码可以 ts 一起工作无需任何修改，
2. ts 通过类型注解提供编译时的静态类型检查
3. ts 可以处理已有的 js 代码，并只对其中的 ts 代码进行编译

## ts 安装

```
https://www.runoob.com/typescript/ts-install.html
```

## ts 基础语法

1. 模块
2. 函数
3. 变量
4. 语句和表达式
5. 注释

常用编译参数

1. --help 显示帮助信息
2. --module 载入拓展模块
3. --target 设置 ecma 版本
4. --declaration 额外生成一个 .d.ts 扩展名的文件
5. --removeComments 删除文件的注释
6. --out 编译多个文件并合并到一个输出的文件
7. --sourcemap 生成一个 sourcemap 文件(存储源代码与编译代码对应位置的映射的信息文件)
8. --module nolmplicitAny 在表达式和声明上有隐含的 any 类型时报错
9. --watch 在监视模式下运行编译器，在他们改变时重新编译

### ts 与面向对象

面向对象是一种对现实世界理解和抽象的方法

1. ts 是一种面向对象的编程语言
2. 面向对象主要有两个概念：对象和类
   - 对象：对象是类的一个实例，有状态和行为，
   - 类： 是一个模板，他描述一类对象的行为和状态
   - 方法: 方法是类的操作的实现步骤

## ts 基础类型

1. string
   - 字符串类型
   - 使用`'`或`"`来表示字符串类型， 反引号 `来定义多行文本和内嵌表达式
2. number
   - 数字类型，双精度 64 浮点数，可以用来表示整数和分数
   - 0b1010 二进制
   - 0o744 八进制
   - 5 十进制
   - 0xfood 十六进制
3. boolean
   - 布尔类型
   - 标识逻辑值，true 或 false
4. undefined
   - 用于初始化变量为一个未定义的值
5. null
   - 标识对象值缺失
6. any
   - 声明为 any 的变量可以赋予任意类型的值
7. 数组
   - let arr: number[] = [1, 2]
   - let arr: Array<number> = [1, 2] (使用数组泛型)
8. 元组
   - 用来表示已知元素数量和类型的数组，个元素的类型不必相同，对应位置的类型必须要相同
   - let x: [number, string] = [1, 'lqb']
9. 枚举
   - 用于定义数值的集合
   - enum Color {Red, Green, Blue}
   - let c: Color = Color.Blue // c = 2
10. void 用于标识方法返回值的类型，标识该方法没有返回值

    ```js
    function hello(): void {
      alert('hello runoob');
    }
    ```

### Any 类型

任意值是 ts 针对编程时类型不明确的变量使用的一种数据类型，

1. any 类型可以让变量跳过编译阶段的类型检查
2. 改写现有代码时，any 类型允许在编译时可选择地包含或移除类型检查
3. 定义存储各种类型数据地数组 let arr: any[] = [1, 'lqb', false]

### Null 和 undefined

1. null 标识什么都没有，是一个只有一个值地特殊类型，表示一个空对象引用 用 typeof 检测 null 返回 object
2. undefined 表示一个没有设置值地变量，typeof 一个没有值地变量会返回 undefined，
3. Null、Undefined 是其他任何类型(包括 void)的子类型，可以赋值给其他类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined，而在 ts 中启用严格的空校验(--strictNullChecks)特性，就可以使得 null 和 undefined 只能赋值给 void 或本身对应的类型，

### never 类型

never 是`其他类型`(包括 null 和 undefined)的子类型，代表从不出现的值，这意味着声明为 never 类型的变量只能被 never 类型所扶植，在函数中他通常表现为抛出异常或无法执行到终止点(例如无限循环)
```js
let x: nver
```