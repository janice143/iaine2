<template><div><h2 id="数据类型-8-种" tabindex="-1"><a class="header-anchor" href="#数据类型-8-种" aria-hidden="true">#</a> 数据类型（8 种）</h2>
<h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h3>
<p><code v-pre>string, number, boolean, undefined, null, symbol, bigInt</code></p>
<p>保存在 栈内存<code v-pre>symbol </code>表示独一无二且不可变的数据类型<code v-pre>BigInt </code>是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。</p>
<h4 id="bigint-数据类型" tabindex="-1"><a class="header-anchor" href="#bigint-数据类型" aria-hidden="true">#</a> BigInt 数据类型</h4>
<ol>
<li>数字类型的数据，可以表示任意精度的整数。</li>
<li>定义一个 BigInt：</li>
</ol>
<ul>
<li>在一个数字后面加上 n 来定义一个 BigInt</li>
<li>使用 BigInt()来定义一个 BigInt</li>
</ul>
<ol start="3">
<li>
<p>解决 number 类型精度丢失问题。number 类型只能安全地表示-(2^53-1) 到(2^53-1)之间的整数，不在这个区间的数将自动四舍五入;</p>
</li>
<li>
<p>运算
只能和 BigInt 数据进行运算</p>
</li>
<li>
<p>比较
与 BigInt 类型数据比较</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ↪ true</span>

<span class="token number">2n</span> <span class="token operator">></span> <span class="token number">1n</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ true</span>

<span class="token number">2n</span> <span class="token operator">>=</span> <span class="token number">2n</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 Number 类型数据比较</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1n</span> <span class="token operator">&lt;</span> <span class="token number">2n</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ true</span>

<span class="token number">2n</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ true</span>

<span class="token number">2n</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BigInt 和 Number 不是严格相等的，但是宽松式相等</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">0n</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// ↪ false</span>

<span class="token number">0n</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//↪ true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>应用场景</li>
</ol>
<ul>
<li>
<p>高精度时间戳
大于 2^53 - 1 的整数的一个应用场景就是高精度时间戳。精确到纳秒级别的时间戳很常见</p>
</li>
<li>
<p>大整数 ID</p>
</li>
</ul>
<h4 id="symbol-数据类型" tabindex="-1"><a class="header-anchor" href="#symbol-数据类型" aria-hidden="true">#</a> Symbol 数据类型</h4>
<ol>
<li>表示独一无二且不可变的数据类型，解决可能出现的全局变量冲突的问题</li>
<li>基本使用：Symbol()函数即可生成一个 Symbol 类型的数据；该函数可以接受一个字符串作为参数，表示对 Symbol 的描述，因为只是表示对当前 Symbol 值的描述，因此相同参数的 Symbol 函数的返回值是不相等的。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 没有参数的情况</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s1 <span class="token operator">===</span> s2<span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// 有参数的情况</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s1 <span class="token operator">===</span> s2<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Symbol.for</li>
</ol>
<p>它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值</p>
<ol start="4">
<li><a href="https://juejin.cn/post/7028830157230047263#heading-2" target="_blank" rel="noopener noreferrer">应用场景<ExternalLinkIcon/></a></li>
</ol>
<ul>
<li>使用 Symbol 来作为对象属性名(key)：该属性不可枚举，可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。“对内操作”和“对外选择性输出”变得可控制</li>
<li>使用 Symbol 来替代常量：变量多的时候，无需给变量想不同的名字</li>
<li>定义类的私有属性/方法</li>
</ul>
<h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3>
<p><code v-pre>object (包括array, function, object等)</code></p>
<p>保存在 堆内存，栈内存存储的是变量标识符和存储地址。</p>
<h3 id="数据类型检测方案" tabindex="-1"><a class="header-anchor" href="#数据类型检测方案" aria-hidden="true">#</a> 数据类型检测方案</h3>
<ul>
<li>typeof (区分基本数据类型，null，array 和 object 无法区分，function 也可以)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">"mc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object</span>

<span class="token keyword">typeof</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// number</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Symbol<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>instanceof (无法区分基本数据类型，可以区分 array 和 object，function 也可以)</li>
</ul>
<p>用于判断一个引用类型是否属于某构造函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"str"</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原理</strong>：通过判断对象的原型链中是不是能找到构造函数的 prototype。</p>
<ul>
<li>Object.prototype.toString.call() （万能法，精准判断数据类型）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Number]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Boolean]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"mc"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object String]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Array]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Object]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Function]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Undefined]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object Null]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-对象" tabindex="-1"><a class="header-anchor" href="#js-对象" aria-hidden="true">#</a> JS 对象</h3>
<ol>
<li>对象通过 new 操作符构建的，所以对象不相等(=== 是 false)</li>
<li>对象是引用类型（地址）</li>
<li>对象的 key 是字符串类型</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">cc</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"456"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b 和 c 是对象，当成为 a 的属性的时候，会变成字符串，值是[object object]。c 会覆盖 b 的值。相当于<code v-pre>a = { '[object object]':456, aa:1} </code>4. 对象如何找属性或者方法（原型链）对象本身找 =&gt; 构造函数找 =&gt; 对象原型找 <strong>proto</strong>=&gt; 构造函数原型找 prototype =&gt; 对象上一层原型查找</p>
<h3 id="js-内置对象" tabindex="-1"><a class="header-anchor" href="#js-内置对象" aria-hidden="true">#</a> JS 内置对象</h3>
<p>Date, Math, String, Array</p>
<h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token string">"name"</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 'nametrue' （字符串和其他类型相加，都是转化成字符串）</span>
<span class="token keyword">undefined</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// NaN（是一个number)</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否是数组" tabindex="-1"><a class="header-anchor" href="#是否是数组" aria-hidden="true">#</a> 是否是数组</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span> isArray
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token number">2</span> <span class="token keyword">instanceof</span>
<span class="token class-name">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span>

<span class="token number">3</span> 原型prototype
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'Array'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>

<span class="token number">4</span> isPrototypeOf
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token number">5</span> constructor
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'Array'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-和-undefined-区别" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-区别" aria-hidden="true">#</a> null 和 undefined 区别</h3>
<p><code v-pre>undefined</code>一个变量最原始的状态；此处应该有一个值，但是还没有定义；转为数值时为 NaN</p>
<ul>
<li>变量被声明了，但没有赋值</li>
<li>调用函数时，但没有传递实参</li>
<li>访问对象上不存在的属性或者未定义的变量</li>
<li>函数没有返回值时，默认返回 undefined</li>
</ul>
<p><code v-pre>null</code>表示一个被人为的重置为空对象；该处的值为空；转为数值时为 0（但是 null == 0 结果是 false，null&gt;=0 结果为 true）典型用法：</p>
<ul>
<li>作为函数的参数，表示该函数的参数不是对象。</li>
<li>作为对象原型链的终点。</li>
</ul>
<p>在实际使用过程中，为了保证变量所代表的语义，不要对变量赋值 undefiSned，当需要释放一个对象时，直接赋值为 null 即可。</p>
<h3 id="和-区别" tabindex="-1"><a class="header-anchor" href="#和-区别" aria-hidden="true">#</a> == 和 === 区别</h3>
<p>== 比较的是值=== 不仅比较值，还比较类型</p>
<h3 id="和-返回值" tabindex="-1"><a class="header-anchor" href="#和-返回值" aria-hidden="true">#</a> || 和 &amp;&amp; 返回值</h3>
<ol>
<li>
<p>只要 || 前面为 false, 不管 || 后面是 true 还是 false，都返回 || 后面的值。</p>
</li>
<li>
<p>只要 || 前面为 true, 不管 || 后面是 true 还是 false，都返回 || 前面的值。</p>
</li>
<li>
<p>只要 &amp;&amp; 前面是 false，无论 &amp;&amp; 后面是 true 还是 false，结果都将返 &amp;&amp; 前面的值;</p>
</li>
<li>
<p>只要 &amp;&amp; 前面是 true，无论 &amp;&amp; 后面是 true 还是 false，结果都将返 &amp;&amp; 后面的值;</p>
</li>
</ol>
<p>&amp;&amp; 的优先级是高于 || 是 false 的情况：空字符，NaN, undefined, null, false ([]空数据是对象，对象就是 true)是不是 false 和 是不是==false 没关系，（应该是看 Boolean()转换为布尔类型的结果）比如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将<a href="https://so.csdn.net/so/search?q=Boolean&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Boolean<ExternalLinkIcon/></a>, Number, String 这三种类型进行不同类型的 == 比较时，其规则是，总将两边的值转换成数字，再看看转换结果数字是否相等 (undefined 转换成数字是 NaN)</p>
<h2 id="说几条写-javascript-的基本规范" tabindex="-1"><a class="header-anchor" href="#说几条写-javascript-的基本规范" aria-hidden="true">#</a> 说几条写 JavaScript 的基本规范？</h2>
<p>声明变量的时候严格等于号</p>
<h2 id="var-let-const" tabindex="-1"><a class="header-anchor" href="#var-let-const" aria-hidden="true">#</a> var &amp;&amp; let &amp;&amp; const</h2>
<p>ES6 之前创建变量用的是 var，之后创建变量用的是 let/const</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> <strong>特点</strong></h3>
<ul>
<li>
<p>var：没有块级作用域；变量提升；变量覆盖</p>
</li>
<li>
<p>let：不能跨块访问；先声明后使用；不允许重复声明</p>
</li>
<li>
<p>const：声明之后必须赋值；值不可修改；其他和 let 一样</p>
<h3 id="三者区别" tabindex="-1"><a class="header-anchor" href="#三者区别" aria-hidden="true">#</a> <strong>三者区别</strong></h3>
</li>
</ul>
<ol>
<li>var 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。const 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。</li>
<li>var 可以先使用，后声明，因为存在变量提升；let 必须先声明后使用。</li>
<li>var 是允许在相同作用域内重复声明同一个变量的，而 let 与 const 不允许这一现象。</li>
<li>在全局上下文中，基于 let 声明的全局变量和全局对象 GO（window）没有任何关系 ;var 声明的变量会和 GO 有映射关系；</li>
<li>会产生暂时性死区：</li>
</ol>
<h3 id="暂时性死区" tabindex="-1"><a class="header-anchor" href="#暂时性死区" aria-hidden="true">#</a> 暂时性死区</h3>
<p>变量没有被声明，访问就是 undefined，但是一旦声明，到没有赋值之前，都会报错，这块区域就是暂时性死区。使用 let 或 const 声明的变量，在声明赋值没有到达之前，访问该变量都会导致报错，就连一直以为安全的 typeof 也不再安全</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//函数作用域开始，TDZ开始</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: temp is not defined</span>
  <span class="token comment">//声明</span>
  <span class="token keyword">let</span> temp<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: Cannot access 'temp' before initialization</span>
  <span class="token comment">//赋值</span>
  temp <span class="token operator">=</span> <span class="token number">345</span><span class="token punctuation">;</span> <span class="token comment">//TDZ结束</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//345</span>
  <span class="token comment">//块级作用域结束</span>
<span class="token punctuation">}</span>
<span class="token comment">//在块级作用域外访问</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: temp is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：任何在暂时性死区内访问变量的企图都会导致 <strong>运行时错误</strong>（Runtime Error）。只有执行到变量的声明语句时，该变量才会从暂时性死区内被移除并可以安全使用。</p>
<h2 id="js-作用域" tabindex="-1"><a class="header-anchor" href="#js-作用域" aria-hidden="true">#</a> JS 作用域</h2>
<ol>
<li>除函数外，js 没有块级作用域</li>
<li>作用域链：内部可以访问到外部的变量，但是外部不能访问内部的变量。</li>
<li>变量会到创建该变量的函数中取值，如果没有，就会去当前作用域的上一级去查找，直到全局作用域，这个查找过程会形成作用域链。</li>
<li>注意：如果有内部，优先查找内部，如果没有，就查找外部</li>
<li>声明变量没有用 var let const，那这个变量就是全局的(window 的)</li>
<li>js 变量提升机制</li>
<li>优先级： 声明变量 &gt; 声明普通函数 &gt; 参数 &gt; 变量提升</li>
</ol>
<h2 id="闭包-保护和保存" tabindex="-1"><a class="header-anchor" href="#闭包-保护和保存" aria-hidden="true">#</a> 闭包（保护和保存）</h2>
<h3 id="_1-闭包是什么" tabindex="-1"><a class="header-anchor" href="#_1-闭包是什么" aria-hidden="true">#</a> 1. 闭包是什么</h3>
<p>通俗地讲闭包是函数嵌套函数，进一步地讲闭包是一个函数加上创建函数的作用域链接，所以闭包和函数作用域有很大关系。通常情况下，函数执行完后，代码会被释放，但是有了作用域的存在，函数内部可以访问到函数外部的变量，这时候这个变量就不会被释放，上级函数的作用域也不会被销毁，所以闭包“保留”了函数的自由变量，可以像把这些东西关起来保护了起来。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElmentsByTagName</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加上lis长度为5</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lis<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  lis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 每次点击列表的某个元素，都显示5</span>
<span class="token comment">// 下面看加了闭包</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lis<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 每次点击列表的某个元素，对应显示下标0,1,2,3,4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-闭包解决什么问题" tabindex="-1"><a class="header-anchor" href="#_2-闭包解决什么问题" aria-hidden="true">#</a> 2 闭包解决什么问题</h3>
<ul>
<li>延长变量的生命周期（原理是内部函数可以访问到外部函数的局部变量）</li>
<li>实现模块化功能（创建私有环境）const cal = (function(){</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    reurn a<span class="token operator">+</span>b
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">-</span>b
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
    add<span class="token punctuation">,</span>
    sub
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cal<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cal<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-应用" tabindex="-1"><a class="header-anchor" href="#_3-应用" aria-hidden="true">#</a> 3 应用</h3>
<ul>
<li>
<p>vue 的组件中的 data 是一个函数就是利用闭包的思想，可以保护组件的数据不被其他组件影响</p>
</li>
<li>
<p>大部分前端 JavaScript 代码都是“事件驱动”的，即一个事件绑定的回调方法;</p>
</li>
<li>
<p>发送 ajax 请求成功|失败的回调</p>
<h3 id="_4-闭包缺点" tabindex="-1"><a class="header-anchor" href="#_4-闭包缺点" aria-hidden="true">#</a> 4 闭包缺点</h3>
<p>变量驻留在内存中，造成内存损耗~~（<s><s>内存泄漏</s></s>）~~</p>
<h3 id="_5-清理闭包" tabindex="-1"><a class="header-anchor" href="#_5-清理闭包" aria-hidden="true">#</a> 5. 清理闭包</h3>
<p>将不需要的函数名、变量的赋值为 null</p>
<h3 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a> 内存泄漏</h3>
<p>内存没有被使用，但是因为没被释放而被占有</p>
</li>
</ul>
<p><strong>常见的四种内存泄漏</strong></p>
<h4 id="_1-全局变量" tabindex="-1"><a class="header-anchor" href="#_1-全局变量" aria-hidden="true">#</a> 1. 全局变量</h4>
<p>在非严格模式下当引用未声明的变量时，会在全局对象 window（浏览器）中创建一个新变量。全局变量是根据定义无法被垃圾回收机制收集</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> foo（arg）<span class="token punctuation">{</span>
    bar <span class="token operator">=</span>“some text”<span class="token punctuation">;</span> <span class="token comment">// bar将泄漏到全局.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：严格模式</p>
<h4 id="_2-被遗忘的定时器和回调函数" tabindex="-1"><a class="header-anchor" href="#_2-被遗忘的定时器和回调函数" aria-hidden="true">#</a> 2. 被遗忘的定时器和回调函数</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> someResource <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'Node'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>someResource<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定时器也没有清除</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// node、someResource 存储了大量数据 无法回收</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：在定时器完成工作的时候，手动清除定时器</p>
<h4 id="_3-dom-引用" tabindex="-1"><a class="header-anchor" href="#_3-dom-引用" aria-hidden="true">#</a> 3. DOM 引用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> refA <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"refA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>refA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// dom删除了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refA<span class="token punctuation">,</span> <span class="token string">"refA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 但是还存在引用，能console出整个div 没有被回收</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：<code v-pre>refA = null</code></p>
<h4 id="_4-闭包" tabindex="-1"><a class="header-anchor" href="#_4-闭包" aria-hidden="true">#</a> 4. 闭包</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"XXX"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">unused</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"闭包内引用obj obj不会被释放"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 解决方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化开发怎么做" tabindex="-1"><a class="header-anchor" href="#模块化开发怎么做" aria-hidden="true">#</a> 模块化开发怎么做</h2>
<p>一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。</p>
<p>由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。</p>
<p>后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所有的模块成员，外部代码可以修改内部属性的值。</p>
<p>现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。</p>
<h3 id="js-的几种模块规范" tabindex="-1"><a class="header-anchor" href="#js-的几种模块规范" aria-hidden="true">#</a> js 的几种模块规范</h3>
<p>js 中现在比较成熟的有四种模块加载方案。</p>
<p>第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。</p>
<p>第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。</p>
<p>第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js 的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。</p>
<p>第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同。</p>
<h2 id="this-指向" tabindex="-1"><a class="header-anchor" href="#this-指向" aria-hidden="true">#</a> this 指向</h2>
<ol>
<li>普通函数调用：通过函数名()直接调用：this 指向全局对象 window（注意 let 定义的变量不是 window 属性，只有 window.xxx 定义的才是。即 let a =’aaa’; this.a 是 undefined）普通函数内部调用 this</li>
<li>构造函数调用：函数作为构造函数，用 new 关键字调用时：this 指向新 new 出的对象</li>
<li>对象函数调用：通过对象.函数名()调用的：this 指向这个对象</li>
<li>箭头函数调用：箭头函数里面没有 this ，所以永远是上层作用域 this（上下文）</li>
<li>apply 和 call 调用：函数体内 this 的指向的是 call/apply 方法第一个参数，若为空默认是指向全局对象 window。</li>
<li>函数作为 window 内置函数的回调函数调用：this 指向 window（如 setInterval setTimeout 等）</li>
<li>在进行事件绑定的时候，事件绑定函数中的 this 是绑定事件的元素</li>
<li>call/apply/bind 改变 this 指向</li>
</ol>
<h3 id="_1-普通函数或作为对象属性" tabindex="-1"><a class="header-anchor" href="#_1-普通函数或作为对象属性" aria-hidden="true">#</a> 1 普通函数或作为对象属性</h3>
<p>函数作为对象的属性被调用的时候，其 this 指向调用该函数的对象，否则其 this 指向 window</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指向window</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"OBJ"</span><span class="token punctuation">,</span> fn <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window（相当于window.fn()）</span>

obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: 'OBJ', fn: function() {console.log(this)}} // obj</span>

<span class="token keyword">const</span> fn1 <span class="token operator">=</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-构造函数-new-fn" tabindex="-1"><a class="header-anchor" href="#_2-构造函数-new-fn" aria-hidden="true">#</a> 2 构造函数(new Fn)</h3>
<p>构造函数(new Fn)执行，函数中的 this 是当前类的实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数" aria-hidden="true">#</a> 3 箭头函数</h3>
<p>特点</p>
<ol>
<li>没有原型属性</li>
<li>没有 this，其 this 指向最近的父级上下文</li>
<li>不能作为构造函数，不能使用 new</li>
<li>没有 arguments, 可以用 rest 参数代替</li>
</ol>
<p>arguments 是函数（除箭头函数）内部的特殊局部变量，跟函数的形参有关，是个伪数组。rest 参数是剩余参数，只包含那些没有对应形参的实参，是数组</p>
<p>箭头函数中没有自身的 this，所用到的 this 都是其最近父级上下文中的 this</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  {x:100, fn: function() {...}} // obj</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window 定时器是全局的</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {x:100, fn: function() {...}} // obj</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> fn <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call-apply-bind-区别" tabindex="-1"><a class="header-anchor" href="#call-apply-bind-区别" aria-hidden="true">#</a> call, apply, bind 区别</h2>
<h3 id="共同点-功能一致" tabindex="-1"><a class="header-anchor" href="#共同点-功能一致" aria-hidden="true">#</a> 共同点：功能一致</h3>
<ul>
<li>
<p>改变 this 指向，</p>
</li>
<li>
<p>语法：函数.call() 、函数.apply()、函数.bind()</p>
<h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3>
</li>
<li>
<p>call, apply 可以立即执行，bind 不会立即执行（返回的是一个函数）</p>
</li>
<li>
<p>参数：apply 第二个参数是数组，call 和 bind 有多个参数是需要挨着写(arg1,arg2,arg3,...)</p>
</li>
</ul>
<p>总结：基于 Function.prototype 上的 apply 、 call 和 bind 调用模式，这三个方法都可以指定调用函数的 this 指向。apply 接收参数的是数组，call 接受参数列表，bind 方法返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 window。</p>
<h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3>
<ul>
<li>继承：子类可以继承父类的方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"吃东西"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 吃东西</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>求最大值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 求最大值</span>
<span class="token comment">// Math.max(...arr)</span>
<span class="token number">2</span> bind
<span class="token keyword">const</span> bnt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElmentById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> hls <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElmentById</span><span class="token punctuation">(</span><span class="token string">'hls'</span><span class="token punctuation">)</span>
bnt<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>hls<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写-bind-call-aplly" tabindex="-1"><a class="header-anchor" href="#手写-bind-call-aplly" aria-hidden="true">#</a> 手写 bind, call, aplly</h3>
<ul>
<li>手写 bind</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>手写 call</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this表示f.myCall的f函数</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 删除 fn</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>手写 apply</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this表示f.myCall的f函数</span>
  obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 删除 fn</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn6ew<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型对象" tabindex="-1"><a class="header-anchor" href="#原型对象" aria-hidden="true">#</a> 原型对象</h2>
<h3 id="原型和原型对象" tabindex="-1"><a class="header-anchor" href="#原型和原型对象" aria-hidden="true">#</a> 原型和原型对象</h3>
<p>每个函数都是对象，有一个 prototype 属性，所以函数.prototype 就是原型，又因为函数.prototype 本身也是一个对象（有一些属性），所以也叫原型对象。下图是 console.log(Person.prototype)的结果。可以看到 Person.prototype 是一个对象，确切地说是原型对象，里面有一个 constructor 属性，它指向了 Person 构造函数。</p>
<h3 id="prototype-和ptoto" tabindex="-1"><a class="header-anchor" href="#prototype-和ptoto" aria-hidden="true">#</a> <strong>prototype 和</strong>ptoto****</h3>
<p>prototype 是每个函数都有的属性，<strong>proto</strong>是每个对象都有的属性<strong>注意：函数本身也是一个对象，所以也有</strong>proto<strong>属性，所以函数同时有</strong>proto<strong>和 prototype 属性</strong>下图展示了 console.log(obj.<strong>proto</strong>)的结果。可以看到 obj.<strong>proto</strong>里面也有个 constructor 属性，指向了构造函数 Object。</p>
<h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> <strong>原型链</strong></h3>
<p>为了理解原型链，我们先看一段代码。<strong>代码 1</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 在函数的原型上添加变量和方法</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello John"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Johnobj.say(); // hello John</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码里，obj 并没有 name 属性，但是 obj 的构造函数函数的 prototype 对象里有该属性，所以就打印出了 John 的结果。同样 say 也是如此。<strong>注意：我们发现 obj.<strong>proto</strong> === Person.prototye，可见这里面有一个链接的关系</strong>
<strong>代码 2</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"喵喵"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"吃鱼"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 吃鱼</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码里，cat 并没有 eat 属性，但是 cat 的<strong>proto</strong>里有该属性，所以就打印出了吃鱼的结果。<strong>注意：我们发现 cat.<strong>proto</strong> === Obejct.prototye，可见这里面有一个链接的关系**<strong>所以，上面的查找的过程形成的一条线索就叫做原型链**。通俗的讲，一个对象有</strong>proto</strong>原型，这个原型是一个对象，该对象的 constructor 属性指向了构造函数。每个函数有 prototype 属性，该属性也可以称为原型，这个原型是一个对象，该对象的 constructor 属性指向了自己本身这个构造函数。如果要找一个对象的某个属性，先会在对象本身找，接着去对象的原型对象去找（对象.<strong>proto</strong> === 构造函数.prototype，所以二者都出现时，后面的结果会覆盖前面的结果），接着去上一层对象的原型对象上找，原型链的终点是 Object.prototype</p>
<p><strong>简答版</strong></p>
<ol>
<li>
<p>原型链是什么再查找一个对象的属性可以看出原型链。一个对象有<strong>proto</strong>原型，该原型指向构造函数的 prototype，其本身也是一个对象，也就是上一层的原型对象，这个对象也具有<strong>proto</strong>原型，就会指向他的上一层的原型对象。所以总的看，一直往上，存在一条原型链，原型链的最顶端是 Obejct.prototype</p>
</li>
<li>
<p>解决什么问题对象共享属性和共享方法</p>
</li>
<li>
<p>谁有原型函数：prototype 对象：<strong>proto</strong></p>
</li>
<li>
<p>对象查找属性或者方法的顺序对象本身找 =&gt; 构造函数找 =&gt; 对象原型找 <strong>proto</strong>=&gt; 构造函数原型找 prototype =&gt; 对象上一层原型查找</p>
</li>
</ol>
<h3 id="获取原型的方法" tabindex="-1"><a class="header-anchor" href="#获取原型的方法" aria-hidden="true">#</a> 获取原型的方法</h3>
<ul>
<li>通过对象的<code v-pre>__proto__</code></li>
<li>通过构造函数（或者类）的<code v-pre>prototype </code></li>
<li><code v-pre>p.constructor.prototype</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>
p<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类与继承" tabindex="-1"><a class="header-anchor" href="#类与继承" aria-hidden="true">#</a> 类与继承</h3>
<p>1 类 ES5 创建对象用构造函数，ES6 创建对象用 class</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Cat</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"吃鱼"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">"喵喵"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 吃鱼</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 继承</p>
<ul>
<li>ES6</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>password</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username
    <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password
<span class="token punctuation">}</span>
<span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"log in"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Admin</span> <span class="token keyword">extends</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的constructor()</span>
<span class="token punctuation">}</span>
<span class="token function">deletePerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"删除了一个用户"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>admin<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// log in</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ES5： prototype</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>password</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username
    <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"log in"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deletePerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"删除了一个用户"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
admin<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// log in</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-实现继承的方式" tabindex="-1"><a class="header-anchor" href="#js-实现继承的方式" aria-hidden="true">#</a> JS 实现继承的方式</h3>
<ol>
<li>ES6：<code v-pre>extends</code>, <code v-pre>super </code>相当于属性的继承</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// extends 相当于方法的继承</span>
<span class="token comment">// 替换了上面的3行代码</span>
<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// super 相当于属性的继承</span>
    <span class="token comment">// 替换了 People.call(this, name)</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">"男"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>原型链：将父类的实例作为子类的原型</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"在跑步~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">goToSchool</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"去上学~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>构造函数继承：子类型的构造函数内部调用父类型构造函数</li>
</ol>
<p>缺点：只能继承父类的实例属性和方法，不能继承原型属性/方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Yasuo"</span><span class="token punctuation">,</span> <span class="token string">"Zed"</span><span class="token punctuation">,</span> <span class="token string">"Yi"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"在跑步~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的构造函数</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Student.prototype = new Person();</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">goToSchool</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"去上学~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Cyan"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Csy"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"LeeSin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>组合式继承：原型链继承与构造函数继承组合在一起（用构造函数方式继承属性，原型链方式继承方法）</li>
</ol>
<p>调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Yasuo"</span><span class="token punctuation">,</span> <span class="token string">"Zed"</span><span class="token punctuation">,</span> <span class="token string">"Yi"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"在跑步~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span> <span class="token comment">// 组合继承需要修复构造函数指向</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">goToSchool</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"去上学~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Cyan"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Csy"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"LeeSin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有对象都有原型吗？错,。用 Object.create(null)创建的空对象没有。</p>
<h2 id="new-操作符" tabindex="-1"><a class="header-anchor" href="#new-操作符" aria-hidden="true">#</a> new 操作符</h2>
<p>1 创建了一个空对象 2 将空对象的原型，指向构造函数的原型</p>
<p><code v-pre>fn.prototype === new fn().__proto__</code></p>
<p>3 将空对象作为构造函数的上下文（改变 this 的方向）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"aa"</span><span class="token punctuation">;</span> <span class="token comment">// this指向window</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Foo {name: 'aa'} this指向new出来的对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 对构造函数有返回值的处理判断如果返回的是基本类型，则返回的是空对象；如果是对象，则就是返回值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"aa"</span><span class="token punctuation">;</span> <span class="token comment">// this指向window</span>
  <span class="token keyword">return</span> <span class="token number">11</span><span class="token punctuation">;</span>
  <span class="token comment">// return {}</span>
  <span class="token comment">// return [1,2,3]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Foo {name: 'aa'} 返回的11没有影响</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写-new" tabindex="-1"><a class="header-anchor" href="#手写-new" aria-hidden="true">#</a> 手写 new</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个空对象</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 将空对象的原型，指向构造函数的原型</span>
  Obeject<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// obj.__proto__ = fn.prototype 也行</span>
  <span class="token comment">// 将空对象作为构造函数的上下文(改变this指向)</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 对构造函数的有返回值的处理判断</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微任务和宏任务" tabindex="-1"><a class="header-anchor" href="#微任务和宏任务" aria-hidden="true">#</a> 微任务和宏任务</h2>
<h3 id="eventloop-事件循环" tabindex="-1"><a class="header-anchor" href="#eventloop-事件循环" aria-hidden="true">#</a> EventLoop 事件循环</h3>
<p>JS 是单线程，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入<strong>执行栈</strong>中，依次执行，将异步代码推入<strong>异步队列</strong>。异步队列又分为<strong>宏任务队列</strong>和<strong>微任务队列</strong>，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列主要是 Promise.then，宏任务主要是定时器，用户交互事件，ajax，读取文件</p>
<h3 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h3>
<p>微任务：Promise.then 宏任务：定时器，用户交互事件，ajax，读取文件</p>
<h3 id="浏览器中的事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器中的事件循环" aria-hidden="true">#</a> <strong>浏览器中的事件循环</strong></h3>
<p>事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。事件循环可以简单的描述为以下四个步骤:</p>
<ol>
<li>
<p>函数入栈，当 Stack 中执行到异步任务的时候，就将他丢给 WebAPIs,接着执行同步任务,直到 Stack 为空；</p>
</li>
<li>
<p>此期间 WebAPIs 完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）</p>
</li>
<li>
<p>执行栈为空时，Event Loop 把微任务队列执行清空；</p>
</li>
<li>
<p>微任务队列清空后，进入宏任务队列，取队列的第一项任务放入 Stack(栈）中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复 4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。<img src="https://camo.githubusercontent.com/b038d9c8e722c94f497227eea05da02b00a835d305b34efa5875923f6a927df6/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f33343265353831323233643234373164393438346663343862656239663865317e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=url&amp;id=axNhU&amp;margin=[object Object]&amp;originHeight=592&amp;originWidth=897&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p>
</li>
</ol>
<h3 id="node-环境中的事件环" tabindex="-1"><a class="header-anchor" href="#node-环境中的事件环" aria-hidden="true">#</a> <strong>？？？Node 环境中的事件环</strong></h3>
<p>？？？</p>
<h3 id="js-执行顺序" tabindex="-1"><a class="header-anchor" href="#js-执行顺序" aria-hidden="true">#</a> JS 执行顺序</h3>
<ol>
<li>
<p>同步</p>
</li>
<li>
<p>process.nextTick</p>
</li>
<li>
<p>异步</p>
</li>
</ol>
<p>3.1 微任务： promise.then3.2 宏任务：定时器，用户交互事件，ajax，读取文件</p>
<ol start="4">
<li>setImmediate 方法</li>
</ol>
<p>js 代码执行流程： 同步执行完后 =&gt; 事件循环（宏任务和微任务） =&gt; 微任务 =&gt; 宏任务 =&gt; 微任务 ... 注意：同步的任务都执行完后，才会执行事件循环的内容。要执行宏任务，前提是清空所有微任务。</p>
<h3 id="promise、aync-await-的执行顺序" tabindex="-1"><a class="header-anchor" href="#promise、aync-await-的执行顺序" aria-hidden="true">#</a> Promise、Aync/Await 的执行顺序</h3>
<ol>
<li>Promise 本身是<strong>同步的立即执行函数</strong>， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"promise1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"promise1 end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"promise2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"settimeout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>async/await 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async1 start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async1 end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"script end"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出顺序：script start->async1 start->async2->script end->async1 end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-和-async-函数" tabindex="-1"><a class="header-anchor" href="#promise-和-async-函数" aria-hidden="true">#</a> promise 和 async 函数</h2>
<h3 id="_1-promise-用法" tabindex="-1"><a class="header-anchor" href="#_1-promise-用法" aria-hidden="true">#</a> 1 promise 用法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// .then的data是resolve里的，只有调用resolve才会执行.then</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-async-函数" tabindex="-1"><a class="header-anchor" href="#_2-async-函数" aria-hidden="true">#</a> 2 async 函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> functin <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 返回一个promiss</span>

<span class="token comment">// ------------- 上面这代码和下面的代码等效 ----------------</span>

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promiss</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-async-await" tabindex="-1"><a class="header-anchor" href="#_3-async-await" aria-hidden="true">#</a> 3 async await</h3>
<p>await 后面是一个 promiss 对象，可以拿到 resolve 的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promiss</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promiss</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">await</span> p1<span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">await</span> p2<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-手写-promise" tabindex="-1"><a class="header-anchor" href="#_4-手写-promise" aria-hidden="true">#</a> 4 手写 promise</h3>
<p>一个简单的 <code v-pre>Promise </code>的粗糙实现，关键点在于</p>
<ol>
<li>
<p>有三种状态：<code v-pre>pending</code>（进行中）、<code v-pre>fulfilled(resolved)</code>（已成功）和<code v-pre>rejected</code>（已失败）</p>
</li>
<li>
<p>Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。</p>
</li>
<li>
<p>设置两个队列，<code v-pre>onResolvedCallbacks</code>，<code v-pre>onRejectedCallbacks</code>，用于存放成功和失败的回调函数，当状态发生改变时依次从数组中取出执行。</p>
</li>
<li>
<p>利用<code v-pre>setTimeout</code>实现<code v-pre>resolve</code>和<code v-pre>rejected</code>异步</p>
</li>
<li>
<p><code v-pre>then</code>返回<code v-pre>promise</code></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Prom</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">"PENDING"</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token comment">// 保存尚未 fulfilled 的 then 中的回调函数(异步)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 保存尚未 rejected 的 then 中的回调函数(异步)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">"RESOLVED"</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token comment">// 判断成功回调是否存在，如果存在就调用</span>
        <span class="token comment">// 循环回调数组. 把数组前面的方法弹出来并且直接调用</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">"REJECTED"</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onFulfilled</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当传入的 then 回调函数为空的时候。。创建对应的空函数</span>
    onFulfilled <span class="token operator">=</span> <span class="token keyword">typeof</span> onFulfilled <span class="token operator">===</span> <span class="token string">"function"</span> <span class="token operator">?</span> <span class="token function-variable function">onFulfilled</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"RESOLVED"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 需要返回一个 Promise</span>
      <span class="token comment">// 如果状态为 resolved，直接执行</span>
      <span class="token keyword">return</span> Prom<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// then 方法执行时如果状态是等待态，就将其回调函数存入对应数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"PENDING"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Prom</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 新增等待态判断，此时异步代码还未走完，回调入数组队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>onRejcted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    onRejcted <span class="token operator">=</span> <span class="token keyword">typeof</span> onRejcted <span class="token operator">===</span> <span class="token string">"function"</span> <span class="token operator">?</span> <span class="token function-variable function">onRejcted</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">"REJECTED"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> reason <span class="token operator">=</span> <span class="token function">onRejcted</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Prom<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">"PENDING"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Prom</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 新增等待态判断，此时异步代码还未走完，回调入数组队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onRejcted<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-四个静态方法" tabindex="-1"><a class="header-anchor" href="#_5-四个静态方法" aria-hidden="true">#</a> 5. 四个静态方法</h3>
<p>resolve()、reject()、all()和 race()</p>
<h2 id="可枚举、不可枚举" tabindex="-1"><a class="header-anchor" href="#可枚举、不可枚举" aria-hidden="true">#</a> 可枚举、不可枚举</h2>
<p>对象的属性所有的特性有以下几种：value: 属性的值 writable: 如果为 false，属性的值就不能被重写。get: 一旦目标属性被访问就会调回此方法，并将此方法的运算结果返回用户。set: 一旦目标属性被赋值，就会调回此方法。configurable: 如果为 false，则任何尝试删除目标属性或修改属性性以下特性（writable, configurable, enumerable）的行为将被无效化。enumerable: 是否能在 for...in 循环中遍历出来或在 Object.keys 中列举出来。其中 enumerable 表示可枚举特性(true 为可，false 为不可)。</p>
<h2 id="对象拷贝" tabindex="-1"><a class="header-anchor" href="#对象拷贝" aria-hidden="true">#</a> 对象拷贝</h2>
<p>对象属于引用类型，其值存储在堆内存，但是指针存储在栈内存中。
<strong>浅拷贝</strong>：拷贝对象停留在第一层，拷贝了第一层的基本类型值，以及了第一层的引用类型地址例如：对于对象<code v-pre> [1, 2, {name:'John', age:12}, 5]</code>，浅拷贝只是拷贝了 1,2,5 数据的基本类性质，以及对象{name:'John', age:12} 的引用值。如果改变 1,2,5 数据，不会影响原对象，但是改变对象{name:'John', age:12} 会影响。</p>
<p><strong>深拷贝</strong>：拷贝对象的所有的属性，创建出和原对象完全相同的对象，但是新对象和原对象不共享内存空间</p>
<h3 id="浅拷贝方法" tabindex="-1"><a class="header-anchor" href="#浅拷贝方法" aria-hidden="true">#</a> 浅拷贝方法</h3>
<ol>
<li>通用循环</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 简单赋值</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// const obj = { // a: "hello", // b:{ a: "world", b: 21 }, // c:["Bob", "Tom", "Jenny"], // d:function() { // alert("hello world"); // } // }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>object.assign()</code></li>
</ol>
<p>把原对象的所有可枚举属性浅拷贝给新对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"ming"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">play</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"backetball"</span><span class="token punctuation">,</span> <span class="token string">"game"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rend</span><span class="token operator">:</span> <span class="token string">"book"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">girlfriend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"xiaomi"</span><span class="token punctuation">,</span> <span class="token string">"xiaohong"</span><span class="token punctuation">,</span> <span class="token string">"xiaolan"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj2<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">"memg"</span><span class="token punctuation">;</span> <span class="token comment">//修改基本类型</span>
obj2<span class="token punctuation">.</span>skill<span class="token punctuation">.</span>read <span class="token operator">=</span> <span class="token string">"e-mail"</span><span class="token punctuation">;</span> <span class="token comment">//修改二层基本类型</span>
obj2<span class="token punctuation">.</span>skill<span class="token punctuation">.</span>play <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"footbool"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//修改二层引用类型</span>
obj2<span class="token punctuation">.</span>girlfriend <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xiaoming"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// obj1:{username:'ming',     skill:{play:['backetball','game'],rend: 'book',read:'email'},girlfriends:['xiaoming']};</span>
<span class="token comment">// obj2:{username:'meng',     skill:{play:['backetball','game'],rend: 'book',read:'email'},girlfriends:['xiaoming']};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>Array.prototype.concat()</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"ming"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">"meng"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0,{username: 'meng',}]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,{username: 'meng',}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>Array.prototype.slice()</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"ming"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">"meng"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,{username: 'meng',}]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2,{username: 'meng',}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>扩展运算符</li>
</ol>
<p>扩展运算符和 Object.assign 的浅拷贝不一样，扩展运算符对数属性值是数组拷贝是深拷贝，和基本类型很像，不是拷贝的引用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//拷贝对象</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"ming"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">play</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"backetball"</span><span class="token punctuation">,</span> <span class="token string">"game"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rend</span><span class="token operator">:</span> <span class="token string">"book"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">girlfriends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"xiaomi"</span><span class="token punctuation">,</span> <span class="token string">"xiaohong"</span><span class="token punctuation">,</span> <span class="token string">"xiaolan"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1 <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// like arr.slice()</span>
obj2<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">"memg"</span><span class="token punctuation">;</span> <span class="token comment">//修改基本类型</span>
obj2<span class="token punctuation">.</span>skill<span class="token punctuation">.</span>read <span class="token operator">=</span> <span class="token string">"e-mail"</span><span class="token punctuation">;</span> <span class="token comment">//修改二层基本类型</span>
obj2<span class="token punctuation">.</span>skill<span class="token punctuation">.</span>play <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"footbool"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//修改二层引用类型</span>
obj2<span class="token punctuation">.</span>girlfriend <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xiaoming"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {girlfriend:['xiaomi', 'xiaohong', 'xiaolan'],skill: {play: Array(1), rend: 'book', read: 'e-mail'},username: "ming"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {girlfriend:['xiaoming'],skill: {play: Array(1), rend: 'book', read: 'e-mail'},username: "meng"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深拷贝方法" tabindex="-1"><a class="header-anchor" href="#深拷贝方法" aria-hidden="true">#</a> 深拷贝方法</h3>
<ol>
<li>递归</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">copy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      newObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>JSON.parse(JSON.stringify())</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token keyword">const</span> wes <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Wes'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
   <span class="token literal-property property">social</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token string">'@wesbos'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">facebook</span><span class="token operator">:</span> <span class="token string">'wesbos.developer'</span>
   <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> dev2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>wes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dev2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment">// Undefinedconst num = 123const res = JSON.stringify(num) // '123'const res = JSON.stringify(NaN) // 'null'const b = trueconst res = JSON.stringify(b) // 'true'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Lodash 的 deepclone</li>
</ol>
<h2 id="防抖节流" tabindex="-1"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h2>
<h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h3>
<p>防止触发事件过于频繁，当一个事件被触发准备执行函数前，会等待一定的时间，如果没有再次被触发，那么就执行，如果被触发了，那就本次作废，重新从新触发的时间开始计算，并再次等待 1 秒，直到能最终执行</p>
<h4 id="_1-手写防抖" tabindex="-1"><a class="header-anchor" href="#_1-手写防抖" aria-hidden="true">#</a> 1 手写防抖</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> inp <span class="token operator">=</span> ducoment<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>
inp<span class="token punctuation">.</span>onchange <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>t <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            t <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-防抖应用场景" tabindex="-1"><a class="header-anchor" href="#_2-防抖应用场景" aria-hidden="true">#</a> 2 防抖应用场景</h4>
<ol>
<li>登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖</li>
<li>调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖</li>
<li>文本编辑器实时保存，当无任何更改操作一秒后进行保存</li>
<li>搜索框的输入，完成后自动搜索；手机号，邮箱验证输入检测</li>
</ol>
<h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h3>
<p>在规定的时间内，函数只能被调用一次，且是最先被触发调用的那次。控制执行次数</p>
<h4 id="_1-手写节流" tabindex="-1"><a class="header-anchor" href="#_1-手写节流" aria-hidden="true">#</a> 1 手写节流</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> inp <span class="token operator">=</span> ducoment<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"滚动"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
                    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
                    flag <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span><span class="token punctuation">}</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-节流应用场景" tabindex="-1"><a class="header-anchor" href="#_2-节流应用场景" aria-hidden="true">#</a> 2 节流应用场景</h4>
<ol>
<li>scroll 事件，滚动加载更多，每隔一秒计算一次位置信息等</li>
<li>浏览器播放事件，每个一秒计算一次进度信息等</li>
<li>input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)</li>
</ol>
<h3 id="总结-简要答案" tabindex="-1"><a class="header-anchor" href="#总结-简要答案" aria-hidden="true">#</a> 总结 (简要答案)</h3>
<ul>
<li>防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。<strong>代码实现重在清零 clearTimeout</strong>。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。</li>
<li>节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流 (Rate Limit) 类似。<strong>代码实现重在开锁关锁 timer=timeout; timer=null</strong>。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。</li>
<li><strong>debounce:</strong> Grouping a sudden burst of events (like keystrokes) into a single one.</li>
<li><strong>throttle:</strong> Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.</li>
<li></li>
</ul>
<h2 id="es6-filter-函数" tabindex="-1"><a class="header-anchor" href="#es6-filter-函数" aria-hidden="true">#</a> ES6 filter 函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// cur 当前值； idx 当前值的下标； arr 数组对象</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> cur <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//12345</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach-和-map-区别" tabindex="-1"><a class="header-anchor" href="#foreach-和-map-区别" aria-hidden="true">#</a> forEach 和 map 区别</h2>
<ol>
<li>forEach</li>
</ol>
<ul>
<li>没有返回值</li>
<li>不会被 break 打断</li>
<li>遍历的是 value</li>
</ul>
<ol start="2">
<li>map</li>
</ol>
<ul>
<li>有返回值，返回是数组，默认返回值是 undefined</li>
<li>不会被 break 打断</li>
<li>遍历的是 value 和 key</li>
</ul>
<h2 id="for-循环开启多个定时器输出" tabindex="-1"><a class="header-anchor" href="#for-循环开启多个定时器输出" aria-hidden="true">#</a> for 循环开启多个定时器输出</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果输入 3,3,3</p>
<h3 id="如何让其输入-1-2-3" tabindex="-1"><a class="header-anchor" href="#如何让其输入-1-2-3" aria-hidden="true">#</a> 如何让其输入 1,2,3</h3>
<ol>
<li>立即执行函数形成一个闭包</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>定时器第三个参数</li>
</ol>
<p>第三个参数就是给第一个函数传参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">0</span><span class="token punctuation">,</span>
    i
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>let 代替 var</li>
</ol>
<p>var 可以重复声明，用 var 声明迭代变量时，循环结束后，迭代变量保存的是退出循环的值，所以 i 是 3。let 不能重复声明，迭代变量时，都是开辟一个新的内存空间存储新的迭代变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-解构" tabindex="-1"><a class="header-anchor" href="#es6-解构" aria-hidden="true">#</a> ES6 解构</h2>
<h3 id="数组结构" tabindex="-1"><a class="header-anchor" href="#数组结构" aria-hidden="true">#</a> 数组结构</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> first <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> second <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">;</span>

<span class="token comment">// 解构中交换数据</span>
<span class="token keyword">let</span> car1 <span class="token operator">=</span> <span class="token string">"bmw"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> car2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"audi"</span><span class="token punctuation">[</span><span class="token punctuation">(</span>car2<span class="token punctuation">,</span> car1<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>car1<span class="token punctuation">,</span> car2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> family <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token literal-property property">mother</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> father<span class="token punctuation">,</span> mother <span class="token punctuation">}</span> <span class="token operator">=</span> family<span class="token punctuation">;</span>

<span class="token comment">// 解构对象并重命名变量</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">father</span><span class="token operator">:</span> f<span class="token punctuation">,</span> <span class="token literal-property property">mother</span><span class="token operator">:</span>m <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token punctuation">{</span><span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span><span class="token literal-property property">mother</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '1'</span>

<span class="token comment">// 函数解构</span>
<span class="token keyword">const</span> family <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token string">'baba'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mother</span><span class="token operator">:</span> <span class="token string">'mama'</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> father <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">log</span><span class="token punctuation">(</span>family<span class="token punctuation">)</span> <span class="token comment">// baba</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2>
<h3 id="创建方式" tabindex="-1"><a class="header-anchor" href="#创建方式" aria-hidden="true">#</a> 创建方式</h3>
<ol>
<li>字面量 <code v-pre>/ab+c/</code></li>
</ol>
<p>具有的方法：<code v-pre>match, replace, search, split</code></p>
<ol start="2">
<li>构造函数 <code v-pre>new RegExp(&quot;ab+c&quot;)</code></li>
</ol>
<p>具有的方法：<code v-pre>exet, test</code></p>
<table>
<thead>
<tr>
<th><code v-pre>exec</code></th>
<th>一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>test</code></td>
<td>一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。</td>
</tr>
<tr>
<td><code v-pre>match</code></td>
<td>一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。</td>
</tr>
<tr>
<td><code v-pre>search</code></td>
<td>一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1。</td>
</tr>
<tr>
<td><code v-pre>replace</code></td>
<td>一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。</td>
</tr>
<tr>
<td><code v-pre>split</code></td>
<td>一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。</td>
</tr>
</tbody>
</table>
<h3 id="常用的正则表达式有哪些" tabindex="-1"><a class="header-anchor" href="#常用的正则表达式有哪些" aria-hidden="true">#</a> 常用的正则表达式有哪些？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// （1）匹配 16 进制颜色值</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （2）匹配日期，如 yyyy-mm-dd 格式</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token comment">// （3）匹配 qq 号</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9][0-9]{4,10}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （4）手机号码正则</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[34578]\d{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （5）用户名正则</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用匹配符号" tabindex="-1"><a class="header-anchor" href="#常用匹配符号" aria-hidden="true">#</a> 常用匹配符号</h3>
<table>
<thead>
<tr>
<th>字符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td>^</td>
<td>匹配输入字符串的开始位置。</td>
<td>^abc 表示匹配有 abc 开头的字符串</td>
</tr>
<tr>
<td>[xyz]</td>
<td>字符集合。匹配所包含的任意一个字符。</td>
<td>[abc] 可以匹配 plain 中的 a。</td>
</tr>
<tr>
<td>\d</td>
<td>匹配一个数字字符。等价于[0-9]。</td>
<td>4 = IV 中的 4</td>
</tr>
<tr>
<td>$</td>
<td>匹配输入字符串的结束位置。</td>
<td>^\d$ 表示匹配一个 [0-9] 的数字</td>
</tr>
<tr>
<td>{n}</td>
<td>n 是一个非负整数。匹配确定的 n 次。</td>
<td>o{2} 不能匹配 Bob 中的 o，但是能匹配 food 中的两个 o。</td>
</tr>
<tr>
<td>x|y</td>
<td>匹配 x 或者 y。</td>
<td>z|food 能匹配 z 或者 food。(z|f)ood 则匹配 zood 或 food。</td>
</tr>
<tr>
<td>(子表达式)</td>
<td>标记一个子表达式的开始和结束位置。</td>
<td>(\w)\1 能匹配 deep 中的 ee</td>
</tr>
<tr>
<td>?</td>
<td>可有可无匹配前一个字符</td>
<td></td>
</tr>
<tr>
<td>+</td>
<td>匹配前面的子表达式一次或多次。</td>
<td>zo+ 能匹配 zo 或者 zoo，但不能匹配 z。+ 等价于 {1,}</td>
</tr>
<tr>
<td>*</td>
<td>匹配前面的子表达式零次或多次。</td>
<td>zo* 能匹配 z 或者 zoo。* 等价于 {0,}。</td>
</tr>
<tr>
<td>\w</td>
<td>匹配包括下划线的任何单词字符。等价于 [A-Za-z0-9_]。</td>
<td>ID A1.3 中的 I、D、A、1 和 3</td>
</tr>
<tr>
<td>[^a-z]</td>
<td>求反。匹配任何不在指定范围内的任意字符。</td>
<td></td>
</tr>
<tr>
<td>.</td>
<td>匹配除 \n 之外的任何单个字符。. 是一个很强大的 <strong>元符号</strong>，请慎用。</td>
<td>要匹配包括 \n 在内的任何字符，请使用 (.|\n) 的模式。</td>
</tr>
<tr>
<td>\s</td>
<td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。</td>
<td>\w\s 能匹配 ID A1.3 中的 D</td>
</tr>
</tbody>
</table>
<h2 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h2>
<h3 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h3>
<p>事件由具体的元素接收，逐级往下传播，到不具体的元素。</p>
<p><strong>不支持事件冒泡的事件：</strong>
焦点（blur, focus）
鼠标（mouseenter, mouseleave）
UI 事件（load, unload, scroll, resize）</p>
<h3 id="事件捕捉" tabindex="-1"><a class="header-anchor" href="#事件捕捉" aria-hidden="true">#</a> 事件捕捉</h3>
<p>事件由不具体的元素接收，逐级往上传播，到具体的元素</p>
<h3 id="三种事件模型" tabindex="-1"><a class="header-anchor" href="#三种事件模型" aria-hidden="true">#</a> 三种事件模型</h3>
<ol>
<li>DOM0 级</li>
</ol>
<p>这种模型不会传播，所以没有事件流的概念。可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。</p>
<ol start="2">
<li>DOM2 级</li>
</ol>
<p>在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素。后面两个阶段和 IE 事件模型的两个阶段相同。事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行。</p>
<ol start="3">
<li>IE 事件模型</li>
</ol>
<p>在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行</p>
<h3 id="事件处理程序" tabindex="-1"><a class="header-anchor" href="#事件处理程序" aria-hidden="true">#</a> 事件处理程序</h3>
<p>响应事件的函数，即为事件处理程序</p>
<ol>
<li>HTML 事件处理程序</li>
</ol>
<p>在 html 中绑定事件处理程序，缺点：</p>
<ul>
<li>HTML 和 JS 代码耦合，修改代码的时候需要修改两个地方，不易维护</li>
<li>JS 和 HTML 代码加载顺序不确定，可能 JS 代码未加载完，相应的事件就被处罚，造成错误</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>DOM 0 级事件处理程序</li>
</ol>
<p>将函数直接赋值给一个事件处理属性。事件处理函数 this 指向元素节点，因为可访问该节点的任何属性和方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"btn"</span> type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span>

<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span>
<span class="token comment">// 添加事件，多次定义后，最后一个将覆盖之前的定义</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 删除事件</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>DOM 2 级事件处理程序</li>
</ol>
<p>两个方法 addEventListener()、removeEventListener()分别用来指定和删除事件处理程序，所以的节点都具有该两个方法。接收三个参数：事件名，方法，布尔值（true：在捕获阶段调用事件处理程序，false：在冒泡阶段调用）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"btn"</span> type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"Button"</span><span class="token operator">></span>

<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'This is a function'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加事件，可以定义多个，按照顺序执行</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'click1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 删除事件</span>
btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-事件委托" tabindex="-1"><a class="header-anchor" href="#应用场景-事件委托" aria-hidden="true">#</a> 应用场景：事件委托</h3>
<p>大量子节点绑定事件处理函数时，可交给父元素进行统一管理。本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。优点：可以方便地动态添加管理子元素，不需要重新修改绑定事件。不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。</p>
<h3 id="防止冒泡事件" tabindex="-1"><a class="header-anchor" href="#防止冒泡事件" aria-hidden="true">#</a> 防止冒泡事件</h3>
<ol>
<li>event.stopPropagation(); // 阻止了事件冒泡，但不会阻击默认行为</li>
<li>event.preventDefault(); // 阻止默认事件,比如 a 的跳转事件</li>
</ol>
<h3 id="不能冒泡的-9-个事件" tabindex="-1"><a class="header-anchor" href="#不能冒泡的-9-个事件" aria-hidden="true">#</a> 不能冒泡的 9 个事件</h3>
<p>mouseenter, mouseleave,blur,resize,load,unload,focus,abort,error
妈(m)妈(m)不(b)让(l,u)我浪(f,a,e)费</p>
<h2 id="虚拟列表" tabindex="-1"><a class="header-anchor" href="#虚拟列表" aria-hidden="true">#</a> 虚拟列表</h2>
<h2 id="类数组转化为数组的方法" tabindex="-1"><a class="header-anchor" href="#类数组转化为数组的方法" aria-hidden="true">#</a> 类数组转化为数组的方法</h2>
<p>类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?（1）通过 call 调用数组的 slice 方法来实现转换<code v-pre>Array.prototype.slice.call(arrayLike);</code>（2）通过 call 调用数组的 splice 方法来实现转换<code v-pre>Array.prototype.splice.call(arrayLike, 0);</code>（3）通过 apply 调用数组的 concat 方法来实现转换 <code v-pre>Array.prototype.concat.apply([], arrayLike);</code>（4）通过 Array.from 方法来实现转换 <code v-pre>Array.from(arrayLike);</code>（5）扩展运算符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arrayLike<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>

<span class="token comment">// 1.扩展运算符</span>
<span class="token punctuation">[</span><span class="token operator">...</span>arrayLike<span class="token punctuation">]</span>

<span class="token comment">// 2.Array.from</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span>

<span class="token comment">// 3.Array.prototype.slice</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span>

<span class="token comment">// 4.Array.apply</span>
<span class="token function">Array</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arrayLike<span class="token punctuation">)</span>

<span class="token comment">// 5.Array.prototype.concat</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arrayLike<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时" tabindex="-1"><a class="header-anchor" href="#移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时" aria-hidden="true">#</a> 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？</h2>
<p>移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。有三种办法来解决这个问题：1.通过 meta 标签禁用网页的缩放。2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。3.调用一些 js 库，比如 FastClick</p>
<h2 id="什么是-前端路由" tabindex="-1"><a class="header-anchor" href="#什么是-前端路由" aria-hidden="true">#</a> 什么是“前端路由”？</h2>
<ol>
<li>什么是前端路由？</li>
</ol>
<p>不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。</p>
<ol start="2">
<li>什么时候使用前端路由？</li>
</ol>
<p>在单页面应用，大部分页面结构不变，只改变部分内容的使用</p>
<ol start="3">
<li>前端路由有什么优点和缺点？</li>
</ol>
<p>优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置 4. 实现方式前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。</p>
<h2 id="为什么-0-1-0-2-0-3-如何让其相等" tabindex="-1"><a class="header-anchor" href="#为什么-0-1-0-2-0-3-如何让其相等" aria-hidden="true">#</a> 为什么 0.1+0.2 ! == 0.3，如何让其相等</h2>
<p>在开发过程中遇到类似这样的问题：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
  n2 <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1 <span class="token operator">+</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.30000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里得到的不是想要的结果，要想等于 0.3，就要把它进行转化：:::info(n1 + n2).toFixed(2) // 注意，toFixed 为四舍五入:::</p>
<p>复制代码 toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字。那为什么会出现这样的结果呢？计算机是通过二进制的方式存储数据的，所以计算机计算 0.1+0.2 的时候，实际上是计算的两个数的二进制的和。0.1 的二进制是 0.0001100110011001100...（1100 循环），0.2 的二进制是：0.00110011001100...（1100 循环），这两个数的二进制都是无限循环的数。那 JavaScript 是如何处理无限循环的二进制小数呢？一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循 IEEE 754 标准，使用 64 位固定长度来表示，也就是标准的 double 双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留 52 位，再加上前面的 1，其实就是保留 53 位有效数字，剩余的需要舍去，遵从“0 舍 1 入”的原则。根据这个原则，0.1 和 0.2 的二进制数相加，再转化为十进制数就是：0.30000000000000004。</p>
<h2 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h2>
<p>一个函数作为另一个函数的参数，前一个函数就是回调函数。<a href="https://segmentfault.com/a/1190000007227305" target="_blank" rel="noopener noreferrer">参考博客<ExternalLinkIcon/></a></p>
<h2 id="异步编程的实现方式" tabindex="-1"><a class="header-anchor" href="#异步编程的实现方式" aria-hidden="true">#</a> 异步编程的实现方式</h2>
<ol>
<li>回调函数</li>
</ol>
<p>优点：简单、容易理解缺点：不利于维护，代码耦合高</p>
<ol start="2">
<li>事件监听（采用时间驱动模式，取决于某个事件是否发生）：</li>
</ol>
<p>优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数缺点：事件驱动型，流程不够清晰</p>
<ol start="3">
<li>Promise 对象</li>
</ol>
<p>优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数；缺点：编写和理解，相对比较难</p>
<ol start="4">
<li>async 函数</li>
</ol>
<p>优点：内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰。缺点：错误处理机制</p>
<ol start="5">
<li>发布/订阅（观察者模式）</li>
</ol>
<p>类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者</p>
<ol start="6">
<li>Generator 函数</li>
</ol>
<p>优点：函数体内外的数据交换、错误处理机制缺点：流程管理不方便</p>
<h2 id="延迟加载-js-方式" tabindex="-1"><a class="header-anchor" href="#延迟加载-js-方式" aria-hidden="true">#</a> 延迟加载 js 方式</h2>
<ul>
<li>async
<ul>
<li>后台下载</li>
<li>执行会中断页面渲染</li>
<li>下载好后立刻执行，没有顺序（谁先下载完谁先执行）</li>
</ul>
</li>
<li>defer
<ul>
<li>后台下载</li>
<li>不会中断页面渲染（等页面渲染完后执行）</li>
<li>顺次执行（多个 js 文件会按先后顺序执行）</li>
</ul>
</li>
</ul>
<h2 id="笔试题知识" tabindex="-1"><a class="header-anchor" href="#笔试题知识" aria-hidden="true">#</a> 笔试题知识</h2>
<p><code v-pre>.</code> 操作符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是【empty ，empty ，empty  】</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//结果是【1，empty ，empty 】</span>
arr<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//结果是【1，empty ，empty ，b:0】</span>
<span class="token comment">// 通过点操作符（.）添加的属性和length属性处于同一层级，不会影响length的值。</span>
<span class="token comment">// 所以arr长度为3，点操作符（.）添加的属性可以用for...in...循环遍历，但不能用foreach循环遍历</span>
<span class="token comment">// 但是forEach遍历结果是1，for in 的遍历结果是1,0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>Array 的一些方法 filter：过滤出符合条件的元素，返回符合的数组 some：检测数组是否有元素满足条件，返回 true 或 falseevery：检测数组是否全部元素满足条件，返回 true 或 falsemap：遍历数组，且对每个元素进行操作，返回数组</p>
<h3 id="二进制操作和逻辑符" tabindex="-1"><a class="header-anchor" href="#二进制操作和逻辑符" aria-hidden="true">#</a> 二进制操作和逻辑符</h3>
<p>&lt;&lt; 左移：二进制左移。A &lt;&lt; B，相当于 A*pow(2, B)^ 异或：二进制是否相同，相同为 0，不同为 1</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
a<span class="token operator">^=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
先看<span class="token operator">&lt;&lt;</span>：<span class="token number">1</span>对应的二进制为<span class="token number">1</span>，左移四位，变成<span class="token number">10000</span>（二进制），对应十进制为<span class="token number">16</span>，所以表达式变为
a <span class="token operator">=</span> a<span class="token operator">^</span><span class="token number">15</span>
<span class="token number">10</span>对应二进制为<span class="token number">1010</span><span class="token punctuation">,</span><span class="token number">15</span>对应二进制为<span class="token number">1111</span>，所以异或结果为<span class="token number">0101</span>，对应十进制为<span class="token number">5</span>

速记知识：<span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">4</span>   左移相当于<span class="token number">1</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">4</span><span class="token operator">=</span><span class="token number">16</span>（因为就是往后边加四个零）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3>
<ol>
<li>函数实参和形参</li>
</ol>
<p>函数执行后没有返回值，默认输出<code v-pre>undefined</code>函数有实参和形参，函数内部的形参相当于在函数作用域内声明了该变量，只是没有显示地写出来。如果函数内部对形参再次赋值，那么就会打印出赋值后的结果；如果没有，那么就用形参的值。函数内部</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  foo<span class="token punctuation">.</span>n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 改变了全局对象foo</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 声明了一个局部变量foo，和全局变量指向不同</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>函数参数</li>
</ol>
<p>当实参比形参数量少时，剩下的形参都是 undefined 当实参比形参数量多时，剩下的实参可以通过 auguments 对象获取到。<code v-pre>auguments</code>对象的特点：</p>
<ul>
<li>是类数组对象，augument instance of Obeject // true</li>
<li>有 length 属性，获取实参长度，可以通过下标访问元素（形参长度用 fn.length 获取）</li>
</ul>
<p><code v-pre>rest</code>剩余参数，用于获取函数多余的参数，是一个数组。特点：</p>
<ul>
<li>是数组，获取多余的实参</li>
<li>剩余参数后不能有其他参数，否则报错</li>
<li>函数的 length 属性值不包含剩余参数</li>
</ul>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<ul>
<li>鼠标事件</li>
</ul>
<p>mousemove: <em>e</em>.offsetX, <em>e</em>.offsetY
mouseup
mouseout
mousedown</p>
<ul>
<li>触摸事件</li>
</ul>
<p>touchstart: //手指放到屏幕上时触发 touchmove: //手指在屏幕上滑动式触发 touchend: //手指离开屏幕时触发 touchcancel: //系统取消 touch 事件的时候触发，这个好像比较少用</p>
<h3 id="基本知识" tabindex="-1"><a class="header-anchor" href="#基本知识" aria-hidden="true">#</a> 基本知识</h3>
<ul>
<li><code v-pre>var a = b = 1; </code>的执行结果等效于<code v-pre> b = 1; var a = b</code>。</li>
<li><code v-pre>Date.now()</code> 方法返回自 1970 年 1 月 1 日 00:00:00 UTC 到当前时间的毫秒数，返回类型为<code v-pre>number</code></li>
<li>document.getElementById();</li>
</ul>
<p>document.getElementsByTagName();document.getElementsByName();document.getElementsByClassName();除了 ById 是 Element，其余都是 Elements</p>
<ul>
<li>如果构造函数有返回值且返回值为一个对象，则由构造函数创建的实例对象即为返回的对象；如果返回的是一个基本数据类型或者返回 this，或者没有返回值，则默认返回由该构造函数创建的实例对象。</li>
<li>函数提升会在变量提升之前</li>
<li><code v-pre>[]==false; // true {}==false; // false</code></li>
<li>立即执行函数如果有函数名，那么函数体内不可以修改函数名！也不会报错，就是无效！</li>
<li>函数内部可以访问到自身函数</li>
<li></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印函数，而不是undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort-的原理" tabindex="-1"><a class="header-anchor" href="#sort-的原理" aria-hidden="true">#</a> sort 的原理</h3>
<ol>
<li>不传参数，会先把元素转换成字符串，然后根据字符串的 unicode 编码顺序排序</li>
<li>参数是函数，若函数返回值大于 1，交换；否则不交换。</li>
<li>sort 内部的排序算法</li>
</ol>
<p>看源码可知，sort 内部是快排的实现，但是在数据长度较小时会使用插入排序，即如果数组长度小于等于 10（v8 源码）的时候使用插入排序，大于这个值使用快速排序。</p>
<h4 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h4>
<p>从第二个数开始，每个数往前比较，如果大，往后排时间复杂度为 O(n^2)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 比temp大的数往后移</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 前一个数赋值为当前的数</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h4>
<p>先找一个基准，一般为第一个元素，然后分区排列，最后的结果是比基准小的数排在基准左侧，比基准大的数排在基准右侧。这样就确定了基准的位置。接下来递归处理，分区左右两侧采用相同的步骤分布。</p>
<p>时间复杂度为 O(nlogn)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">></span> left <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">></span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">;</span>
  <span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">quikSort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pivotIndex <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">quikSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> pivotIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">quikSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> pivotIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


