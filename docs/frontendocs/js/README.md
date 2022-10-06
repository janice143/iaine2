## 数据类型（8 种）

### 基本类型

`string, number, boolean, undefined, null, symbol, bigInt`

保存在 栈内存`symbol `表示独一无二且不可变的数据类型`BigInt `是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

#### BigInt 数据类型

1. 数字类型的数据，可以表示任意精度的整数。
2. 定义一个 BigInt：

- 在一个数字后面加上 n 来定义一个 BigInt
- 使用 BigInt()来定义一个 BigInt

3. 解决 number 类型精度丢失问题。number 类型只能安全地表示-(2^53-1) 到(2^53-1)之间的整数，不在这个区间的数将自动四舍五入;
4. 运算
   只能和 BigInt 数据进行运算

5. 比较
   与 BigInt 类型数据比较

```js
// ↪ true

2n > 1n;
// ↪ true

2n >= 2n;
// ↪ true
```

与 Number 类型数据比较

```js
1n < 2n;
// ↪ true

2n > 1;
// ↪ true

2n >= 2;
// ↪ true
```

BigInt 和 Number 不是严格相等的，但是宽松式相等

```js
0n === 0;
// ↪ false

0n == 0;
//↪ true
```

6. 应用场景

- 高精度时间戳
  大于 2^53 - 1 的整数的一个应用场景就是高精度时间戳。精确到纳秒级别的时间戳很常见

- 大整数 ID

#### Symbol 数据类型

1. 表示独一无二且不可变的数据类型，解决可能出现的全局变量冲突的问题
2. 基本使用：Symbol()函数即可生成一个 Symbol 类型的数据；该函数可以接受一个字符串作为参数，表示对 Symbol 的描述，因为只是表示对当前 Symbol 值的描述，因此相同参数的 Symbol 函数的返回值是不相等的。

```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
s1 === s2; // false

// 有参数的情况
let s1 = Symbol("foo");
let s2 = Symbol("foo");
s1 === s2; // false
```

3. Symbol.for

它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值

4. [应用场景](https://juejin.cn/post/7028830157230047263#heading-2)

- 使用 Symbol 来作为对象属性名(key)：该属性不可枚举，可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。“对内操作”和“对外选择性输出”变得可控制
- 使用 Symbol 来替代常量：变量多的时候，无需给变量想不同的名字
- 定义类的私有属性/方法

### 引用类型

`object (包括array, function, object等)`

保存在 堆内存，栈内存存储的是变量标识符和存储地址。

### 数据类型检测方案

- typeof (区分基本数据类型，null，array 和 object 无法区分，function 也可以)

```javascript
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof "mc"); // string
console.log(typeof function () {}); // function
console.log(typeof console.log()); // function
console.log(typeof []); // object
console.log(typeof {}); // object

typeof NaN; // number

console.log(typeof Symbol); // function
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

- instanceof (无法区分基本数据类型，可以区分 array 和 object，function 也可以)

用于判断一个引用类型是否属于某构造函数

```js
console.log(1 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" instanceof String); // false

console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

**原理**：通过判断对象的原型链中是不是能找到构造函数的 prototype。

- Object.prototype.toString.call() （万能法，精准判断数据类型）

```js
var toString = Object.prototype.toString;
console.log(toString.call(1)); //[object Number]
console.log(toString.call(true)); //[object Boolean]
console.log(toString.call("mc")); //[object String]
console.log(toString.call([])); //[object Array]
console.log(toString.call({})); //[object Object]
console.log(toString.call(function () {})); //[object Function]
console.log(toString.call(undefined)); //[object Undefined]
console.log(toString.call(null)); //[object Null]
```

### JS 对象

1. 对象通过 new 操作符构建的，所以对象不相等(=== 是 false)
2. 对象是引用类型（地址）
3. 对象的 key 是字符串类型

```js
a = { aa: 1 };
b = { bb: 2 };
c = { cc: 3 };
a[b] = "123";
a[c] = "456";
console.log(a[b]); // 456
```

b 和 c 是对象，当成为 a 的属性的时候，会变成字符串，值是[object object]。c 会覆盖 b 的值。相当于`a = { '[object object]':456, aa:1} `4. 对象如何找属性或者方法（原型链）对象本身找 => 构造函数找 => 对象原型找 **proto**=> 构造函数原型找 prototype => 对象上一层原型查找

### JS 内置对象

Date, Math, String, Array

### 隐式转换

```js
true + 1; // 2
"name" + true; // 'nametrue' （字符串和其他类型相加，都是转化成字符串）
undefined + 1; // NaN（是一个number)
typeof null; // object
```

### 是否是数组

```js
1 isArray
const arr = [1,2,3]
console.log(Array.isArray(arr))

2 instanceof
const arr = [1,2,3]
console.log(arr instanceof Array)

3 原型prototype
const arr = [1,2,3]
Object.prototype.toString.call(arr).indexOf('Array') > -1

4 isPrototypeOf
const arr = [1,2,3]
Array.prototype.isPrototypeOf(arr)

5 constructor
const arr = [1,2,3]
arr.constructor.toString().indexOf('Array') > -1
```

### null 和 undefined 区别

`undefined`一个变量最原始的状态；此处应该有一个值，但是还没有定义；转为数值时为 NaN

- 变量被声明了，但没有赋值
- 调用函数时，但没有传递实参
- 访问对象上不存在的属性或者未定义的变量
- 函数没有返回值时，默认返回 undefined

`null`表示一个被人为的重置为空对象；该处的值为空；转为数值时为 0（但是 null == 0 结果是 false，null>=0 结果为 true）典型用法：

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

在实际使用过程中，为了保证变量所代表的语义，不要对变量赋值 undefiSned，当需要释放一个对象时，直接赋值为 null 即可。

### == 和 === 区别

== 比较的是值=== 不仅比较值，还比较类型

### || 和 && 返回值

1. 只要 || 前面为 false, 不管 || 后面是 true 还是 false，都返回 || 后面的值。

2. 只要 || 前面为 true, 不管 || 后面是 true 还是 false，都返回 || 前面的值。

3. 只要 && 前面是 false，无论 && 后面是 true 还是 false，结果都将返 && 前面的值;

4. 只要 && 前面是 true，无论 && 后面是 true 还是 false，结果都将返 && 后面的值;

&& 的优先级是高于 || 是 false 的情况：空字符，NaN, undefined, null, false ([]空数据是对象，对象就是 true)是不是 false 和 是不是==false 没关系，（应该是看 Boolean()转换为布尔类型的结果）比如

```js
[] == false; // true
undefined == true; // false
undefined == false; // false
```

将[Boolean](https://so.csdn.net/so/search?q=Boolean&spm=1001.2101.3001.7020), Number, String 这三种类型进行不同类型的 == 比较时，其规则是，总将两边的值转换成数字，再看看转换结果数字是否相等 (undefined 转换成数字是 NaN)

## 说几条写 JavaScript 的基本规范？

声明变量的时候严格等于号

## var && let && const

ES6 之前创建变量用的是 var，之后创建变量用的是 let/const

### **特点**

- var：没有块级作用域；变量提升；变量覆盖
- let：不能跨块访问；先声明后使用；不允许重复声明
- const：声明之后必须赋值；值不可修改；其他和 let 一样

  ### **三者区别**

1. var 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。const 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。
2. var 可以先使用，后声明，因为存在变量提升；let 必须先声明后使用。
3. var 是允许在相同作用域内重复声明同一个变量的，而 let 与 const 不允许这一现象。
4. 在全局上下文中，基于 let 声明的全局变量和全局对象 GO（window）没有任何关系 ;var 声明的变量会和 GO 有映射关系；
5. 会产生暂时性死区：

### 暂时性死区

变量没有被声明，访问就是 undefined，但是一旦声明，到没有赋值之前，都会报错，这块区域就是暂时性死区。使用 let 或 const 声明的变量，在声明赋值没有到达之前，访问该变量都会导致报错，就连一直以为安全的 typeof 也不再安全

```js
{
  //函数作用域开始，TDZ开始
  console.log(temp); //ReferenceError: temp is not defined
  //声明
  let temp;
  console.log(temp); //ReferenceError: Cannot access 'temp' before initialization
  //赋值
  temp = 345; //TDZ结束
  console.log(temp); //345
  //块级作用域结束
}
//在块级作用域外访问
console.log(temp); //ReferenceError: temp is not defined
```

**注意**：任何在暂时性死区内访问变量的企图都会导致 **运行时错误**（Runtime Error）。只有执行到变量的声明语句时，该变量才会从暂时性死区内被移除并可以安全使用。

## JS 作用域

1. 除函数外，js 没有块级作用域
2. 作用域链：内部可以访问到外部的变量，但是外部不能访问内部的变量。
3. 变量会到创建该变量的函数中取值，如果没有，就会去当前作用域的上一级去查找，直到全局作用域，这个查找过程会形成作用域链。
4. 注意：如果有内部，优先查找内部，如果没有，就查找外部
5. 声明变量没有用 var let const，那这个变量就是全局的(window 的)
6. js 变量提升机制
7. 优先级： 声明变量 > 声明普通函数 > 参数 > 变量提升

## 闭包（保护和保存）

### 1. 闭包是什么

通俗地讲闭包是函数嵌套函数，进一步地讲闭包是一个函数加上创建函数的作用域链接，所以闭包和函数作用域有很大关系。通常情况下，函数执行完后，代码会被释放，但是有了作用域的存在，函数内部可以访问到函数外部的变量，这时候这个变量就不会被释放，上级函数的作用域也不会被销毁，所以闭包“保留”了函数的自由变量，可以像把这些东西关起来保护了起来。

```js
const lis = document.getElmentsByTagName("li"); // 加上lis长度为5
for (var i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    alert(i);
  };
}
// 每次点击列表的某个元素，都显示5
// 下面看加了闭包
for (var i = 0; i < lis.length; i++) {
  (function (i) {
    lis[i].onclick = function () {
      alert(i);
    };
  })(i);
}
// 每次点击列表的某个元素，对应显示下标0,1,2,3,4
```

### 2 闭包解决什么问题

- 延长变量的生命周期（原理是内部函数可以访问到外部函数的局部变量）
- 实现模块化功能（创建私有环境）const cal = (function(){

```js
let a = 10, b = 20
function add(){
    reurn a+b
}
function sub(){
    return a-b
}
return {
    add,
    sub
}
})()

console.log(cal.add()) // 30
console.log(cal.sub()) // -10
```

### 3 应用

- vue 的组件中的 data 是一个函数就是利用闭包的思想，可以保护组件的数据不被其他组件影响
- 大部分前端 JavaScript 代码都是“事件驱动”的，即一个事件绑定的回调方法;
- 发送 ajax 请求成功|失败的回调

  ### 4 闭包缺点

  变量驻留在内存中，造成内存损耗~~（~~~~内存泄漏~~~~）~~

  ### 5. 清理闭包

  将不需要的函数名、变量的赋值为 null

  ### 内存泄漏

  内存没有被使用，但是因为没被释放而被占有

**常见的四种内存泄漏**

#### 1. 全局变量

在非严格模式下当引用未声明的变量时，会在全局对象 window（浏览器）中创建一个新变量。全局变量是根据定义无法被垃圾回收机制收集

```js
function foo（arg）{
    bar =“some text”; // bar将泄漏到全局.
}
```

解决办法：严格模式

#### 2. 被遗忘的定时器和回调函数

```js
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        node.innerHTML = JSON.stringify(someResource));
        // 定时器也没有清除
    }
    // node、someResource 存储了大量数据 无法回收
}, 1000);
```

解决办法：在定时器完成工作的时候，手动清除定时器

#### 3. DOM 引用

```js
var refA = document.getElementById("refA");
document.body.removeChild(refA); // dom删除了
console.log(refA, "refA"); // 但是还存在引用，能console出整个div 没有被回收
```

解决办法：`refA = null`

#### 4. 闭包

```js
function bindEvent() {
  var obj = document.createElement("XXX");
  var unused = function () {
    console.log(obj, "闭包内引用obj obj不会被释放");
  };
  obj = null; // 解决方法
}
```

## 模块化开发怎么做

一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。

由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。

后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所有的模块成员，外部代码可以修改内部属性的值。

现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。

### js 的几种模块规范

js 中现在比较成熟的有四种模块加载方案。

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js 的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同。

## this 指向

1. 普通函数调用：通过函数名()直接调用：this 指向全局对象 window（注意 let 定义的变量不是 window 属性，只有 window.xxx 定义的才是。即 let a =’aaa’; this.a 是 undefined）普通函数内部调用 this
2. 构造函数调用：函数作为构造函数，用 new 关键字调用时：this 指向新 new 出的对象
3. 对象函数调用：通过对象.函数名()调用的：this 指向这个对象
4. 箭头函数调用：箭头函数里面没有 this ，所以永远是上层作用域 this（上下文）
5. apply 和 call 调用：函数体内 this 的指向的是 call/apply 方法第一个参数，若为空默认是指向全局对象 window。
6. 函数作为 window 内置函数的回调函数调用：this 指向 window（如 setInterval setTimeout 等）
7. 在进行事件绑定的时候，事件绑定函数中的 this 是绑定事件的元素
8. call/apply/bind 改变 this 指向

### 1 普通函数或作为对象属性

函数作为对象的属性被调用的时候，其 this 指向调用该函数的对象，否则其 this 指向 window

```js
const fn = function () {
  console.log(this); // 指向window
};

const obj = { name: "OBJ", fn };

fn(); // window（相当于window.fn()）

obj.fn(); // {name: 'OBJ', fn: function() {console.log(this)}} // obj

const fn1 = obj.fn;
fn1(); // window
```

### 2 构造函数(new Fn)

构造函数(new Fn)执行，函数中的 this 是当前类的实例

```javascript
var x = 100;
const Fn = function () {
  this.x = 200;
  console.log(this.x);
};

const fn = new Fn(); // 200
```

### 3 箭头函数

特点

1. 没有原型属性
2. 没有 this，其 this 指向最近的父级上下文
3. 不能作为构造函数，不能使用 new
4. 没有 arguments, 可以用 rest 参数代替

arguments 是函数（除箭头函数）内部的特殊局部变量，跟函数的形参有关，是个伪数组。rest 参数是剩余参数，只包含那些没有对应形参的实参，是数组

箭头函数中没有自身的 this，所用到的 this 都是其最近父级上下文中的 this

```js
const fn = function () {
  console.log(this); //  {x:100, fn: function() {...}} // obj
  setTimeout(() => {
    console.log(this); // window 定时器是全局的
  }, 1000);
  setTimeout(function () {
    console.log(this); // {x:100, fn: function() {...}} // obj
  });
};

const obj = { x: 100, fn };

obj.fn();
```

## call, apply, bind 区别

### 共同点：功能一致

- 改变 this 指向，
- 语法：函数.call() 、函数.apply()、函数.bind()

  ### 区别

- call, apply 可以立即执行，bind 不会立即执行（返回的是一个函数）
- 参数：apply 第二个参数是数组，call 和 bind 有多个参数是需要挨着写(arg1,arg2,arg3,...)

总结：基于 Function.prototype 上的 apply 、 call 和 bind 调用模式，这三个方法都可以指定调用函数的 this 指向。apply 接收参数的是数组，call 接受参数列表，bind 方法返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 window。

### 场景

- 继承：子类可以继承父类的方法

```js
function Animal(){
this.eat = function(){
    console.log("吃东西")
}
}
function Cat(){
Animal.call(this)
}
let cat = new Cat()cat.eat() // 吃东西
```

- 求最大值

```javascript
const arr = [1,2,3,4,5,6,7]
console.log(Math.max.apply(null,arr)) // 求最大值
// Math.max(...arr)
2 bind
const bnt = document.getElmentById('btn')
const hls = document.getElmentById('hls')
bnt.onclick = function(){
    console.log(this.id)
}.bind(hls)
```

### 手写 bind, call, aplly

- 手写 bind

```js
Function.prototype.myBind = function (obj, ...args) {
  return (...rest) => {
    this.call(obj, ...args, ...rest);
  };
};
```

- 手写 call

```js
Function.prototype.myCall = function (obj, ...args) {
  // this表示f.myCall的f函数
  obj.fn = this;
  const result = obj.fn(...args);
  // 删除 fn
  delete obj.fn;
  return result;
};
```

- 手写 apply

```js
Function.prototype.myApply = function (obj, args) {
  // this表示f.myCall的f函数
  obj.fn = this;
  const result = obj.fn(...args);
  // 删除 fn
  delete obj.fn6ew;
  return result;
};
```

## 原型对象

### 原型和原型对象

每个函数都是对象，有一个 prototype 属性，所以函数.prototype 就是原型，又因为函数.prototype 本身也是一个对象（有一些属性），所以也叫原型对象。下图是 console.log(Person.prototype)的结果。可以看到 Person.prototype 是一个对象，确切地说是原型对象，里面有一个 constructor 属性，它指向了 Person 构造函数。

### **prototype 和**ptoto\*\*\*\*

prototype 是每个函数都有的属性，**proto**是每个对象都有的属性**注意：函数本身也是一个对象，所以也有**proto**属性，所以函数同时有**proto**和 prototype 属性**下图展示了 console.log(obj.**proto**)的结果。可以看到 obj.**proto**里面也有个 constructor 属性，指向了构造函数 Object。

### **原型链**

为了理解原型链，我们先看一段代码。**代码 1**

```js
function Person(name) {}
// 在函数的原型上添加变量和方法
Person.prototype.name = "John";
Person.prototype.say = function () {
  console.log("hello John");
};
let obj = new Person();
console.log(obj.name); // Johnobj.say(); // hello John
console.log(obj.__proto__ === Person.prototype); // true
```

在这段代码里，obj 并没有 name 属性，但是 obj 的构造函数函数的 prototype 对象里有该属性，所以就打印出了 John 的结果。同样 say 也是如此。**注意：我们发现 obj.**proto** === Person.prototye，可见这里面有一个链接的关系**
**代码 2**

```javascript
let cat = {
  name: "喵喵",
};
cat.__proto__.eat = function () {
  console.log("吃鱼");
};
cat.eat(); // 吃鱼

console.log(cat.__proto__ === Object.prototype);
```

在这段代码里，cat 并没有 eat 属性，但是 cat 的**proto**里有该属性，所以就打印出了吃鱼的结果。**注意：我们发现 cat.**proto** === Obejct.prototye，可见这里面有一个链接的关系\*\***所以，上面的查找的过程形成的一条线索就叫做原型链\*\*。通俗的讲，一个对象有**proto**原型，这个原型是一个对象，该对象的 constructor 属性指向了构造函数。每个函数有 prototype 属性，该属性也可以称为原型，这个原型是一个对象，该对象的 constructor 属性指向了自己本身这个构造函数。如果要找一个对象的某个属性，先会在对象本身找，接着去对象的原型对象去找（对象.**proto** === 构造函数.prototype，所以二者都出现时，后面的结果会覆盖前面的结果），接着去上一层对象的原型对象上找，原型链的终点是 Object.prototype

**简答版**

1. 原型链是什么再查找一个对象的属性可以看出原型链。一个对象有**proto**原型，该原型指向构造函数的 prototype，其本身也是一个对象，也就是上一层的原型对象，这个对象也具有**proto**原型，就会指向他的上一层的原型对象。所以总的看，一直往上，存在一条原型链，原型链的最顶端是 Obejct.prototype

2. 解决什么问题对象共享属性和共享方法

3. 谁有原型函数：prototype 对象：**proto**

4. 对象查找属性或者方法的顺序对象本身找 => 构造函数找 => 对象原型找 **proto**=> 构造函数原型找 prototype => 对象上一层原型查找

### 获取原型的方法

- 通过对象的`__proto__`
- 通过构造函数（或者类）的`prototype `
- `p.constructor.prototype`

```js
p.__proto__;
p.constructor.prototype;
Object.getPrototypeOf(p);
```

### 类与继承

1 类 ES5 创建对象用构造函数，ES6 创建对象用 class

```js
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Cat.prototype.eat = function () {
  console.log("吃鱼");
};
let cat = new Cat("喵喵", 2);
cat.eat(); // 吃鱼
```

2 继承

- ES6

```js
class User{
constructor(username,password){
    this.username = username
    this.password = password
}
login(){
    console.log("log in")
}
}
class Admin extends User{
constructor() {
    super(); // 调用父类的constructor()
}
deletePerson(){
    console.log("删除了一个用户")
}
}
let admin = new Admin()admin.login() // log in
```

- ES5： prototype

```javascript
function User(username,password){
    this.username = username
    this.password = password
    this.login(){
        console.log("log in")
    }
}
function Admin(){
    this.deletePerson(){
        console.log("删除了一个用户")
    }

}
Admin.prototype = new User()
let admin = new Admin()
admin.login() // log in
```

### JS 实现继承的方式

1. ES6：`extends`, `super `相当于属性的继承

```js
class People {
  constructor(name) {
    this.name = name;
  }
  run() {}
}
// extends 相当于方法的继承
// 替换了上面的3行代码
class Man extends People {
  constructor(name) {
    // super 相当于属性的继承
    // 替换了 People.call(this, name)
    super(name);
    this.gender = "男";
  }
  fight() {}
}
```

2.  原型链：将父类的实例作为子类的原型

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.running = function () {
  console.log("在跑步~");
};
function Student() {
  this.score = 99;
}
Student.prototype = new Person();
Student.prototype.goToSchool = function () {
  console.log("去上学~");
};
let s1 = new Student();
console.log(s1);
console.log(s1.running());
```

3. 构造函数继承：子类型的构造函数内部调用父类型构造函数

缺点：只能继承父类的实例属性和方法，不能继承原型属性/方法

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ["Yasuo", "Zed", "Yi"];
}
Person.prototype.running = function () {
  console.log("在跑步~");
};
function Student(name, age) {
  Person.call(this, name, age); // 调用父类的构造函数
  this.score = 99;
}
// Student.prototype = new Person();
Student.prototype.goToSchool = function () {
  console.log("去上学~");
};
let s1 = new Student("Cyan", 18);
let s2 = new Student("Csy", 22);
console.log(s1.name);
console.log(s2.name);
s1.friends.push("LeeSin");
console.log(s1.friends);
console.log(s2.friends);
console.log(s1.running());
```

4. 组合式继承：原型链继承与构造函数继承组合在一起（用构造函数方式继承属性，原型链方式继承方法）

调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ["Yasuo", "Zed", "Yi"];
}
Person.prototype.running = function () {
  console.log("在跑步~");
};
function Student(name, age) {
  Person.call(this, name, age);
  this.score = 99;
}

Student.prototype = new Person();
Student.prototype.constructor = Student; // 组合继承需要修复构造函数指向
Student.prototype.goToSchool = function () {
  console.log("去上学~");
};
let s1 = new Student("Cyan", 18);
let s2 = new Student("Csy", 22);
console.log(s1.name);
console.log(s2.name);
s1.friends.push("LeeSin");
console.log(s1.friends);
console.log(s2.friends);
console.log(s1.running());
```

所有对象都有原型吗？错,。用 Object.create(null)创建的空对象没有。

## new 操作符

1 创建了一个空对象 2 将空对象的原型，指向构造函数的原型

`fn.prototype === new fn().__proto__`

3 将空对象作为构造函数的上下文（改变 this 的方向）

```js
function Foo() {
  this.name = "aa"; // this指向window
}
console.log(new Foo()); // Foo {name: 'aa'} this指向new出来的对象
```

4 对构造函数有返回值的处理判断如果返回的是基本类型，则返回的是空对象；如果是对象，则就是返回值

```js
function Foo() {
  this.name = "aa"; // this指向window
  return 11;
  // return {}
  // return [1,2,3]
}
console.log(new Foo()); // Foo {name: 'aa'} 返回的11没有影响
```

### 手写 new

```js
function create(fn, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将空对象的原型，指向构造函数的原型
  Obeject.setPrototypeOf(obj, fn.prototype);
  // obj.__proto__ = fn.prototype 也行
  // 将空对象作为构造函数的上下文(改变this指向)
  const result = fn.apply(obj, args);
  // 对构造函数的有返回值的处理判断
  return result instanceof Object ? result : obj;
}
```

## 微任务和宏任务

### EventLoop 事件循环

JS 是单线程，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入**执行栈**中，依次执行，将异步代码推入**异步队列**。异步队列又分为**宏任务队列**和**微任务队列**，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列主要是 Promise.then，宏任务主要是定时器，用户交互事件，ajax，读取文件

### 宏任务和微任务

微任务：Promise.then 宏任务：定时器，用户交互事件，ajax，读取文件

### **浏览器中的事件循环**

事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。事件循环可以简单的描述为以下四个步骤:

1. 函数入栈，当 Stack 中执行到异步任务的时候，就将他丢给 WebAPIs,接着执行同步任务,直到 Stack 为空；

2. 此期间 WebAPIs 完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）

3. 执行栈为空时，Event Loop 把微任务队列执行清空；

4. 微任务队列清空后，进入宏任务队列，取队列的第一项任务放入 Stack(栈）中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复 4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。![](https://camo.githubusercontent.com/b038d9c8e722c94f497227eea05da02b00a835d305b34efa5875923f6a927df6/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f33343265353831323233643234373164393438346663343862656239663865317e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765#crop=0&crop=0&crop=1&crop=1&from=url&id=axNhU&margin=%5Bobject%20Object%5D&originHeight=592&originWidth=897&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### **？？？Node 环境中的事件环**

？？？

### JS 执行顺序

1. 同步

2. process.nextTick

3. 异步

3.1 微任务： promise.then3.2 宏任务：定时器，用户交互事件，ajax，读取文件

4. setImmediate 方法

js 代码执行流程： 同步执行完后 => 事件循环（宏任务和微任务） => 微任务 => 宏任务 => 微任务 ... 注意：同步的任务都执行完后，才会执行事件循环的内容。要执行宏任务，前提是清空所有微任务。

### Promise、Aync/Await 的执行顺序

1. Promise 本身是**同步的立即执行函数**， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行。

```js
console.log("script start");
let promise1 = new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise1 end");
}).then(function () {
  console.log("promise2");
});
setTimeout(function () {
  console.log("settimeout");
});
console.log("script end");
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```

2. async/await 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start");
async1();
console.log("script end");

// 输出顺序：script start->async1 start->async2->script end->async1 end
```

## promise 和 async 函数

### 1 promise 用法

```javascript
let p = new Promise((resolve) => {
  console.log(11);
  resolve(22);
});
// .then的data是resolve里的，只有调用resolve才会执行.then
p.then((data) => {
  console.log(data);
});
```

### 2 async 函数

```js
async functin fun(){
    return 1
}
console.log(fun()) // 返回一个promiss

// ------------- 上面这代码和下面的代码等效 ----------------

function fun(){
    return new Promiss((resolve)=>{
        resolve(1)
    })
}
```

### 3 async await

await 后面是一个 promiss 对象，可以拿到 resolve 的值

```js
let p1 = new Promiss((resolve) => {
  resolve(1);
});
let p1 = new Promiss((resolve) => {
  resolve(2);
});
async function fun() {
  let a = await p1;
  let b = await p2;
  console.log(a, b); // 1,2
}
```

### 4 手写 promise

一个简单的 `Promise `的粗糙实现，关键点在于

1.  有三种状态：`pending`（进行中）、`fulfilled(resolved)`（已成功）和`rejected`（已失败）

2.  Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。

3.  设置两个队列，`onResolvedCallbacks`，`onRejectedCallbacks`，用于存放成功和失败的回调函数，当状态发生改变时依次从数组中取出执行。

4.  利用`setTimeout`实现`resolve`和`rejected`异步

5.  `then`返回`promise`

```js
class Prom {
  constructor(fn) {
    this.state = "PENDING";
    this.value = undefined;
    this.reason = undefined;
    // 保存尚未 fulfilled 的 then 中的回调函数(异步)
    this.onResolvedCallbacks = [];
    // 保存尚未 rejected 的 then 中的回调函数(异步)
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      setTimeout(() => {
        this.state = "RESOLVED";
        this.value = value;
        // 判断成功回调是否存在，如果存在就调用
        // 循环回调数组. 把数组前面的方法弹出来并且直接调用
        while (this.onResolvedCallbacks.length) {
          this.onResolvedCallbacks.shift()(value);
        }
      });
    };
    const reject = (reason) => {
      setTimeout(() => {
        this.state = "REJECTED";
        this.reason = reason;
        while (this.onRejectedCallbacks.length) {
          this.onRejectedCallbacks.shift()(reason);
        }
      });
    };
    fn(resolve, reject);
  }

  then(onFulfilled) {
    // 当传入的 then 回调函数为空的时候。。创建对应的空函数
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : () => {};
    if (this.state === "RESOLVED") {
      const result = onFulfilled(this.value);
      // 需要返回一个 Promise
      // 如果状态为 resolved，直接执行
      return Prom.resolve(result);
    }
    // then 方法执行时如果状态是等待态，就将其回调函数存入对应数组
    if (this.state === "PENDING") {
      return new Prom((resolve, reject) => {
        // 新增等待态判断，此时异步代码还未走完，回调入数组队列
        this.onResolvedCallbacks.push(onFulfilled);
      });
    }
  }
  catch(onRejcted) {
    onRejcted = typeof onRejcted === "function" ? onRejcted : () => {};
    if (this.status === "REJECTED") {
      const reason = onRejcted(this.reason);
      return Prom.reject(reason);
    }
    if (this.status === "PENDING") {
      return new Prom((resolve, reject) => {
        // 新增等待态判断，此时异步代码还未走完，回调入数组队列
        this.onRejectedCallbacks.push(onRejcted);
      });
    }
  }
}
```

### 5. 四个静态方法

resolve()、reject()、all()和 race()

## 可枚举、不可枚举

对象的属性所有的特性有以下几种：value: 属性的值 writable: 如果为 false，属性的值就不能被重写。get: 一旦目标属性被访问就会调回此方法，并将此方法的运算结果返回用户。set: 一旦目标属性被赋值，就会调回此方法。configurable: 如果为 false，则任何尝试删除目标属性或修改属性性以下特性（writable, configurable, enumerable）的行为将被无效化。enumerable: 是否能在 for...in 循环中遍历出来或在 Object.keys 中列举出来。其中 enumerable 表示可枚举特性(true 为可，false 为不可)。

## 对象拷贝

对象属于引用类型，其值存储在堆内存，但是指针存储在栈内存中。
**浅拷贝**：拷贝对象停留在第一层，拷贝了第一层的基本类型值，以及了第一层的引用类型地址例如：对于对象` [1, 2, {name:'John', age:12}, 5]`，浅拷贝只是拷贝了 1,2,5 数据的基本类性质，以及对象{name:'John', age:12} 的引用值。如果改变 1,2,5 数据，不会影响原对象，但是改变对象{name:'John', age:12} 会影响。

**深拷贝**：拷贝对象的所有的属性，创建出和原对象完全相同的对象，但是新对象和原对象不共享内存空间

### 浅拷贝方法

1. 通用循环

```js
function copy(obj) {
  let newObj = {};
  for (let i in obj) {
    newObj[i] = obj[i]; // 简单赋值
  }
  return newObj;
}

// const obj = { // a: "hello", // b:{ a: "world", b: 21 }, // c:["Bob", "Tom", "Jenny"], // d:function() { // alert("hello world"); // } // }
```

1.  `object.assign()`

把原对象的所有可枚举属性浅拷贝给新对象

```javascript
const obj1 = {
  username: "ming",
  skill: {
    play: ["backetball", "game"],
    rend: "book",
  },
  girlfriend: ["xiaomi", "xiaohong", "xiaolan"],
};
const obj2 = Object.assign({}, obj1);
obj2.username = "memg"; //修改基本类型
obj2.skill.read = "e-mail"; //修改二层基本类型
obj2.skill.play = ["footbool"]; //修改二层引用类型
obj2.girlfriend = ["xiaoming"];
console.log(obj1);
console.log(obj2);
// obj1:{username:'ming',     skill:{play:['backetball','game'],rend: 'book',read:'email'},girlfriends:['xiaoming']};
// obj2:{username:'meng',     skill:{play:['backetball','game'],rend: 'book',read:'email'},girlfriends:['xiaoming']};
```

3. `Array.prototype.concat()`

```js
const arr1 = [1, { username: "ming" }];
let arr2 = arr1.concat();
arr1[0] = 2;
arr1[1].username = "meng";
console.log(arr1); // [0,{username: 'meng',}]
console.log(arr2); // [1,{username: 'meng',}]
```

4. `Array.prototype.slice()`

```js
const arr1 = [1, { username: "ming" }];
let arr2 = arr1.slice();
arr2[0] = 2;
arr2[1].username = "meng";
console.log(arr1); // [1,{username: 'meng',}]
console.log(arr2); // [2,{username: 'meng',}]
```

5. 扩展运算符

扩展运算符和 Object.assign 的浅拷贝不一样，扩展运算符对数属性值是数组拷贝是深拷贝，和基本类型很像，不是拷贝的引用

```js
//拷贝对象
const obj1 = {
  username: "ming",
  skill: {
    play: ["backetball", "game"],
    rend: "book",
  },
  girlfriends: ["xiaomi", "xiaohong", "xiaolan"],
};
const obj2 = { ...obj1 }; // like arr.slice()
obj2.username = "memg"; //修改基本类型
obj2.skill.read = "e-mail"; //修改二层基本类型
obj2.skill.play = ["footbool"]; //修改二层引用类型
obj2.girlfriend = ["xiaoming"];

console.log(obj1);
// {girlfriend:['xiaomi', 'xiaohong', 'xiaolan'],skill: {play: Array(1), rend: 'book', read: 'e-mail'},username: "ming"}
console.log(obj2);
// {girlfriend:['xiaoming'],skill: {play: Array(1), rend: 'book', read: 'e-mail'},username: "meng"}
```

### 深拷贝方法

1. 递归

```js
function copy(obj) {
  let newObj = {};
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      newObj[i] = copy(obj[i]);
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}
```

2. `JSON.parse(JSON.stringify())`

```js
   const wes = {
   name: 'Wes',
   age: 100,
   social: {
   twitter: '@wesbos',
   facebook: 'wesbos.developer'
   }
   };
   const dev2 = JSON.parse(JSON.stringify(wes));
   console.log(dev2);

const fn = function(){}const res = JSON.stringify(fn) // Undefinedconst num = 123const res = JSON.stringify(num) // '123'const res = JSON.stringify(NaN) // 'null'const b = trueconst res = JSON.stringify(b) // 'true'
```

3. Lodash 的 deepclone

## 防抖节流

### 防抖

防止触发事件过于频繁，当一个事件被触发准备执行函数前，会等待一定的时间，如果没有再次被触发，那么就执行，如果被触发了，那就本次作废，重新从新触发的时间开始计算，并再次等待 1 秒，直到能最终执行

#### 1 手写防抖

```javascript
let inp = ducoment.querySelector('input')
inp.onchange = debounce(function(){
    console.log(this.value)
},500)

function debounce(fn,delay){
    let t = null
    return function(){
        if(t !== null){
            clearTimeout(t)
        }else{
            t = setTimeout(()={
                fn.call(this)
            },delay)
        }
    }
}
```

#### 2 防抖应用场景

1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存
4. 搜索框的输入，完成后自动搜索；手机号，邮箱验证输入检测

### 节流

在规定的时间内，函数只能被调用一次，且是最先被触发调用的那次。控制执行次数

#### 1 手写节流

```js
let inp = ducoment.querySelector('input')
    window.onscroll = throttle(function(){
    console.log("滚动")
},delay)

function throttle(fn,delay){
    let flag = true
    return function(){
        if(flag){
            setTimeout(()={
                    fn.call(this)
                    flag = true
                },delay)}
            flag = false
        }
}
```

#### 2 节流应用场景

1. scroll 事件，滚动加载更多，每隔一秒计算一次位置信息等
2. 浏览器播放事件，每个一秒计算一次进度信息等
3. input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)

### 总结 (简要答案)

- 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。**代码实现重在清零 clearTimeout**。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。
- 节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流 (Rate Limit) 类似。**代码实现重在开锁关锁 timer=timeout; timer=null**。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。
- **debounce:** Grouping a sudden burst of events (like keystrokes) into a single one.
- **throttle:** Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.
-

## ES6 filter 函数

```javascript
const a = [1, 2, 3, 4, 5];
// cur 当前值； idx 当前值的下标； arr 数组对象
const b = arr.filter((cur, idx, arr) => {
  return cur > 3;
});
console.log(a); //12345
console.log(b); // 45
```

## forEach 和 map 区别

1. forEach

- 没有返回值
- 不会被 break 打断
- 遍历的是 value

2. map

- 有返回值，返回是数组，默认返回值是 undefined
- 不会被 break 打断
- 遍历的是 value 和 key

## for 循环开启多个定时器输出

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

结果输入 3,3,3

### 如何让其输入 1,2,3

1. 立即执行函数形成一个闭包

```js
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}
```

2. 定时器第三个参数

第三个参数就是给第一个函数传参数

```js
for (var i = 0; i < 3; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    0,
    i
  );
}
```

3. let 代替 var

var 可以重复声明，用 var 声明迭代变量时，循环结束后，迭代变量保存的是退出循环的值，所以 i 是 3。let 不能重复声明，迭代变量时，都是开辟一个新的内存空间存储新的迭代变量。

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

## ES6 解构

### 数组结构

```js
let list = [3, 5];
let first = list[0];
let second = list[1];

let [first, second] = list;

// 解构中交换数据
let car1 = "bmw";
let car2 = ("audi"[(car2, car1)] = [car1, car2]);
```

### 对象解构

```js
const family = {
    father: ''
    mother: ''
}
const { father, mother } = family;

// 解构对象并重命名变量
const { father: f, mother:m } =  {father: '1',mother: '2'}
console.log(f); // '1'

// 函数解构
const family = {
    father: 'baba',
    mother: 'mama'
}
function log({ father }) {
    console.log(father)
}
log(family) // baba
```

## 正则表达式

### 创建方式

1. 字面量 `/ab+c/`

具有的方法：`match, replace, search, split`

2. 构造函数 `new RegExp("ab+c")`

具有的方法：`exet, test`

| `exec`    | 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。                    |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `test`    | 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。                                     |
| `match`   | 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。                  |
| `search`  | 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1。                   |
| `replace` | 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。                 |
| `split`   | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。 |

### 常用的正则表达式有哪些？

```js
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;
```

### 常用匹配符号

| 字符       | 描述                                                                       | 例子                                                                |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ^          | 匹配输入字符串的开始位置。                                                 | ^abc 表示匹配有 abc 开头的字符串                                    |
| [xyz]      | 字符集合。匹配所包含的任意一个字符。                                       | [abc] 可以匹配 plain 中的 a。                                       |
| \\d        | 匹配一个数字字符。等价于[0-9]。                                            | 4 = IV 中的 4                                                       |
| $          | 匹配输入字符串的结束位置。                                                 | ^\\d$ 表示匹配一个 [0-9] 的数字                                     |
| {n}        | n 是一个非负整数。匹配确定的 n 次。                                        | o{2} 不能匹配 Bob 中的 o，但是能匹配 food 中的两个 o。              |
| x&#124;y   | 匹配 x 或者 y。                                                            | z&#124;food 能匹配 z 或者 food。(z&#124;f)ood 则匹配 zood 或 food。 |
| (子表达式) | 标记一个子表达式的开始和结束位置。                                         | (\\w)\\1 能匹配 deep 中的 ee                                        |
| ?          | 可有可无匹配前一个字符                                                     |                                                                     |
| +          | 匹配前面的子表达式一次或多次。                                             | zo+ 能匹配 zo 或者 zoo，但不能匹配 z。+ 等价于 {1,}                 |
| \*         | 匹配前面的子表达式零次或多次。                                             | zo* 能匹配 z 或者 zoo。* 等价于 {0,}。                              |
| \\w        | 匹配包括下划线的任何单词字符。等价于 [A-Za-z0-9_]。                        | ID A1.3 中的 I、D、A、1 和 3                                        |
| [^a-z]     | 求反。匹配任何不在指定范围内的任意字符。                                   |                                                                     |
| .          | 匹配除 \\n 之外的任何单个字符。. 是一个很强大的 **元符号**，请慎用。       | 要匹配包括 \\n 在内的任何字符，请使用 (.&#124;\\n) 的模式。         |
| \\s        | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。 | \\w\\s 能匹配 ID A1.3 中的 D                                        |

## 事件流

### 事件冒泡

事件由具体的元素接收，逐级往下传播，到不具体的元素。

**不支持事件冒泡的事件：**
焦点（blur, focus）
鼠标（mouseenter, mouseleave）
UI 事件（load, unload, scroll, resize）

### 事件捕捉

事件由不具体的元素接收，逐级往上传播，到具体的元素

### 三种事件模型

1. DOM0 级

这种模型不会传播，所以没有事件流的概念。可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。

2. DOM2 级

在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素。后面两个阶段和 IE 事件模型的两个阶段相同。事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行。

3. IE 事件模型

在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行

### 事件处理程序

响应事件的函数，即为事件处理程序

1. HTML 事件处理程序

在 html 中绑定事件处理程序，缺点：

- HTML 和 JS 代码耦合，修改代码的时候需要修改两个地方，不易维护
- JS 和 HTML 代码加载顺序不确定，可能 JS 代码未加载完，相应的事件就被处罚，造成错误

```html
<input id="btn" type="button" value="Button" onclick="alert(event.type)" />
```

2. DOM 0 级事件处理程序

将函数直接赋值给一个事件处理属性。事件处理函数 this 指向元素节点，因为可访问该节点的任何属性和方法。

```js
<input id="btn" type="button" value="Button">

let btn = document.getElementById('btn')
// 添加事件，多次定义后，最后一个将覆盖之前的定义
btn.onclick = function () {
    alert(this.id)
}
// 删除事件
btn.onclick = null
```

3. DOM 2 级事件处理程序

两个方法 addEventListener()、removeEventListener()分别用来指定和删除事件处理程序，所以的节点都具有该两个方法。接收三个参数：事件名，方法，布尔值（true：在捕获阶段调用事件处理程序，false：在冒泡阶段调用）

```js
<input id="btn" type="button" value="Button">

let btn = document.getElementById('btn')

function fn ( ) {
    alert('This is a function')
}

// 添加事件，可以定义多个，按照顺序执行
btn.addEventListener('click', function () {
    alert('click1')
}, false)
btn.addEventListener('click', fn, false)

// 删除事件
btn.removeEventListener('click', fn)
```

### 应用场景：事件委托

大量子节点绑定事件处理函数时，可交给父元素进行统一管理。本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。优点：可以方便地动态添加管理子元素，不需要重新修改绑定事件。不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。

### 防止冒泡事件

1. event.stopPropagation(); // 阻止了事件冒泡，但不会阻击默认行为
2. event.preventDefault(); // 阻止默认事件,比如 a 的跳转事件

### 不能冒泡的 9 个事件

mouseenter, mouseleave,blur,resize,load,unload,focus,abort,error
妈(m)妈(m)不(b)让(l,u)我浪(f,a,e)费

## 虚拟列表

## 类数组转化为数组的方法

类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?（1）通过 call 调用数组的 slice 方法来实现转换`Array.prototype.slice.call(arrayLike);`（2）通过 call 调用数组的 splice 方法来实现转换`Array.prototype.splice.call(arrayLike, 0);`（3）通过 apply 调用数组的 concat 方法来实现转换 `Array.prototype.concat.apply([], arrayLike);`（4）通过 Array.from 方法来实现转换 `Array.from(arrayLike);`（5）扩展运算符

```js
const arrayLike=document.querySelectorAll('div')

// 1.扩展运算符
[...arrayLike]

// 2.Array.from
Array.from(arrayLike)

// 3.Array.prototype.slice
Array.prototype.slice.call(arrayLike)

// 4.Array.apply
Array.apply(null, arrayLike)

// 5.Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)
```

## 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。有三种办法来解决这个问题：1.通过 meta 标签禁用网页的缩放。2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。3.调用一些 js 库，比如 FastClick

## 什么是“前端路由”？

1. 什么是前端路由？

不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。

2. 什么时候使用前端路由？

在单页面应用，大部分页面结构不变，只改变部分内容的使用

3. 前端路由有什么优点和缺点？

优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置 4. 实现方式前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。

## 为什么 0.1+0.2 ! == 0.3，如何让其相等

在开发过程中遇到类似这样的问题：

```js
let n1 = 0.1,
  n2 = 0.2;
console.log(n1 + n2); // 0.30000000000000004
```

这里得到的不是想要的结果，要想等于 0.3，就要把它进行转化：:::info(n1 + n2).toFixed(2) // 注意，toFixed 为四舍五入:::

复制代码 toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字。那为什么会出现这样的结果呢？计算机是通过二进制的方式存储数据的，所以计算机计算 0.1+0.2 的时候，实际上是计算的两个数的二进制的和。0.1 的二进制是 0.0001100110011001100...（1100 循环），0.2 的二进制是：0.00110011001100...（1100 循环），这两个数的二进制都是无限循环的数。那 JavaScript 是如何处理无限循环的二进制小数呢？一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循 IEEE 754 标准，使用 64 位固定长度来表示，也就是标准的 double 双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留 52 位，再加上前面的 1，其实就是保留 53 位有效数字，剩余的需要舍去，遵从“0 舍 1 入”的原则。根据这个原则，0.1 和 0.2 的二进制数相加，再转化为十进制数就是：0.30000000000000004。

## 回调函数

一个函数作为另一个函数的参数，前一个函数就是回调函数。[参考博客](https://segmentfault.com/a/1190000007227305)

## 异步编程的实现方式

1. 回调函数

优点：简单、容易理解缺点：不利于维护，代码耦合高

2. 事件监听（采用时间驱动模式，取决于某个事件是否发生）：

优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数缺点：事件驱动型，流程不够清晰

3. Promise 对象

优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数；缺点：编写和理解，相对比较难

4. async 函数

优点：内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰。缺点：错误处理机制

5. 发布/订阅（观察者模式）

类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者

6. Generator 函数

优点：函数体内外的数据交换、错误处理机制缺点：流程管理不方便

## 延迟加载 js 方式

- async
  - 后台下载
  - 执行会中断页面渲染
  - 下载好后立刻执行，没有顺序（谁先下载完谁先执行）
- defer
  - 后台下载
  - 不会中断页面渲染（等页面渲染完后执行）
  - 顺次执行（多个 js 文件会按先后顺序执行）

## 笔试题知识

`.` 操作符

```js
var arr = new Array(3); //结果是【empty ，empty ，empty  】
arr[0] = 1; //结果是【1，empty ，empty 】
arr.b = 0; //结果是【1，empty ，empty ，b:0】
// 通过点操作符（.）添加的属性和length属性处于同一层级，不会影响length的值。
// 所以arr长度为3，点操作符（.）添加的属性可以用for...in...循环遍历，但不能用foreach循环遍历
// 但是forEach遍历结果是1，for in 的遍历结果是1,0
```

### 数组

Array 的一些方法 filter：过滤出符合条件的元素，返回符合的数组 some：检测数组是否有元素满足条件，返回 true 或 falseevery：检测数组是否全部元素满足条件，返回 true 或 falsemap：遍历数组，且对每个元素进行操作，返回数组

### 二进制操作和逻辑符

<< 左移：二进制左移。A << B，相当于 A\*pow(2, B)^ 异或：二进制是否相同，相同为 0，不同为 1

```js
a=10;
a^=(1<<4)-1;
先看<<：1对应的二进制为1，左移四位，变成10000（二进制），对应十进制为16，所以表达式变为
a = a^15
10对应二进制为1010,15对应二进制为1111，所以异或结果为0101，对应十进制为5

速记知识：1<<4   左移相当于1*2^4=16（因为就是往后边加四个零）
```

### 函数

1. 函数实参和形参

函数执行后没有返回值，默认输出`undefined`函数有实参和形参，函数内部的形参相当于在函数作用域内声明了该变量，只是没有显示地写出来。如果函数内部对形参再次赋值，那么就会打印出赋值后的结果；如果没有，那么就用形参的值。函数内部

```js
var foo = { n: 1 };
(function (foo) {
  console.log(foo.n); // 1
  foo.n = 3; // 改变了全局对象foo
  var foo = { n: 2 }; // 声明了一个局部变量foo，和全局变量指向不同
  console.log(foo.n); // 2
})(foo);
console.log(foo.n); // 3
```

2. 函数参数

当实参比形参数量少时，剩下的形参都是 undefined 当实参比形参数量多时，剩下的实参可以通过 auguments 对象获取到。`auguments`对象的特点：

- 是类数组对象，augument instance of Obeject // true
- 有 length 属性，获取实参长度，可以通过下标访问元素（形参长度用 fn.length 获取）

`rest`剩余参数，用于获取函数多余的参数，是一个数组。特点：

- 是数组，获取多余的实参
- 剩余参数后不能有其他参数，否则报错
- 函数的 length 属性值不包含剩余参数

### 事件

- 鼠标事件

mousemove: _e_.offsetX, _e_.offsetY
mouseup
mouseout
mousedown

- 触摸事件

touchstart: //手指放到屏幕上时触发 touchmove: //手指在屏幕上滑动式触发 touchend: //手指离开屏幕时触发 touchcancel: //系统取消 touch 事件的时候触发，这个好像比较少用

### 基本知识

- `var a = b = 1; `的执行结果等效于` b = 1; var a = b`。
- `Date.now()` 方法返回自 1970 年 1 月 1 日 00:00:00 UTC 到当前时间的毫秒数，返回类型为`number`
- document.getElementById();

document.getElementsByTagName();document.getElementsByName();document.getElementsByClassName();除了 ById 是 Element，其余都是 Elements

- 如果构造函数有返回值且返回值为一个对象，则由构造函数创建的实例对象即为返回的对象；如果返回的是一个基本数据类型或者返回 this，或者没有返回值，则默认返回由该构造函数创建的实例对象。
- 函数提升会在变量提升之前
- `[]==false; // true {}==false; // false`
- 立即执行函数如果有函数名，那么函数体内不可以修改函数名！也不会报错，就是无效！
- 函数内部可以访问到自身函数
-

```js
function a() {
  console.log(a); // 打印函数，而不是undefined
}
```

### sort 的原理

1. 不传参数，会先把元素转换成字符串，然后根据字符串的 unicode 编码顺序排序
2. 参数是函数，若函数返回值大于 1，交换；否则不交换。
3. sort 内部的排序算法

看源码可知，sort 内部是快排的实现，但是在数据长度较小时会使用插入排序，即如果数组长度小于等于 10（v8 源码）的时候使用插入排序，大于这个值使用快速排序。

#### 插入排序

从第二个数开始，每个数往前比较，如果大，往后排时间复杂度为 O(n^2)

```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    while (j > 0) {
      // 比temp大的数往后移
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j--;
    }
    // 前一个数赋值为当前的数
    arr[j] = temp;
  }
}
```

#### 快速排序

先找一个基准，一般为第一个元素，然后分区排列，最后的结果是比基准小的数排在基准左侧，比基准大的数排在基准右侧。这样就确定了基准的位置。接下来递归处理，分区左右两侧采用相同的步骤分布。

时间复杂度为 O(nlogn)

```js
const partition = (arr, left, right) => {
  let pivot = arr[left];
  while (left < right) {
    while (right > left && arr[right] > pivot) {
      right--;
    }
    arr[left] = arr[right];
    while (left < right && arr[left] < pivot) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
};
function quikSort(arr, left, right) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quikSort(arr, left, pivotIndex - 1);
    quikSort(arr, pivotIndex + 1, right);
  }
}
```
