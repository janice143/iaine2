<template><div><h3 id="css3-新特性" tabindex="-1"><a class="header-anchor" href="#css3-新特性" aria-hidden="true">#</a> CSS3 新特性</h3>
<p><em>后面有更详细的介绍</em></p>
<ul>
<li>过渡 transition：all, .5s</li>
<li>动画 animation: logo2-line 2s linear;</li>
<li>形状转换 transform:translate(30px,30px);</li>
<li>伪类选择器: nth-of-type()</li>
<li>阴影 文字阴影: text-shadow: 2px 2px 2px #000; (水平阴影，垂直阴影，模糊距离，阴影颜色)</li>
</ul>
<p>盒子阴影: box-shadow: 10px 10px 5px #999</p>
<ul>
<li>边框 border-image: url(border.png);</li>
<li>背景</li>
<li>文字</li>
<li>渐变，Filter（滤镜）</li>
<li>弹性布局、栅格布局、多列布局</li>
<li>媒体查询</li>
</ul>
<h2 id="css-基础" tabindex="-1"><a class="header-anchor" href="#css-基础" aria-hidden="true">#</a> CSS 基础</h2>
<h3 id="css-盒模型" tabindex="-1"><a class="header-anchor" href="#css-盒模型" aria-hidden="true">#</a> CSS 盒模型</h3>
<ol>
<li>有两种盒子模型：IE 盒模型（border-box）、标准盒模型（content-box）</li>
<li>盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分</li>
<li>IE 盒模型和标准盒模型的区别：</li>
</ol>
<ul>
<li>W3C 标准盒模型：属性 width，height 只包含内容 content，不包含 border 和 padding</li>
<li>IE 盒模型：属性 width，height 包含 content、border 和 padding，指的是 content+padding+border。</li>
</ul>
<ol start="4">
<li>如何转换盒子模型？</li>
</ol>
<p>box-sizing:content-box /_ 标准盒子模型 <em>/box-sizing:border-box /</em> IE 盒子模型 _/</p>
<h3 id="height-和-line-hight-区别" tabindex="-1"><a class="header-anchor" href="#height-和-line-hight-区别" aria-hidden="true">#</a> height 和 line-hight 区别</h3>
<p>line-hight 是每一行文字的高度，文字环形，盒子高度会增大 height 是一个固定值，就是盒子的高度，超出盒子高度则会溢出</p>
<h4 id="line-height-的理解" tabindex="-1"><a class="header-anchor" href="#line-height-的理解" aria-hidden="true">#</a> <strong>line-height 的理解</strong></h4>
<p><strong>（1）line-height 的概念：</strong></p>
<ul>
<li>line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；</li>
<li>如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；</li>
<li>一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；</li>
<li>把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；</li>
<li>line-height 和 height 都能撑开一个高度；</li>
</ul>
<p><strong>（2）line-height 的赋值方式：</strong></p>
<ul>
<li>
<p>带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高</p>
</li>
<li>
<p>纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px</p>
</li>
<li>
<p>百分比：将计算后的值传递给后代</p>
<h3 id="css-选择器及其优先级" tabindex="-1"><a class="header-anchor" href="#css-选择器及其优先级" aria-hidden="true">#</a> CSS 选择器及其优先级</h3>
<h4 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h4>
<table>
<thead>
<tr>
<th><strong>选择器</strong></th>
<th><strong>格式</strong></th>
<th><strong>优先级权重</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id 选择器</td>
<td>#id</td>
<td>100</td>
</tr>
<tr>
<td>类选择器</td>
<td>#classname</td>
<td>10</td>
</tr>
<tr>
<td>属性选择器</td>
<td>a[ref=“eee”]</td>
<td>10</td>
</tr>
<tr>
<td>伪类选择器</td>
<td>li:last-child</td>
<td>10</td>
</tr>
<tr>
<td>标签选择器</td>
<td>div</td>
<td>1</td>
</tr>
<tr>
<td>伪元素选择器</td>
<td>li:after</td>
<td>1</td>
</tr>
<tr>
<td>相邻选择器</td>
<td>h1+p</td>
<td>0</td>
</tr>
<tr>
<td>子选择器</td>
<td>ul &gt; li</td>
<td>0</td>
</tr>
<tr>
<td>通配符选择器</td>
<td>*</td>
<td>0</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p><strong>深度选择器</strong></p>
<blockquote>
<blockquote>
<blockquote>
<pre><code>       CSS
</code></pre>
<p>/deep/ less,sass(vue2):deep() less,sass(vue23)</p>
</blockquote>
</blockquote>
</blockquote>
<p><strong>伪元素和伪类的区别和作用？</strong></p>
<ul>
<li>伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：</li>
</ul>
<p><code v-pre>p::before {content:&quot;第一章：&quot;;} p::after {content:&quot;Hot!&quot;;} p::first-line {background:red;} p::first-letter {font-size:30px;}</code></p>
<ul>
<li>伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：</li>
</ul>
<p><code v-pre>a:hover {color: #FF00FF}p:first-child {color: red}</code></p>
<p><strong>总结：</strong> 伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。<strong>::before 和 :after 的双冒号和单冒号区别</strong>（1）冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。 （2）::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。<strong>注意：</strong>:before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before、::after。</p>
<h4 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h4>
<p>对于选择器的<strong>优先级</strong>： !import &gt; 内联样式 &gt; id &gt; class &gt; 标签 &gt; 通配*</p>
<ul>
<li>内联样式 权重值：100</li>
<li>id 选择器 权重值：100</li>
<li>类、伪类、属性选择器 权重值：10</li>
<li>标签和伪元素选择器 权重值：1</li>
<li>通配, &gt;, + 权重值：0</li>
</ul>
<p><strong>注意事项：</strong></p>
<ul>
<li>
<p>!important 声明的样式的优先级最高；</p>
</li>
<li>
<p>如果优先级相同，则最后出现的样式生效；</p>
</li>
<li>
<p>继承得到的样式的优先级最低；</p>
</li>
<li>
<p>通用选择器（*）、子选择器（&gt;）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；</p>
</li>
<li>
<p>样式表的来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt; 外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式。</p>
<h3 id="css-中可继承与不可继承属性" tabindex="-1"><a class="header-anchor" href="#css-中可继承与不可继承属性" aria-hidden="true">#</a> CSS 中可继承与不可继承属性</h3>
<p>继承：设置父元素的样式，子元素也会继承该样式<strong>无继承性的属性</strong></p>
</li>
</ul>
<ol>
<li><strong>display</strong>：规定元素应该生成的框的类型</li>
<li><strong>文本属性</strong>：</li>
</ol>
<ul>
<li>vertical-align：垂直文本对齐</li>
<li>text-decoration：规定添加到文本的装饰</li>
<li>text-shadow：文本阴影效果</li>
<li>white-space：空白符的处理</li>
<li>unicode-bidi：设置文本的方向</li>
</ul>
<ol>
<li><strong>盒子模型的属性</strong>：width、height、margin、border、padding</li>
<li><strong>背景属性</strong>：background、background-color、background-image、background-repeat、background-position、background-attachment</li>
<li><strong>定位属性</strong>：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index</li>
<li><strong>生成内容属性</strong>：content、counter-reset、counter-increment</li>
<li><strong>轮廓样式属性</strong>：outline-style、outline-width、outline-color、outline</li>
<li><strong>页面样式属性</strong>：size、page-break-before、page-break-after</li>
<li><strong>声音样式属性</strong>：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during</li>
</ol>
<p><strong>有继承性的属性</strong></p>
<ol>
<li>字体系列属性</li>
</ol>
<ul>
<li>font-family：字体系列</li>
<li>font-weight：字体的粗细</li>
<li>font-size：字体的大小</li>
<li>font-style：字体的风格</li>
</ul>
<ol start="2">
<li>文本系列属性</li>
</ol>
<ul>
<li>text-indent：文本缩进</li>
<li>text-align：文本水平对齐</li>
<li>line-height：行高</li>
<li>word-spacing：单词之间的间距</li>
<li>letter-spacing：中文或者字母之间的间距</li>
<li>text-transform：控制文本大小写（就是 uppercase、lowercase、capitalize 这三个）</li>
<li>color：文本颜色</li>
</ul>
<ol start="3">
<li>元素可见性</li>
</ol>
<ul>
<li>visibility：控制元素显示隐藏</li>
</ul>
<ol start="4">
<li>列表布局属性</li>
</ol>
<ul>
<li>list-style：列表风格，包括 list-style-type、list-style-image 等</li>
</ul>
<ol start="5">
<li>光标属性</li>
</ol>
<ul>
<li>
<p>cursor：光标显示为何种形态</p>
<h3 id="display-有哪些值" tabindex="-1"><a class="header-anchor" href="#display-有哪些值" aria-hidden="true">#</a> display 有哪些值</h3>
<table>
<thead>
<tr>
<th><strong>值</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>此元素不会被显示。</td>
</tr>
<tr>
<td>block</td>
<td>此元素将显示为块级元素，此元素前后会带有换行符。</td>
</tr>
<tr>
<td>inline</td>
<td>默认。此元素会被显示为内联元素，元素前后没有换行符。</td>
</tr>
<tr>
<td>inline-block</td>
<td>行内块元素。</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>注意：以上这些是常用的<strong>display 的 block、inline 和 inline-block 的区别</strong></p>
<ol>
<li><strong>block：</strong> 会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；</li>
<li><strong>inline：</strong> 元素不会独占一行，设置 width、height 属性无效。但可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；</li>
<li><strong>inline-block：</strong> 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。</li>
</ol>
<p><strong>行内和块级元素特点</strong></p>
<ol>
<li><strong>行内元素</strong></li>
</ol>
<ul>
<li>设置宽高无效；</li>
<li>可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；</li>
<li>不会自动换行；</li>
</ul>
<ol>
<li><strong>块级元素</strong></li>
</ol>
<ul>
<li>
<p>可以设置宽高；</p>
</li>
<li>
<p>设置 margin 和 padding 都有效；</p>
</li>
<li>
<p>可以自动换行；</p>
</li>
<li>
<p>多个块状，默认排列从上到下。</p>
<h3 id="隐藏样式的区别" tabindex="-1"><a class="header-anchor" href="#隐藏样式的区别" aria-hidden="true">#</a> 隐藏样式的区别</h3>
</li>
<li>
<p>visibility:hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件。</p>
</li>
<li>
<p>display:none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。</p>
</li>
<li>
<p>opacity:0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。</p>
</li>
<li>
<p>rgba(0,0,0,0)：透明，会继续在文档流中占位，所以触发重绘。由于只作用于颜色或背景色，所以子元素不会继承，透明后可以触发点击事件</p>
</li>
<li>
<p>position: absolute：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。</p>
</li>
<li>
<p>z-index: 负值：使其他元素遮盖住该元素，以此来实现隐藏。</p>
</li>
<li>
<p>clip/clip-path：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</p>
</li>
<li>
<p>transform: scale(0,0)：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</p>
<h3 id="transition-和-animation-的区别" tabindex="-1"><a class="header-anchor" href="#transition-和-animation-的区别" aria-hidden="true">#</a> transition 和 animation 的区别</h3>
</li>
<li>
<p><strong>transition 是过度属性</strong>强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。</p>
</li>
<li>
<p><strong>animation 是动画属性</strong>它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画。</p>
<h3 id="css3-新特性-1" tabindex="-1"><a class="header-anchor" href="#css3-新特性-1" aria-hidden="true">#</a> CSS3 新特性</h3>
<p>文字</p>
</li>
<li>
<p>单词换行（word-wrap（对长的不可分割单词换行）word-wrap：break-word）</p>
</li>
<li>
<p>文字特效 （text-shadow）</p>
</li>
<li>
<p>文字渲染 （Text-decoration）</p>
</li>
<li>
<p>font-face 属性：定义自己的字体</p>
</li>
</ul>
<p>图片</p>
<ul>
<li>背景图片 background-image background-origin(content-box/padding-box/border-box) background-size background-repeat</li>
<li>边框图片（border-image: url(border.png) 30 30 round）</li>
</ul>
<p>伪类选择器</p>
<ul>
<li>: first-of-type 父元素的首个元素</li>
<li>: last-of-type 父元素的最后元素</li>
<li>: only-of-type 父元素唯一的元素</li>
<li>: only-child 父元素的唯一子元素</li>
<li>: nth-child(2) 父元素的第二个子元素</li>
<li>: enabled, : disabled 表单控件的禁用状态。</li>
<li>: checked 单选框或复选框被选中</li>
<li>: not</li>
<li>.input</li>
</ul>
<p>颜色、形状和特效</p>
<ul>
<li>RGBA 和透明度</li>
<li>圆角 （border-radius）</li>
<li>阴影和反射 （Shadoweflect）</li>
<li>线性渐变 （gradient）</li>
<li>旋转 （transform）</li>
<li>旋转,缩放,定位,倾斜,动画,多背景</li>
<li>盒阴影：box-shadow</li>
</ul>
<p>其他</p>
<ul>
<li>
<p>媒体查询：定义两套 css，当浏览器的尺寸变化时会采用不同的属性</p>
<h3 id="css-sprite-雪碧图" tabindex="-1"><a class="header-anchor" href="#css-sprite-雪碧图" aria-hidden="true">#</a> CSS sprite 雪碧图</h3>
<p>将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 属性的组合进行背景定位。<strong>优点</strong></p>
</li>
<li>
<p>减少 http 请求次数，提升性能；</p>
</li>
<li>
<p>能减少图片的字节，把 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的字节总和。</p>
</li>
</ul>
<p>缺点：维护性差（图片位置修改，内容宽高修改得重新计算）</p>
<h3 id="如何判断元素是否到达可视区域-图片懒加载" tabindex="-1"><a class="header-anchor" href="#如何判断元素是否到达可视区域-图片懒加载" aria-hidden="true">#</a> 如何判断元素是否到达可视区域（图片懒加载）</h3>
<p>以图片显示为例：</p>
<ul>
<li>window.innerHeight 是浏览器可视区的高度；</li>
<li>document.body.scrollTop || document.documentElement.scrollTop 是浏览器滚动的过的距离；</li>
<li>imgs.offsetTop 是元素顶部距离文档顶部的高度（包括滚动条的距离）；</li>
<li>内容达到显示区域的：img.offsetTop &lt; window.innerHeight + document.body.scrollTop;</li>
</ul>
<p></p>
<h3 id="z-index-属性在什么情况下会失效" tabindex="-1"><a class="header-anchor" href="#z-index-属性在什么情况下会失效" aria-hidden="true">#</a> z-index 属性在什么情况下会失效</h3>
<p>通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index 值越大就越是在上层。z-index 元素的 position 属性需要是 relative，absolute 或是 fixed。z-index 属性在下列情况下会失效：</p>
<ul>
<li>父元素 position 为 relative 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；</li>
</ul>
<p>层级的表现有时候不是看子标签的 z-index 多高，而要看整个 DOM tree 的第一个 relative 属性的父标签的层级。</p>
<ul>
<li>
<p>元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；</p>
</li>
<li>
<p>元素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为 display：inline-block；</p>
<h3 id="css-reset" tabindex="-1"><a class="header-anchor" href="#css-reset" aria-hidden="true">#</a> CSS reset</h3>
<h4 id="reset-css" tabindex="-1"><a class="header-anchor" href="#reset-css" aria-hidden="true">#</a> reset.css</h4>
<p>重置样式文件（用的少，性能不是很好）</p>
<h4 id="normalized-css" tabindex="-1"><a class="header-anchor" href="#normalized-css" aria-hidden="true">#</a> normalized.css</h4>
<p>bootstrap 框架的 CSS 重置样式库</p>
<h3 id="重排-reflow-和重绘-repaint-的理解" tabindex="-1"><a class="header-anchor" href="#重排-reflow-和重绘-repaint-的理解" aria-hidden="true">#</a> 重排（reflow）和重绘（repaint）的理解</h3>
<h3 id="css-动画-animation" tabindex="-1"><a class="header-anchor" href="#css-动画-animation" aria-hidden="true">#</a> CSS 动画：animation</h3>
<h4 id="animation、transition、transform、translate-这几个属性要搞清楚" tabindex="-1"><a class="header-anchor" href="#animation、transition、transform、translate-这几个属性要搞清楚" aria-hidden="true">#</a> animation、transition、transform、translate 这几个属性要搞清楚：</h4>
</li>
<li>
<p>animation：用于设置动画属性，是一个简写的属性，包含 6 个属性</p>
</li>
<li>
<p>transition：用于设置元素的样式过度，和 animation 有着类似的效果，但细节上有很大的不同</p>
</li>
<li>
<p>transform：用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系</p>
</li>
<li>
<p>translate：translate 只是 transform 的一个属性值，即移动，除此之外还有 scale 等</p>
<h4 id="transition-和-animation-的区别-1" tabindex="-1"><a class="header-anchor" href="#transition-和-animation-的区别-1" aria-hidden="true">#</a> transition 和 animation 的区别</h4>
<p>Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是 transition 需要触发一个事件才能改变属性， 而 animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从 from .... to，而 animation 可以一帧一帧的。</p>
<h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h2>
<h3 id="常见的-css-布局单位" tabindex="-1"><a class="header-anchor" href="#常见的-css-布局单位" aria-hidden="true">#</a> 常见的 CSS 布局单位</h3>
<p>常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh。<strong>（1）像素</strong>（px）是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS 像素和物理像素：</p>
</li>
<li>
<p><strong>CSS 像素</strong>：为 web 开发者提供，在 CSS 中使用的一个抽象单位；</p>
</li>
<li>
<p><strong>物理像素</strong>：只与设备的硬件密度有关，任何设备的物理像素都是固定的。</p>
</li>
</ul>
<p><strong>（2）百分比</strong>（%），当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。<strong>（3）em 和 rem</strong>相对于 px 更具灵活性，它们都是相对长度单位，它们之间的区别：<strong>em 相对于父元素，rem 相对于根元素。</strong></p>
<ul>
<li><strong>em：</strong> 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认 16px)。(相对父元素的字体大小倍数)。</li>
<li><strong>rem：</strong> rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素）的 font-size 的倍数。<strong>作用</strong>：利用 rem 可以实现简单的响应式布局，可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。</li>
</ul>
<p><strong>（4）vw/vh</strong>是与视图窗口有关的单位，vw 表示相对于视图窗口的宽度，vh 表示相对于视图窗口高度，除了 vw 和 vh 外，还有 vmin 和 vmax 两个相关的单位。</p>
<ul>
<li>vw：相对于视窗的宽度，视窗宽度是 100vw；</li>
<li>vh：相对于视窗的高度，视窗高度是 100vh；</li>
<li>vmin：vw 和 vh 中的较小值；</li>
<li>vmax：vw 和 vh 中的较大值；</li>
</ul>
<p><strong>vw/vh</strong> 和百分比很类似，两者的区别：</p>
<ul>
<li>
<p>百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate 等)</p>
</li>
<li>
<p>vw/vm：相对于视窗的尺寸</p>
<h3 id="px、em、rem-的区别及使用场景" tabindex="-1"><a class="header-anchor" href="#px、em、rem-的区别及使用场景" aria-hidden="true">#</a> px、em、rem 的区别及使用场景</h3>
<p>-px 绝对长度单位-em 相对长度单位，相对于父元素-rem 相对长度单位，相对于 html 根元素</p>
<h4 id="三者的区别" tabindex="-1"><a class="header-anchor" href="#三者的区别" aria-hidden="true">#</a> <strong>三者的区别：</strong></h4>
</li>
<li>
<p>px 是固定的像素，一旦设置了就无法因为适应页面大小而改变。</p>
</li>
<li>
<p>em 和 rem 相对于 px 更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。</p>
</li>
<li>
<p>em 是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而 rem 是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> <strong>使用场景</strong></h4>
</li>
<li>
<p>对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用 px 即可 。</p>
</li>
<li>
<p>对于需要适配各种移动设备，使用 rem，例如需要适配 iPhone 和 iPad 等分辨率差别比较挺大的设备。</p>
<h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3>
<p><strong>要求对行内元素、块状元素及不定宽高的块状元素均可适用</strong></p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>main<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-flex" tabindex="-1"><a class="header-anchor" href="#_1-flex" aria-hidden="true">#</a> 1. flex</h4>
<p>法 1：父级设置 dislpay:flex，然后 justify-content 水平方向居中，align-items 垂直居中</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>法 2：父级设置 dislpay:flex，子级 margin:auto</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-绝对定位" tabindex="-1"><a class="header-anchor" href="#_2-绝对定位" aria-hidden="true">#</a> 2. 绝对定位</h4>
<p>如果元素宽高已知可以用 margin，未知可以用 transform
父级设置相对定位，子级设置绝对定位，左下各 50%，同时还要 transform 往左和上平移 50%</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-grid-布局" tabindex="-1"><a class="header-anchor" href="#_3-grid-布局" aria-hidden="true">#</a> 3. grid 布局</h4>
<p>使用 grid，它是做二维布局的，但是只有一个子元素时，一维布局与二维布局就一样了。结合 justify-content/justify-items 和 align-content/align-items 就有四种方案。加上 place-items place-content 这两个合并形式。下面 6 种方案的效果一样。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* 容器内所有项目为一个整体，水平居中 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 垂直居中 */</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------ */</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 容器内的项目（自己该单元格），垂直居中 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------ */</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------ */</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------ */</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* `place-items`是`align-items`属性和`justify-items`属性的合并简写形式*/</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------ */</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* place-content 属性 是justify-content 属性，align-content 属性合并形式*/</span>
  <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="盒子水平居中" tabindex="-1"><a class="header-anchor" href="#盒子水平居中" aria-hidden="true">#</a> 盒子水平居中</h4>
<p>行内 Inline 元素 text-align:center 块级 block 元素 margin:0 auto</p>
<h4 id="盒子垂直居中" tabindex="-1"><a class="header-anchor" href="#盒子垂直居中" aria-hidden="true">#</a> 盒子垂直居中</h4>
<p>行内 Inline 元素 line-height 的值等于 height 的值</p>
<h3 id="左侧固定宽度-300px-右侧自适应的布局" tabindex="-1"><a class="header-anchor" href="#左侧固定宽度-300px-右侧自适应的布局" aria-hidden="true">#</a> 左侧固定宽度 300px，右侧自适应的布局</h3>
<p>初始元素如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-使用-fiex-布局-主流方式" tabindex="-1"><a class="header-anchor" href="#_1-使用-fiex-布局-主流方式" aria-hidden="true">#</a> 1. 使用 fIex 布局（主流方式）</h4>
<p>父容器设置 display:flex，定宽子元素设置 flex-basis 或者 width，自适应的子元素设置 flex:1,或者 flex-grow:1。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用-grid-布局" tabindex="-1"><a class="header-anchor" href="#_2-使用-grid-布局" aria-hidden="true">#</a> 2. 使用 grid 布局</h4>
<p>父容器设置 display:grid,使用 grid-template-rows 和 grid-template-columns 设置格子；子项使用 grid-column 和 grid-row 设置在格子中的位置。gid 布局对浏览器的版本要求比较苛刻，IE 基本不支持。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-利用浮动" tabindex="-1"><a class="header-anchor" href="#_3-利用浮动" aria-hidden="true">#</a> 3. 利用浮动</h4>
<p>将左边元素宽度设置为 300px，并且设置向左浮动。将右边元素的 margin-left 设置为 300px，宽度设置为 auto（默认为 auto，撑满整个父元素）。</p>
<div class="language-CSS ext-CSS line-numbers-mode"><pre v-pre class="language-CSS"><code>.container {
        height: 100vh;
    }
    .left {
        float: left;
        width: 300px;
        height: 100%;
        background-color: tomato;
    }
    .main {
        margin-left: 300px;
        /*  width: auto; 可以换成 width: calc(100% - 300px);，或者不需要设置宽度 */
        height: 100%;
        background: gold;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-bfc-方法" tabindex="-1"><a class="header-anchor" href="#_4-bfc-方法" aria-hidden="true">#</a> 4. BFC 方法</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* 触发了BFC，BFC的区域不会与浮动元素发生重叠 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h3>
<p>右两栏宽度固定，中间自适应的布局</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-绝对定位" tabindex="-1"><a class="header-anchor" href="#_1-绝对定位" aria-hidden="true">#</a> <strong>1. 绝对定位</strong></h4>
<p>左右两栏设置为绝对定位，中间设置对应方向大小的 margin 的值。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-flex-布局" tabindex="-1"><a class="header-anchor" href="#_2-flex-布局" aria-hidden="true">#</a> 2. flex 布局</h4>
<p>左右两栏设置固定大小，中间一栏设置为 flex:1。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;div
  class="container"
  > &lt;div
  class="left"
  > 左&lt;/div
  > &lt;div
  class="center"
  > 中&lt;/div
  > &lt;div
  class="right"
  > 右&lt;/div
  > &lt;/div
  > .container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>

  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-浮动" tabindex="-1"><a class="header-anchor" href="#_3-浮动" aria-hidden="true">#</a> 3. 浮动</h4>
<p>左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的 margin 值，注意这种方式**，中间一栏必须放到最后**</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;div
  class="left"
  > 左&lt;/div
  > &lt;div
  class="right"
  > 右&lt;/div
  > &lt;div
  class="center"
  > 中&lt;/div
  > .container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token comment">/* 上面两句可以替换成 overflow: hidden; */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-圣杯布局-浮动和负边距" tabindex="-1"><a class="header-anchor" href="#_4-圣杯布局-浮动和负边距" aria-hidden="true">#</a> 4. 圣杯布局：浮动和负边距</h4>
<p>左中右布局占满屏幕，左右固定 200px，中间自适应，先加载中间块。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 200px 0 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

  <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>

  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>

  <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>

  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-双飞翼布局-浮动和外边距负值" tabindex="-1"><a class="header-anchor" href="#_5-双飞翼布局-浮动和外边距负值" aria-hidden="true">#</a> 5. 双飞翼布局：浮动和外边距负值</h4>
<p>左中右布局占满屏幕，左右固定 200px，中间自适应，先加载中间块。这就是双飞翼布局。圣杯和双飞翼区别：双非翼的左右位置通过中间列的 margin（或者 padding）实现；圣杯是通过父元素的 padding 实现</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;div
  class="center"
  > &lt;div
  class="main"
  > 中
  &lt;/div
  > &lt;/div
  > &lt;div
  class="left"
  > 左&lt;/div
  > &lt;div
  class="right"
  > 右&lt;/div
  > .container
  div</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

  <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token comment">/* margin-left: 200px;
    margin-right: 300px; */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 300px 0 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定位与浮动" tabindex="-1"><a class="header-anchor" href="#定位与浮动" aria-hidden="true">#</a> 定位与浮动</h2>
<h3 id="bfc-规范" tabindex="-1"><a class="header-anchor" href="#bfc-规范" aria-hidden="true">#</a> BFC 规范</h3>
<h4 id="bfc-block-formatting-context-块级格式上下文" tabindex="-1"><a class="header-anchor" href="#bfc-block-formatting-context-块级格式上下文" aria-hidden="true">#</a> BFC (block formatting context) 块级格式上下文</h4>
<p>BFC 是页面上一个隔离的独立容器，容器的子元素不会影响外面的元素。</p>
<h4 id="bfc-渲染规则" tabindex="-1"><a class="header-anchor" href="#bfc-渲染规则" aria-hidden="true">#</a> BFC 渲染规则</h4>
<ul>
<li>
<p>BFC 元素垂直方向的边距会发生重叠，由 margin 决定</p>
</li>
<li>
<p>BFC 的区域不会与浮动元素的区域重叠</p>
</li>
<li>
<p>BFC 是一个独立的容器，子元素不会影响外面元素</p>
</li>
<li>
<p>计算 BFC 高度的时候，浮动元素也会参与计算</p>
<h4 id="如何触发-bfc" tabindex="-1"><a class="header-anchor" href="#如何触发-bfc" aria-hidden="true">#</a> 如何触发 BFC？</h4>
<p>给父元素设置以下属性可以触发。</p>
</li>
<li>
<p>float 的值非 none（设置 float 的属性，属性值不是 none）</p>
</li>
<li>
<p>overflow:hidden（属性值不是 visible）</p>
</li>
<li>
<p>display:inline-block(或者 table-cell...)</p>
</li>
<li>
<p>position:absolute, fixed</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>文字在这<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/_ ------------------------------------------------- _/</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">display:inline-block li</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bfc-使用场景" tabindex="-1"><a class="header-anchor" href="#bfc-使用场景" aria-hidden="true">#</a> BFC 使用场景</h4>
<ol>
<li>去除外边距重叠</li>
</ol>
<ul>
<li>父子元素都设置了 margin-top</li>
<li>兄弟元素 margin-bottom 和 margin-top 重叠</li>
<li>空元素设置了上下 margin 值不一样</li>
</ul>
<ol start="2">
<li><strong>左边定宽，右边自适应</strong>，只需要给右边创建 BFC 即可</li>
<li>清除浮动</li>
</ol>
<h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  /* 用来清除浮动 */
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>文字在这<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>触发 BFC</li>
<li>在底部加一个 div 盒子，然后在这个盒子设置样式 clear:both（现在几乎不用）</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clear</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>:after（最常用）</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="position-定位" tabindex="-1"><a class="header-anchor" href="#position-定位" aria-hidden="true">#</a> position 定位</h3>
<ul>
<li>
<p>static：正常文档流，无定位</p>
</li>
<li>
<p>relative：正常文档流，相对自身定位</p>
</li>
<li>
<p>absolute：脱离文档流，相对上级有 position 属性且值不为 static 的元素定位，若没有则相对 body 定位</p>
</li>
<li>
<p>fixed：脱离文档流，相对于浏览器窗口定位</p>
</li>
<li>
<p>sticky：根据窗口滚动自动切换 relative 和 fixed，由 top 决定</p>
<h3 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h3>
<p><a href="http://kexiaolong.gitee.io/flexible-box-display/#display-container" target="_blank" rel="noopener noreferrer">flex 在线演示<ExternalLinkIcon/></a>display: flex</p>
</li>
<li>
<p>弹性盒布局，CSS3 的新属性，用于方便布局，比如垂直居中</p>
</li>
<li>
<p>flex 属性是 flex-grow、flex-shrink 和 flex-basis 的简写</p>
</li>
<li>
<p>容器属性：flex-direction, flex-wrap, justify-content, align-items, flex-flow</p>
</li>
<li>
<p>项目属性： align-self, order, flex-grow, flex-shrink, flex-basis, flex</p>
<h4 id="父级容器属性" tabindex="-1"><a class="header-anchor" href="#父级容器属性" aria-hidden="true">#</a> 父级容器属性</h4>
<h5 id="_1-flex-direction" tabindex="-1"><a class="header-anchor" href="#_1-flex-direction" aria-hidden="true">#</a> 1 flex-direction</h5>
<p>主轴方向（项目的排列方向）flex-direction: row | row-reverse | column | column-reverse;</p>
<h5 id="_2-flex-wrap-属性" tabindex="-1"><a class="header-anchor" href="#_2-flex-wrap-属性" aria-hidden="true">#</a> 2 flex-wrap 属性</h5>
<p>是否换行 flex-wrap: nowrap | wrap | wrap-reverse;</p>
<h5 id="_3-justify-content-属性" tabindex="-1"><a class="header-anchor" href="#_3-justify-content-属性" aria-hidden="true">#</a> 3 justify-content 属性</h5>
<p>在主轴上的对齐方式 justify-content:</p>
</li>
</ul>
<p>flex-start 主轴方向，起点对齐 flex-end 主轴方向，终点对齐 center 主轴方向，居中对齐 space-between 主轴方向，项目之间间隙相等 space-around; 主轴方向，每个项目两侧空隙相等</p>
<h5 id="_4-align-items-属性" tabindex="-1"><a class="header-anchor" href="#_4-align-items-属性" aria-hidden="true">#</a> 4 align-items 属性</h5>
<p>align-items:</p>
<p>flex-start：交叉轴的起点对齐。flex-end：交叉轴的终点对齐。center：交叉轴的中点对齐。baseline: 项目的第一行文字的基线对齐。stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度 </p>
<h5 id="_5-align-content-属性" tabindex="-1"><a class="header-anchor" href="#_5-align-content-属性" aria-hidden="true">#</a> 5 align-content 属性</h5>
<p>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p>
<h5 id="_6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_6-flex-flow" aria-hidden="true">#</a> 6 flex-flow</h5>
<p>flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap</p>
<h4 id="子元素属性" tabindex="-1"><a class="header-anchor" href="#子元素属性" aria-hidden="true">#</a> 子元素属性</h4>
<h5 id="_1-align-self" tabindex="-1"><a class="header-anchor" href="#_1-align-self" aria-hidden="true">#</a> 1 align-self</h5>
<p>项目在交叉轴上的对齐方式（可以覆盖 align-items 属性)默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch align-self: auto | flex-start | flex-end | center | baseline | stretch;</p>
<h5 id="_2-order-属性" tabindex="-1"><a class="header-anchor" href="#_2-order-属性" aria-hidden="true">#</a> 2 order 属性</h5>
<p>项目排列顺序（数值越小越靠前）order: (integer);</p>
<h5 id="_3-flex-grow" tabindex="-1"><a class="header-anchor" href="#_3-flex-grow" aria-hidden="true">#</a> 3 flex-grow</h5>
<p>项目放大比例，默认为 flex-grow: (number); /_ default 0 _/</p>
<h5 id="_4-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_4-flex-shrink" aria-hidden="true">#</a> 4 flex-shrink</h5>
<p>项目缩小比例，默认为 1（空间不够才会缩小）flex-shrink: (number); /_ default 1 _/</p>
<h5 id="_5-flex-basis" tabindex="-1"><a class="header-anchor" href="#_5-flex-basis" aria-hidden="true">#</a> 5 flex-basis</h5>
<p>设置项目占主轴的空间（像设置 width 和 height 一样）flex-basis: (length) | auto; /_ default auto _/</p>
<p>例如 flex-basis: 200px; /_ 项目将占据固定空间 _/</p>
<h5 id="_6-flex" tabindex="-1"><a class="header-anchor" href="#_6-flex" aria-hidden="true">#</a> 6 flex</h5>
<p>flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。flex: auto /_ 1 1 auto <em>/flex: none /</em> 0 0 auto _/</p>
<h3 id="grid-布局" tabindex="-1"><a class="header-anchor" href="#grid-布局" aria-hidden="true">#</a> grid 布局</h3>
<p>Flex 布局是轴线布局，只能指定&quot;项目&quot;针对轴线的位置，可以看作是<strong>一维布局</strong>。Grid 布局则是将容器划分成&quot;行&quot;和&quot;列&quot;，产生单元格，然后指定&quot;项目所在&quot;的单元格，可以看作是<strong>二维布局</strong>。</p>
<h4 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h4>
<h5 id="_1-display-属性" tabindex="-1"><a class="header-anchor" href="#_1-display-属性" aria-hidden="true">#</a> 1 display 属性</h5>
<p>指定一个容器采用网格布局。display: grid;默认情况下，容器元素都是块级元素，但也可以设成行内元素：display: inline-grid。</p>
<h5 id="_2-row-columns-设置行列数" tabindex="-1"><a class="header-anchor" href="#_2-row-columns-设置行列数" aria-hidden="true">#</a> 2 row columns 设置行列数</h5>
<p><strong>grid-template-columns 属性， grid-template-rows 属性</strong>
grid-template-columns 属性定义每一列的列宽，grid-template-rows 属性定义每一行的行高。下面代码划分了 3*3 的格子，每个格子 100px，</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>repeat()函数</strong>重复写 3 个 100px 很麻烦，可以使用 repeat()函数，repeat(3, 100px);
<strong>fr 关键字</strong>为了方便表示比例关系，网格布局提供了 fr 关键字（fraction 的缩写，意为&quot;片段&quot;）。如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍。下面代码展示了 fr 关键字的用法</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网格线的名称</strong>grid-template-columns 属性和 grid-template-rows 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1] 100px [c2] 100px [c3] 100px [c4]<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1] 100px [r2] 100px [r3] 100px [r4]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-gap-设置间隙" tabindex="-1"><a class="header-anchor" href="#_3-gap-设置间隙" aria-hidden="true">#</a> 3 gap 设置间隙</h5>
<p><strong>grid-row-gap 属性</strong> 设置行与行的间隔（行间距)
<strong>grid-column-gap 属性</strong> 设置列与列的间隔（列间距）
<strong>grid-gap 属性</strong> 合并简写形式 grid-gap:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-row-gap</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid-column-gap</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4-grid-template-areas-属性" tabindex="-1"><a class="header-anchor" href="#_4-grid-template-areas-属性" aria-hidden="true">#</a> 4 grid-template-areas 属性</h5>
<p>指定&quot;区域&quot;（area），一个区域由单个或多个单元格组成 display: grid;grid-template-columns: 100px 100px 100px;grid-template-rows: 100px 100px 100px;grid-template-areas: 'a b c' 'd e f' 'g h i';</p>
<h5 id="_5-grid-auto-flow-属性" tabindex="-1"><a class="header-anchor" href="#_5-grid-auto-flow-属性" aria-hidden="true">#</a> 5 grid-auto-flow 属性</h5>
<p>容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是&quot;先行后列&quot;，即先填满第一行，再开始放入第二行，即下图数字的顺序。</p>
<h5 id="_6-justify-items-属性-align-items-属性-place-items-属性" tabindex="-1"><a class="header-anchor" href="#_6-justify-items-属性-align-items-属性-place-items-属性" aria-hidden="true">#</a> 6 justify-items 属性， align-items 属性， place-items 属性</h5>
<p>justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。</p>
<h5 id="_7-justify-content-属性-align-content-属性-place-content-属性" tabindex="-1"><a class="header-anchor" href="#_7-justify-content-属性-align-content-属性-place-content-属性" aria-hidden="true">#</a> 7 justify-content 属性， align-content 属性， place-content 属性</h5>
<p>justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下）</p>
<h2 id="overflow-hidden-作用" tabindex="-1"><a class="header-anchor" href="#overflow-hidden-作用" aria-hidden="true">#</a> overflow: hidden 作用</h2>
<p>verflow:hidden 的主要功能有三个：</p>
<ol>
<li>隐藏溢出</li>
<li>清除浮动</li>
<li>解除坍塌</li>
</ol>
<h2 id="场景应用" tabindex="-1"><a class="header-anchor" href="#场景应用" aria-hidden="true">#</a> 场景应用</h2>
<h3 id="css-画三角形" tabindex="-1"><a class="header-anchor" href="#css-画三角形" aria-hidden="true">#</a> CSS 画三角形</h3>
<p>用 border 画：一个盒子，宽高都为 0，边框设置透明，一个边框设置颜色。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现一个扇形" tabindex="-1"><a class="header-anchor" href="#实现一个扇形" aria-hidden="true">#</a> 实现一个扇形</h3>
<p>用 CSS 实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个 90° 的扇形</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宽高自适应的正方形" tabindex="-1"><a class="header-anchor" href="#宽高自适应的正方形" aria-hidden="true">#</a> 宽高自适应的正方形</h3>
<ul>
<li>如果只是要相对于 body 而言的话，还可以使用 vw 和 vh</li>
</ul>
<p>这个方法要注意前提是 body 没有默认的 padding 和 margin。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span> // 10vw也是可以的
    <span class="token property">height</span><span class="token punctuation">:</span> 10vw<span class="token punctuation">;</span> // 视口宽度的10%
    <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>利用元素的 margin/padding 百分比是相对父元素 width 的性质来实现：padding 撑高</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">padding-top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用伪元素的子元素，设置其 margin-top: 100%，让父元素撑高</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.square::after</span> <span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="盒子高度永远是宽度的一半" tabindex="-1"><a class="header-anchor" href="#盒子高度永远是宽度的一半" aria-hidden="true">#</a> 盒子高度永远是宽度的一半</h2>
<ul>
<li>padding：元素的 padding 百分比是相对父元素 width</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">padding-top</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画一条-0-5px-的线" tabindex="-1"><a class="header-anchor" href="#画一条-0-5px-的线" aria-hidden="true">#</a> 画一条 0.5px 的线</h3>
<ul>
<li><strong>采用 transform: scale()的方式</strong>，该方法用来定义元素的 2D 缩放转换：</li>
</ul>
<p>transform: scale(0.5,0.5);</p>
</div></template>


