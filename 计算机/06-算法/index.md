## 冒泡排序

```js
//arr = [3, 2, 5, 1]

//arr = [2, 3, 5, 1]
//arr = [2, 3, 5, 1]
//arr = [1, 3, 5, 2]

//arr = [1, 3, 5, 2]
//arr = [1, 2, 5, 3]

//arr = [1, 2, 3, 5]

let arr = [123, 1233, 32, 23, 1, 23, 123, 3, 3, 4123, 124, 555, 552134, 323123, 123, 123, 444]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}
console.log(arr)
```

# 算法

## 为什么需要学算法

1. 业务中的算法或逻辑的时间复杂度或空间复杂度太高了，需要优化

## 数据结构和算法

数据结构：计算机存储或组织数据的方式  
算法： 解决问题的方式

## 时间复杂度

### [什么是时间复杂度](https://zhuanlan.zhihu.com/p/121838438)

执行当前算法所 "花费的时间"

```
时间复杂度就是用来方便开发者估算出程序的运行时间

我们该如何估计程序运行时间呢，我们通常会估计算法的操作单元数量，来代表程序消耗的时间， 这里我们默认CPU的每个单元运行消耗的时间都是相同的。

假设算法的问题规模为n，那么操作单元数量便用函数f(n)来表示

随着数据规模n的增大，算法执行时间的增长率和f(n)的增长率相同，这称作为算法的渐近时间复杂度，简称时间复杂度，记为 O(f(n))
```

### 用来干什么的

在写代码的工程中，就可以大概知道代码运行的快与慢了

### 表示法

大 O 表示法 出现于《解析数论》  
O 表示的方式有很多，列举几个：O(1)、O(n)、O(n^2)、O(logN)...

```js
// O(1)  执行时所消耗的时间不受某个变量n的增长而影响(不受变量影响)
// 一般来说 除了循环 、 递归 基本上都是O(1)的复杂读
const a = 1
console.log(a)
function fun(num) {
  return num++
}
fun(6)
fun(6)
fun(6)

// O(n)
let n = 100
for (let i = 0; i < n; i++) {
  console.log(i)
}

// O(n^2)
function foo() {
  let arr = []
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      arr[k].push('a')
    }
  }
}
foo(10)

// O(log2N)
let i = 1
const n = 6
while (i < n) {
  i = i * 2
}
```

### 时间复杂度的计算

```js
// fun 的时间复杂度 为： O(1) + O(n) = O(n)
function fun(n) {
  let i = 1
  i += 2
  for (let i = 0; k < n; k++) {
    console.log(k)
  }
}
fun(10)
```

## 空间复杂度

### 是什么？

执行当前算法需要占用多少内存空间

## 表示法

O(1) O(n) O(n^2)

```js
let a = 1 // O(1)

let n = 100
let arr = []
for (let i = 0; i < n; i++) {
  arr.push(i) // O(n)
}

let n = 100
let arr1 = []
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    arr1.push(j) // O(n^2)
  }
}
```

## 栈

后进先出

```js
let arr = []
arr.push(1)
arr.push(2)
arr.pop()
// arr => [1]
```

### 20 有效括号

```js
// 给定一个只包括 '(' ')' '{' '}' '[' ']' 的字符串s 判断字符串是否有效
// 有效字符串必须满足：
//    1. 左括号必须用相同类型的右括号闭合
//    2. 左括号必须以正确的顺序闭合

function isValid(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const str = s[i] //  当前字符
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(str) // 如果是开始字符串则入栈
    } else {
      const left = stack[stack.length - 1] //
      if ((left === '(' && str == ')') || (left === '[' && str == ']') || (left === '{' && str == '}')) {
        stack.pop() // 如果栈中的字符和当前的字符相匹配 则出栈
      } else {
        return false
      }
    }
  }
  return stack.length === 0 // 若栈长为0 则匹配
}
console.log(isValid('(){}'))
console.log(isValid('(]{}'))

// error  '"(){}{}{}}}{}"'  这个测试用例不会通过
function fnc(s) {
  // 如果不是偶数则直接返回
  if (s.length % 2 !== 0) {
    return false
  }
  // 对照表
  const leftObj = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let i = 0; i < s.length; i++) {
    const str = s[i] // 当前字符
    if (leftObj[str]) {
      // 当前字符如果是开始字符
      const nextStr = s[i + 1]
      if (leftObj[str] !== nextStr) {
        return false
      } // 判断开始字符和下一个字符是否匹配 若不匹配则返回false
    }
  }
  return true
}
console.log(fnc('(){}'))
console.log(fnc('(]{}'))

// 最终

function final(s) {
  // 如果不是偶数则直接返回
  if (s.length % 2 !== 0) {
    return false
  }
  // 对照表
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const str = s[i] // 当前字符
    if (map[str]) {
      stack.push(str) // 当前字符如果是开始字符 则入栈
    } else {
      const before = stack[stack.length - 1] //获取栈中最后一个元素
      if (str === map[before]) {
        // 如果栈中最后一个元素和当前元素匹配则 出栈
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
```

### 1047 删除字符串中的所有相邻重复项

给出由小写字母组成的字符串 S，重复项删除会选择两个相邻切相同的字母，并删除他们，在 S 上反复执行重复项删除操作，直到无法继续删除，在完成所有重复项删除操作后返回最终的字符串答案保证唯一  
示例： 'abbaca' 结果 'ca'  
解释： abbaca 删除重复的 b 后为 aaca 删除重复的 a 后得出结果 ca

```js
function func(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    const prev = stack.pop()
    if (prev !== letter) {
      stack.push(prev)
      stack.push(letter)
    }
  }
  return stack.join('')
}

function fnc1(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const stackLastLetter = stack[stack.length - 1] // 栈中的最后一个值
    const letter = s[i] // 当前的值
    if (stackLastLetter === letter) {
      stack.pop()
    } else {
      stack.push(letter)
    }
  }
  return stack.join('')
}
```

### [71 简化路径](https://leetcode.cn/problems/simplify-path/)

```js
function fnc(path) {
  const pathList = path.split('/')
  const stack = []
  let finalPath = ''
  for (let item of pathList) {
    if (item && item === '..') {
      stack.pop()
    } else if (item && item != '.') {
      stack.push(item)
    }
  }
  finalPath = stack.length ? '/' + stack.join('/') : '/'
  return finalPath
}
```

## 队列

先进先出

```js
let arr = []
arr.push(1)
arr.push(2)
arr.shift()
// arr => [2]
```

### js 中的任务队列

js 具有单线程的特点，即同一时间只能做同一件事，

1. 主线程执行同步任务，当遇到异步任务时，提交给对应的异步进程处理，
2. 异步任务完毕后，将推入任务队列中，
3. 主线程执行完毕，查询任务队列，取出一个任务，推入主线程处理
4. 重复该动作

任务队列中的任务分为宏任务和微任务

js 执行流程

1. 主线程读取 JS 代码，此时同步环境，形成对应的堆和执行栈
2. 主线程遇到异步任务，会推给异步线程进行处理
3. 异步进程处理完毕，将对应的异步任务推入异步队列
4. 主线程查询任务队列，执行微任务，将其按照顺序执行,全部执行完毕，
5. 主线程查询任务队列，执行宏任务，取得第一个宏任务, 执行完毕
6. 重复以上 4，5 步骤

同步、异步(定时器、事件、网络请求)

异步分为：宏任务(定时器) 和微任务(promise.then)

## 链表

多个元素存储的列表  
链表中的元素在内存中不是顺序存储的，而是通过"next"指针联系在一起的

```js
let a = { key: 'a' }
let b = { key: 'b' }
let c = { key: 'c' }
let d = { key: 'd' }

a.next = b
b.next = c
c.next = d
d.next = a
console.log(a)

// 遍历链表
let obj = a
while (obj && obj.key) {
  console.log(obj.key)
  obj = obj.next
}
// 链表中插入某个值 在c后添加m
let m = { key: 'mmmm' }
m.next = c.next
c.next = m
// 删除m
c.next = d
```

js 中的原型链就是链表结构

### 链表和数组的区别

1. 数组：有序存储的,在中间某个位置删除或添加某个元素，其他元素要跟着动
2. 链表：链表中的元素不是按照顺序存储的，而是通过 next 指针联系在一起

### 种类

1. 单项链表 data-next=>data-next=>data-null
2. 双向链表 prev-data-next<=>prev-data-next<=>prev-data-next
3. 环形链表

### instanceof

```js
const instanceofs = (target, obj) => {
  let p = target
  while (p) {
    if (p == obj.prototype) {
      console.log(1, p)
      console.log(2, obj.prototype)

      return true
    }
    console.log(3, p.__proto__)
    p = p.__proto__
  }
  return false
}
console.log(instanceofs([1, 2, 3], Array))
```

### [141 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

### [83 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

### [206 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

```js
function fn(head) {
  let prev = null
  let current = head
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
}
```

## 总结

1. 栈、队列：进、出
2. 链表、数组：多个元素存储组成的
   1. 区别 1： 结构
      - 数组：下标
      - 链表：next 指针联系在一起
   2. 区别 2：数据插入
      - 数组： 如果在中间插入新的元素，其他元素会重新计算
      - 链表；不会重新计算，说白了类似赋值或替换
   3. 区别 3：查找
      - 数组：通过下标进行查找即可
      - 链表：每次查找都需要重头开始查找

## 字典 & 哈希表

### 字典

js 中对象的键[key]都是字符串类型或者会被转成字符串类型

```js
let a = {}
let b = {
  key: 'a',
}
let c = {
  key: 'c',
}
a[b] = '123' // a[[object Object]] = '123'
a[c] = '456' // a[[object Object]] = '456'
console.log(a[b]) // 456
```

字典：键值对存储的，类似于 js 的对象字典：==>map 来表示 map 的键不会被转换类型

```js
let map = new Map()
map.set('a', '1')
map.set('b', '2')
console.log(map.get('a'))

let a = new Map()
let b = {
  key: 'b',
}
let c = {
  key: 'c',
}
map.set(b, '123')
map.set(c, '456')

console.log(a)
console.log(a.get(b))
console.log(a.get(c))
```

### 哈希表 又被称为散列表

在 js 中没有哈希表 ，哈希表是字典的一种实现

```
[
  下标1001  ==> 1
  下标1002  ==> 2
]
```

1. 区别一: 如果找 key 对应的 value 需要遍历 key 那么想要省去遍历的过程，用哈希表来表示
2. 区别二：排列顺序
   - 字典是根据添加的顺序进行排列的
   - 哈希表不是添加的顺序排列的

简单实现一个哈希表

```js
class HashTable {
  constructor() {
    this.table = []
  }
  hashCode(key) {
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
  }
  put(key, val) {
    let hashKey = this.hashCode(key)
    this.table[hashKey] = val
  }
  get(key) {
    let hashKey = this.hasCode(key)
    return this.table[hashKey]
  }
}

let hashTable = new HashTable()
hashTable.put('person', '章三')
console.log(hashTable.get('person'))
```

## 树

一种分层数据的抽象模型，简单来说：用来分层级关系的一种数据结构

### 深度优先搜索(遍历) 广度优先搜素(遍历)

1. 深度优先遍历 ==> 从根节点出发，尽可能地搜素树地节点
   1. 访问根节点
   2. 对根节点地 children 挨个进行深度优先搜素
2. 广度优先遍历 ==> 从根节点出发，优先访问离根节点最近地节点
   1. 新建一个队列，把根节点入列
   2. 把对头出队
   3. 把对头地 children 挨个入队
   4. 重复 2 和 3 直到队列为空为止

```js
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        { val: 'd', children: [] },
        { val: 'e', children: [] },
      ],
    },
    {
      val: 'c',
      children: [
        { val: 'f', children: [] },
        { val: 'g', children: [] },
      ],
    },
  ],
}

// 深度优先遍历
const deep = function (root) {
  console.log(root.val)
  root.children.forEach(deep)
}
deep(tree)

// 广度优先遍历

const fn = function (root) {
  let queue = [root]
  while (queue.length !== 0) {
    let shiftNode = queue.shift()
    console.log(shiftNode.val)
    shiftNode.children.forEach((item) => {
      queue.push(item)
    })
  }
}
fn(tree)
```

### 多叉树 & 二叉树

二叉树(每个节点只有两个叉的树)： 根节点 左子树 右子树

1.  前中后序 指的是根节点的次序
2.  前序遍历 根左右
3.  中序遍历 左根右
4.  后序遍历 左右根

```js
const tree = {
  val: '1',
  left: {
    val: '2',
    left: { val: '4', left: null, right: null },
    right: { val: '5', left: null, right: null },
  },
  right: {
    val: '3',
    left: { val: '6', left: null, right: null },
    right: { val: '7', left: null, right: null },
  },
}
//前序(先序)遍历 顺序：根 左 右

// 递归方式
let valList = function (root) {
  let list = []
  let fn = function (node) {
    if (node) {
      list.push(node.val)
      fn(node.left)
      fn(node.right)
    }
  }
  fn(root)
  return list
}
console.log(valList(tree))

// 栈方式

// 中序遍历  左 根 右

let inorderTraversal = function (root) {
  const arr = []
  const fun = (node) => {
    if (node) {
      fun(root.left)
      arr.push(root.val)
      fun(root.right)
    }
  }
}

// 后序遍历  左 右 根

let inorderTraversal = function (root) {
  const arr = []
  const fun = (node) => {
    if (node) {
      fun(root.left)
      fun(root.right)
      arr.push(root.val)
    }
  }
}
```

## 排序搜素算法

排序： 冒泡排序、快速排序、插入排序  
搜素: 二分搜素、顺序搜索  
工具地址：https://visualgo.net/zh

### 冒泡排序

```js
arr = [1, 32, 11, 2, 2, 5, 1, 34]
for (let i = 0; i < arr.length - 1; i++) {
  //  循环n-1轮
  for (let j = 0; j < arr.length - 1 - i; i++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  } //每轮比较n-1-i次
}
```

### 选择排序

```js
arr = [23, 123, 243, 13, 1, 3, 8, 4, 5]
for (let i = 0; i < arr.length - 1; i++) {
  // 循环n-1轮
  let indexMin = i
  for (let j = i + 1; j < arr.length; j++) {
    // 每轮从i开始查找最小值
    if (arr[j] < arr[indexMin]) {
      indexMin = j
    }
  }
  let temp = arr[i]
  arr[i] = arr[indexMin]
  arr[indexMin] = temp
}
console.log(arr)
```

### 插入排序

```js
arr = [23, 123, 243, 13, 1, 3, 8, 4, 5]
for (let i = 1; i < arr.length; i++) {
  let temp = arr[i]
  
}
```
