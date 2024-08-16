# 组合式

组合式 API(composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件  
它是一个概括性的术语，涵盖了以下方面的 API

1. 响应式 API
   - 例如 ref() reactive() 使我们可以直接创建响应式状态、计算属性、和侦听器
2. 生命周期钩子
   - 例如 onMounted() onUnmounted(), 使我们可以在组件各个生命周期阶段添加逻辑
3. 依赖注入
   - 例如 provide()和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统

## 不同版本 Vue 如何使用组合式 API

1. 组合式 API 是 Vue3 Vue2.7 的内置功能
2. 对于老版本 Vue2 可以使用官方维护的插件 @vue/composition-api
3. 在 Vue3 中，组合式 API 基本上都会配合`script setup`语法在单文件中使用

## 组合式 API 并不是函数式编程

虽然 组合式 API 的风格式基于函数的组合，但是`组合式API并不是函数式编程`，  
组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变

## 组合式 API 的优点(为什么要有组合式 API)

1. 更好的复用逻辑
   - 可通过组合式函数来实现更加简介高效的逻辑复用
   - 在选项式 API 中我们主要的逻辑复用机制是 mixins 而组合式 API 接解决了 minxs 的所有缺陷
   - [mixins 缺陷](https://cn.vuejs.org/guide/reusability/composables#vs-mixins)
2. 更灵活的组织代码
3. 更好的类型推导
4. 更小的生产包体积
   - 更高效
   - 代码压缩更友好
   - 搭配 `<script setup>` 使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩也更友好。这是由于 `<script setup>` 形式书写的组件模板被编译为了一个内联函数，和 `<script setup>` 中的代码位于同一作用域。不像选项式 API 需要依赖 this 上下文对象访问属性，被编译的模板可以直接访问 `<script setup>` 中定义的变量，无需从实例中代理。这对代码压缩更友好，因为本地变量的名字可以被压缩，但对象的属性名则不能。

## 组合式 API 和选项式 API 的关系

### 取舍

### 组合式 API 是否覆盖了所有场景

### 可以在同一个组件中使用两种 API 吗

### 选项式 API 会被遗弃吗

## 与 Class API 的关系

## 和 React Hooks 的对比
