### CSS3 新特性

_后面有更详细的介绍_

- 过渡 transition：all, .5s
- 动画 animation: logo2-line 2s linear;
- 形状转换 transform:translate(30px,30px);
- 伪类选择器: nth-of-type()
- 阴影 文字阴影: text-shadow: 2px 2px 2px #000; (水平阴影，垂直阴影，模糊距离，阴影颜色)

盒子阴影: box-shadow: 10px 10px 5px #999

- 边框 border-image: url(border.png);
- 背景
- 文字
- 渐变，Filter（滤镜）
- 弹性布局、栅格布局、多列布局
- 媒体查询

## CSS 基础

### CSS 盒模型

1. 有两种盒子模型：IE 盒模型（border-box）、标准盒模型（content-box）
2. 盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分
3. IE 盒模型和标准盒模型的区别：

- W3C 标准盒模型：属性 width，height 只包含内容 content，不包含 border 和 padding
- IE 盒模型：属性 width，height 包含 content、border 和 padding，指的是 content+padding+border。

4. 如何转换盒子模型？

box-sizing:content-box /_ 标准盒子模型 _/box-sizing:border-box /_ IE 盒子模型 _/

### height 和 line-hight 区别

line-hight 是每一行文字的高度，文字环形，盒子高度会增大 height 是一个固定值，就是盒子的高度，超出盒子高度则会溢出

#### **line-height 的理解**

**（1）line-height 的概念：**

- line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；
- 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
- 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
- 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
- line-height 和 height 都能撑开一个高度；

**（2）line-height 的赋值方式：**

- 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
- 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 \* 18 = 27px
- 百分比：将计算后的值传递给后代

  ### CSS 选择器及其优先级

  #### 选择器

  | **选择器**   | **格式**      | **优先级权重** |
  | ------------ | ------------- | -------------- |
  | id 选择器    | #id           | 100            |
  | 类选择器     | #classname    | 10             |
  | 属性选择器   | a[ref=“eee”]  | 10             |
  | 伪类选择器   | li:last-child | 10             |
  | 标签选择器   | div           | 1              |
  | 伪元素选择器 | li:after      | 1              |
  | 相邻选择器   | h1+p          | 0              |
  | 子选择器     | ul > li       | 0              |
  | 通配符选择器 | \*            | 0              |

**深度选择器**

> > >            CSS
> > >
> > > /deep/ less,sass(vue2):deep() less,sass(vue23)

**伪元素和伪类的区别和作用？**

- 伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

`p::before {content:"第一章：";} p::after {content:"Hot!";} p::first-line {background:red;} p::first-letter {font-size:30px;}`

- 伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

`a:hover {color: #FF00FF}p:first-child {color: red}`

**总结：** 伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。**::before 和 :after 的双冒号和单冒号区别**（1）冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。 （2）::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。**注意：**:before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before、::after。

#### 优先级

对于选择器的**优先级**： !import > 内联样式 > id > class > 标签 > 通配\*

- 内联样式 权重值：100
- id 选择器 权重值：100
- 类、伪类、属性选择器 权重值：10
- 标签和伪元素选择器 权重值：1
- 通配, >, + 权重值：0

**注意事项：**

- !important 声明的样式的优先级最高；
- 如果优先级相同，则最后出现的样式生效；
- 继承得到的样式的优先级最低；
- 通用选择器（\*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

  ### CSS 中可继承与不可继承属性

  继承：设置父元素的样式，子元素也会继承该样式**无继承性的属性**

1. **display**：规定元素应该生成的框的类型
2. **文本属性**：

- vertical-align：垂直文本对齐
- text-decoration：规定添加到文本的装饰
- text-shadow：文本阴影效果
- white-space：空白符的处理
- unicode-bidi：设置文本的方向

1. **盒子模型的属性**：width、height、margin、border、padding
2. **背景属性**：background、background-color、background-image、background-repeat、background-position、background-attachment
3. **定位属性**：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
4. **生成内容属性**：content、counter-reset、counter-increment
5. **轮廓样式属性**：outline-style、outline-width、outline-color、outline
6. **页面样式属性**：size、page-break-before、page-break-after
7. **声音样式属性**：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**有继承性的属性**

1. 字体系列属性

- font-family：字体系列
- font-weight：字体的粗细
- font-size：字体的大小
- font-style：字体的风格

2. 文本系列属性

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高
- word-spacing：单词之间的间距
- letter-spacing：中文或者字母之间的间距
- text-transform：控制文本大小写（就是 uppercase、lowercase、capitalize 这三个）
- color：文本颜色

3. 元素可见性

- visibility：控制元素显示隐藏

4. 列表布局属性

- list-style：列表风格，包括 list-style-type、list-style-image 等

5. 光标属性

- cursor：光标显示为何种形态

  ### display 有哪些值

  | **值**       | **描述**                                             |
  | ------------ | ---------------------------------------------------- |
  | none         | 此元素不会被显示。                                   |
  | block        | 此元素将显示为块级元素，此元素前后会带有换行符。     |
  | inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。 |
  | inline-block | 行内块元素。                                         |

注意：以上这些是常用的**display 的 block、inline 和 inline-block 的区别**

1. **block：** 会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；
2. **inline：** 元素不会独占一行，设置 width、height 属性无效。但可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
3. **inline-block：** 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。

**行内和块级元素特点**

1. **行内元素**

- 设置宽高无效；
- 可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
- 不会自动换行；

1. **块级元素**

- 可以设置宽高；
- 设置 margin 和 padding 都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下。

  ### 隐藏样式的区别

- visibility:hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件。
- display:none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
- opacity:0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
- rgba(0,0,0,0)：透明，会继续在文档流中占位，所以触发重绘。由于只作用于颜色或背景色，所以子元素不会继承，透明后可以触发点击事件
- position: absolute：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
- z-index: 负值：使其他元素遮盖住该元素，以此来实现隐藏。
- clip/clip-path：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
- transform: scale(0,0)：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

  ### transition 和 animation 的区别

- **transition 是过度属性**强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。
- **animation 是动画属性**它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画。

  ### CSS3 新特性

  文字

- 单词换行（word-wrap（对长的不可分割单词换行）word-wrap：break-word）
- 文字特效 （text-shadow）
- 文字渲染 （Text-decoration）
- font-face 属性：定义自己的字体

图片

- 背景图片 background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
- 边框图片（border-image: url(border.png) 30 30 round）

伪类选择器

- : first-of-type 父元素的首个元素
- : last-of-type 父元素的最后元素
- : only-of-type 父元素唯一的元素
- : only-child 父元素的唯一子元素
- : nth-child(2) 父元素的第二个子元素
- : enabled, : disabled 表单控件的禁用状态。
- : checked 单选框或复选框被选中
- : not
- .input

颜色、形状和特效

- RGBA 和透明度
- 圆角 （border-radius）
- 阴影和反射 （Shadoweflect）
- 线性渐变 （gradient）
- 旋转 （transform）
- 旋转,缩放,定位,倾斜,动画,多背景
- 盒阴影：box-shadow

其他

- 媒体查询：定义两套 css，当浏览器的尺寸变化时会采用不同的属性

  ### CSS sprite 雪碧图

  将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 属性的组合进行背景定位。**优点**

- 减少 http 请求次数，提升性能；
- 能减少图片的字节，把 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的字节总和。

缺点：维护性差（图片位置修改，内容宽高修改得重新计算）

### 如何判断元素是否到达可视区域（图片懒加载）

以图片显示为例：

- window.innerHeight 是浏览器可视区的高度；
- document.body.scrollTop || document.documentElement.scrollTop 是浏览器滚动的过的距离；
- imgs.offsetTop 是元素顶部距离文档顶部的高度（包括滚动条的距离）；
- 内容达到显示区域的：img.offsetTop < window.innerHeight + document.body.scrollTop;



### z-index 属性在什么情况下会失效

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index 值越大就越是在上层。z-index 元素的 position 属性需要是 relative，absolute 或是 fixed。z-index 属性在下列情况下会失效：

- 父元素 position 为 relative 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；

层级的表现有时候不是看子标签的 z-index 多高，而要看整个 DOM tree 的第一个 relative 属性的父标签的层级。

- 元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；
- 元素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为 display：inline-block；

  ### CSS reset

  #### reset.css

  重置样式文件（用的少，性能不是很好）

  #### normalized.css

  bootstrap 框架的 CSS 重置样式库

  ### 重排（reflow）和重绘（repaint）的理解

  ### CSS 动画：animation

  #### animation、transition、transform、translate 这几个属性要搞清楚：

- animation：用于设置动画属性，是一个简写的属性，包含 6 个属性
- transition：用于设置元素的样式过度，和 animation 有着类似的效果，但细节上有很大的不同
- transform：用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系
- translate：translate 只是 transform 的一个属性值，即移动，除此之外还有 scale 等

  #### transition 和 animation 的区别

  Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是 transition 需要触发一个事件才能改变属性， 而 animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从 from .... to，而 animation 可以一帧一帧的。

  ## 页面布局

  ### 常见的 CSS 布局单位

  常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh。**（1）像素**（px）是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS 像素和物理像素：

- **CSS 像素**：为 web 开发者提供，在 CSS 中使用的一个抽象单位；
- **物理像素**：只与设备的硬件密度有关，任何设备的物理像素都是固定的。

**（2）百分比**（%），当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。**（3）em 和 rem**相对于 px 更具灵活性，它们都是相对长度单位，它们之间的区别：**em 相对于父元素，rem 相对于根元素。**

- **em：** 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认 16px)。(相对父元素的字体大小倍数)。
- **rem：** rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素）的 font-size 的倍数。**作用**：利用 rem 可以实现简单的响应式布局，可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。

**（4）vw/vh**是与视图窗口有关的单位，vw 表示相对于视图窗口的宽度，vh 表示相对于视图窗口高度，除了 vw 和 vh 外，还有 vmin 和 vmax 两个相关的单位。

- vw：相对于视窗的宽度，视窗宽度是 100vw；
- vh：相对于视窗的高度，视窗高度是 100vh；
- vmin：vw 和 vh 中的较小值；
- vmax：vw 和 vh 中的较大值；

**vw/vh** 和百分比很类似，两者的区别：

- 百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate 等)
- vw/vm：相对于视窗的尺寸

  ### px、em、rem 的区别及使用场景

  -px 绝对长度单位-em 相对长度单位，相对于父元素-rem 相对长度单位，相对于 html 根元素

  #### **三者的区别：**

- px 是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em 和 rem 相对于 px 更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
- em 是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而 rem 是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

  #### **使用场景**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用 px 即可 。
- 对于需要适配各种移动设备，使用 rem，例如需要适配 iPhone 和 iPad 等分辨率差别比较挺大的设备。

  ### 水平垂直居中

  **要求对行内元素、块状元素及不定宽高的块状元素均可适用**

```html
<div class="container">
  <div class="main">main</div>
</div>
```

#### 1. flex

法 1：父级设置 dislpay:flex，然后 justify-content 水平方向居中，align-items 垂直居中

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

法 2：父级设置 dislpay:flex，子级 margin:auto

```css
.container {
  display: flex;
}

.main {
  margin: auto;
}
```

#### 2. 绝对定位

如果元素宽高已知可以用 margin，未知可以用 transform
父级设置相对定位，子级设置绝对定位，左下各 50%，同时还要 transform 往左和上平移 50%

```css
.container {
  position: relative;
}
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### 3. grid 布局

使用 grid，它是做二维布局的，但是只有一个子元素时，一维布局与二维布局就一样了。结合 justify-content/justify-items 和 align-content/align-items 就有四种方案。加上 place-items place-content 这两个合并形式。下面 6 种方案的效果一样。

```css
.container {
  display: grid;
  /* 容器内所有项目为一个整体，水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-content: center;
}
/* ------------------ */

.container {
  display: grid;
  justify-content: center;
  /* 容器内的项目（自己该单元格），垂直居中 */
  align-items: center;
}
/* ------------------ */

.container {
  display: grid;
  justify-items: center;
  align-content: center;
}
/* ------------------ */

.container {
  display: grid;
  justify-items: center;
  align-items: center;
}
/* ------------------ */

.container {
  display: grid;
  /* `place-items`是`align-items`属性和`justify-items`属性的合并简写形式*/
  place-items: center;
}
/* ------------------ */

.container {
  display: grid;
  /* place-content 属性 是justify-content 属性，align-content 属性合并形式*/
  place-content: center;
}
```

#### 盒子水平居中

行内 Inline 元素 text-align:center 块级 block 元素 margin:0 auto

#### 盒子垂直居中

行内 Inline 元素 line-height 的值等于 height 的值

### 左侧固定宽度 300px，右侧自适应的布局

初始元素如下：

```html
<div class="container">
  <div class="left"></div>
  <div class="main"></div>
</div>
```

#### 1. 使用 fIex 布局（主流方式）

父容器设置 display:flex，定宽子元素设置 flex-basis 或者 width，自适应的子元素设置 flex:1,或者 flex-grow:1。

```css
.container {
  height: 100vh;
  display: flex;
}
.left {
  flex-basis: 300px;
  background-color: red;
}
.main {
  flex: 1;
  background-color: blue;
}
```

#### 2. 使用 grid 布局

父容器设置 display:grid,使用 grid-template-rows 和 grid-template-columns 设置格子；子项使用 grid-column 和 grid-row 设置在格子中的位置。gid 布局对浏览器的版本要求比较苛刻，IE 基本不支持。

```css
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
}
```

#### 3. 利用浮动

将左边元素宽度设置为 300px，并且设置向左浮动。将右边元素的 margin-left 设置为 300px，宽度设置为 auto（默认为 auto，撑满整个父元素）。

```CSS
.container {
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
```

#### 4. BFC 方法

```css
.container {
  height: 100vh;
}
.left {
  float: left;
  width: 300px;
  height: 100%;
  background-color: tomato;
}
.main {
  overflow: hidden; /* 触发了BFC，BFC的区域不会与浮动元素发生重叠 */
  height: 100%;
  background: gold;
}
```

### 三栏布局

右两栏宽度固定，中间自适应的布局

```html
<div class="container">
  <div class="center">中</div>
  <div class="left">左</div>
  <div class="right">右</div>
</div>
```

#### **1. 绝对定位**

左右两栏设置为绝对定位，中间设置对应方向大小的 margin 的值。

```css
.container {
  height: 100vh;
  position: relative;
}
.left {
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: red;
}
.right {
  width: 300px;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
}
.center {
  margin-left: 200px;
  margin-right: 300px;
  height: 100%;
  background-color: blue;
}
```

#### 2. flex 布局

左右两栏设置固定大小，中间一栏设置为 flex:1。

```css
<div
  class="container"
  > <div
  class="left"
  > 左</div
  > <div
  class="center"
  > 中</div
  > <div
  class="right"
  > 右</div
  > </div
  > .container {
  height: 100vh;
  display: flex;
}
.left {
  width: 200px;

  background-color: red;
}
.right {
  width: 300px;

  background-color: red;
}
.center {
  flex: 1;
  background-color: blue;
}
```

#### 3. 浮动

左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的 margin 值，注意这种方式**，中间一栏必须放到最后**

```css
<div
  class="left"
  > 左</div
  > <div
  class="right"
  > 右</div
  > <div
  class="center"
  > 中</div
  > .container {
  height: 100vh;
}
.left {
  width: 200px;
  height: 100%;
  float: left;
  background-color: red;
}
.right {
  width: 300px;
  height: 100%;
  float: right;
  background-color: red;
}
.center {
  margin-left: 200px;
  margin-right: 300px;
  /* 上面两句可以替换成 overflow: hidden; */
  height: 100%;
  background-color: blue;
}
```

#### 4. 圣杯布局：浮动和负边距

左中右布局占满屏幕，左右固定 200px，中间自适应，先加载中间块。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。

```css
.container {
  height: 100vh;
  padding: 0 200px 0 100px;
}

.left {
  float: left;
  width: 100px;
  height: 100%;
  background-color: red;

  margin-left: -100%;

  position: relative;
  left: -100px;
}
.right {
  float: left;
  width: 200px;
  height: 100%;
  background-color: blue;

  margin-left: -200px;

  position: relative;
  left: 200px;
}
.center {
  float: left;
  width: 100%;
  height: 100%;
  background-color: gold;
}
```

#### 5. 双飞翼布局：浮动和外边距负值

左中右布局占满屏幕，左右固定 200px，中间自适应，先加载中间块。这就是双飞翼布局。圣杯和双飞翼区别：双非翼的左右位置通过中间列的 margin（或者 padding）实现；圣杯是通过父元素的 padding 实现

```css
<div
  class="center"
  > <div
  class="main"
  > 中
  </div
  > </div
  > <div
  class="left"
  > 左</div
  > <div
  class="right"
  > 右</div
  > .container
  div {
  float: left;
}

.left {
  width: 200px;
  height: 100vh;
  background-color: red;

  margin-left: -100%;
}

.right {
  width: 300px;
  height: 100vh;
  background-color: red;
  margin-left: -300px;
}
.center {
  width: 100%;
  height: 100vh;
  background-color: blue;
}
.main {
  /* margin-left: 200px;
    margin-right: 300px; */
  padding: 0 300px 0 200px;
}
```

## 定位与浮动

### BFC 规范

#### BFC (block formatting context) 块级格式上下文

BFC 是页面上一个隔离的独立容器，容器的子元素不会影响外面的元素。

#### BFC 渲染规则

- BFC 元素垂直方向的边距会发生重叠，由 margin 决定
- BFC 的区域不会与浮动元素的区域重叠
- BFC 是一个独立的容器，子元素不会影响外面元素
- 计算 BFC 高度的时候，浮动元素也会参与计算

  #### 如何触发 BFC？

  给父元素设置以下属性可以触发。

- float 的值非 none（设置 float 的属性，属性值不是 none）
- overflow:hidden（属性值不是 visible）
- display:inline-block(或者 table-cell...)
- position:absolute, fixed

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<h6>文字在这</h6>
```

/_ ------------------------------------------------- _/

```css
ul {
  border: 2px solid red;
}
display:inline-block li {
  width: 50px;
  height: 50px;
  background-color: blue;
  list-style: none;

  float: left;
  margin-right: 10px;
}
```

#### BFC 使用场景

1. 去除外边距重叠

- 父子元素都设置了 margin-top
- 兄弟元素 margin-bottom 和 margin-top 重叠
- 空元素设置了上下 margin 值不一样

2. **左边定宽，右边自适应**，只需要给右边创建 BFC 即可
3. 清除浮动

### 清除浮动

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  /* 用来清除浮动 */
  <div class="clear"></div>
</ul>

<h6>文字在这</h6>
```

- 触发 BFC
- 在底部加一个 div 盒子，然后在这个盒子设置样式 clear:both（现在几乎不用）

```css
ul {
  border: 2px solid red;
}
li {
  width: 50px;
  height: 50px;
  background-color: blue;
  list-style: none;

  float: left;
  margin-right: 10px;
}
.clear {
  clear: both;
}
```

- :after（最常用）

```css
ul {
  border: 2px solid red;
}
li {
  width: 50px;
  height: 50px;
  background-color: blue;
  list-style: none;

  float: left;
  margin-right: 10px;
}
ul:after {
  content: "";
  display: block;
  clear: both;
}
```

### position 定位

- static：正常文档流，无定位
- relative：正常文档流，相对自身定位
- absolute：脱离文档流，相对上级有 position 属性且值不为 static 的元素定位，若没有则相对 body 定位
- fixed：脱离文档流，相对于浏览器窗口定位
- sticky：根据窗口滚动自动切换 relative 和 fixed，由 top 决定

  ### flex 布局

  [flex 在线演示](http://kexiaolong.gitee.io/flexible-box-display/#display-container)display: flex

- 弹性盒布局，CSS3 的新属性，用于方便布局，比如垂直居中
- flex 属性是 flex-grow、flex-shrink 和 flex-basis 的简写
- 容器属性：flex-direction, flex-wrap, justify-content, align-items, flex-flow
- 项目属性： align-self, order, flex-grow, flex-shrink, flex-basis, flex

  #### 父级容器属性

  ##### 1 flex-direction

  主轴方向（项目的排列方向）flex-direction: row | row-reverse | column | column-reverse;

  ##### 2 flex-wrap 属性

  是否换行 flex-wrap: nowrap | wrap | wrap-reverse;

  ##### 3 justify-content 属性

  在主轴上的对齐方式 justify-content:

flex-start 主轴方向，起点对齐 flex-end 主轴方向，终点对齐 center 主轴方向，居中对齐 space-between 主轴方向，项目之间间隙相等 space-around; 主轴方向，每个项目两侧空隙相等

##### 4 align-items 属性

align-items:

flex-start：交叉轴的起点对齐。flex-end：交叉轴的终点对齐。center：交叉轴的中点对齐。baseline: 项目的第一行文字的基线对齐。stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度 

##### 5 align-content 属性

定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

##### 6 flex-flow

flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap

#### 子元素属性

##### 1 align-self

项目在交叉轴上的对齐方式（可以覆盖 align-items 属性)默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch align-self: auto | flex-start | flex-end | center | baseline | stretch;

##### 2 order 属性

项目排列顺序（数值越小越靠前）order: (integer);

##### 3 flex-grow

项目放大比例，默认为 flex-grow: (number); /_ default 0 _/


##### 4 flex-shrink

项目缩小比例，默认为 1（空间不够才会缩小）flex-shrink: (number); /_ default 1 _/

##### 5 flex-basis

设置项目占主轴的空间（像设置 width 和 height 一样）flex-basis: (length) | auto; /_ default auto _/

例如 flex-basis: 200px; /_ 项目将占据固定空间 _/

##### 6 flex

flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。flex: auto /_ 1 1 auto _/flex: none /_ 0 0 auto _/

### grid 布局

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。

#### 容器属性

##### 1 display 属性

指定一个容器采用网格布局。display: grid;默认情况下，容器元素都是块级元素，但也可以设成行内元素：display: inline-grid。

##### 2 row columns 设置行列数

**grid-template-columns 属性， grid-template-rows 属性**
grid-template-columns 属性定义每一列的列宽，grid-template-rows 属性定义每一行的行高。下面代码划分了 3\*3 的格子，每个格子 100px，

```css
{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```
**repeat()函数**重复写 3 个 100px 很麻烦，可以使用 repeat()函数，repeat(3, 100px);
**fr 关键字**为了方便表示比例关系，网格布局提供了 fr 关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍。下面代码展示了 fr 关键字的用法 
```css
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
}
```
**网格线的名称**grid-template-columns 属性和 grid-template-rows 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
```css
{
    grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4];
    grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4];
}
```

##### 3 gap 设置间隙

**grid-row-gap 属性** 设置行与行的间隔（行间距)
**grid-column-gap 属性** 设置列与列的间隔（列间距）
**grid-gap 属性** 合并简写形式 grid-gap: 
```html
<grid-row-gap> <grid-column-gap>
```

##### 4 grid-template-areas 属性

指定"区域"（area），一个区域由单个或多个单元格组成 display: grid;grid-template-columns: 100px 100px 100px;grid-template-rows: 100px 100px 100px;grid-template-areas: 'a b c' 'd e f' 'g h i';

##### 5 grid-auto-flow 属性

容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。

##### 6 justify-items 属性， align-items 属性， place-items 属性

justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。

##### 7 justify-content 属性， align-content 属性， place-content 属性

justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下）

## overflow: hidden 作用

verflow:hidden 的主要功能有三个：

1. 隐藏溢出
2. 清除浮动
3. 解除坍塌

## 场景应用

### CSS 画三角形

用 border 画：一个盒子，宽高都为 0，边框设置透明，一个边框设置颜色。
```css
div{
    width: 0px;
    height:0px;
    border: 100px solid transparent;
    border-bottom: 100px solid red;
}
```

### 实现一个扇形

用 CSS 实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个 90° 的扇形 
```css
div{
    width: 0px;
    height:0px;
    border: 100px solid transparent;
    border-radius:100px;
    border-bottom: 100px solid red;
}
```

### 宽高自适应的正方形

- 如果只是要相对于 body 而言的话，还可以使用 vw 和 vh

这个方法要注意前提是 body 没有默认的 padding 和 margin。

```css
.square {
    width: 10%; // 10vw也是可以的
    height: 10vw; // 视口宽度的10%
    background: tomato;
}
```

- 利用元素的 margin/padding 百分比是相对父元素 width 的性质来实现：padding 撑高

```css
.square {
width: 10%;
height: 0;
padding-top: 10%;
background: tomato;
}
```

- 使用伪元素的子元素，设置其 margin-top: 100%，让父元素撑高

```css
.square {
width: 10%;
overflow: hidden;
background: tomato;
}
.square::after {
content: '';
display: block;
margin-top: 100%;
}
```

  ## 盒子高度永远是宽度的一半

- padding：元素的 padding 百分比是相对父元素 width

```css
.square {
width: 10%;
height: 0;
padding-top: 5%;
background: tomato;
}
```

  ### 画一条 0.5px 的线

- **采用 transform: scale()的方式**，该方法用来定义元素的 2D 缩放转换：

transform: scale(0.5,0.5);
