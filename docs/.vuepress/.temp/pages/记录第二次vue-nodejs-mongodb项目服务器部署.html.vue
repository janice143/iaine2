<template><div><h1 id="记录第二次vue-nodejs-mongodb项目服务器部署" tabindex="-1"><a class="header-anchor" href="#记录第二次vue-nodejs-mongodb项目服务器部署" aria-hidden="true">#</a> 记录第二次vue-nodejs-mongodb项目服务器部署</h1>
<p>最近我的腾讯云服务器快要到期了，又租了一个一年的配置一样的云服务器。新服务器又开始了部署问题，在部署之前，我查了一下是否能两台服务器数据之前在线迁移，确实有类似的经验博客，但是我看了一下都不适合我，而且我的两个服务器严格来说是轻量应用服务器，看了官方的教程，也没有找到两个轻量应用服务器之间的在线数据迁移，然后我就开始了重新部署。</p>
<p>好在我之前把第一次部署的要点记录下来了，大家有需要可以查看【<a href="https://juejin.cn/post/7111593698797846565#heading-24" target="_blank" rel="noopener noreferrer">记录第一次vue-nodejs-mongodb项目服务器部署<ExternalLinkIcon/></a>】。</p>
<p>这次我按照这个博客重新部署，中途遇到了一些新问题，所以在这里记录了下来。</p>
<p>在记录之前，先放出我部署成功的个人项目链接</p>
<p>👉👉👉 <a href="http://43.143.81.10:8080/home" target="_blank" rel="noopener noreferrer">师大Buy 校园闲置交易平台<ExternalLinkIcon/></a> 👈👈👈</p>
<p>（和之前的版本有一些差异，技术也用了vue3，最近再往ts方向完善）</p>
<h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2>
<p>请结合上一篇博客看本文章。【<a href="https://juejin.cn/post/7111593698797846565#heading-24" target="_blank" rel="noopener noreferrer">记录第一次vue-nodejs-mongodb项目服务器部署<ExternalLinkIcon/></a>】</p>
<h3 id="nodejs安装和配置" tabindex="-1"><a class="header-anchor" href="#nodejs安装和配置" aria-hidden="true">#</a> nodejs安装和配置</h3>
<p>在安装nodejs之后，我需要把建立软连接，但是这一步骤我却没有成功，使用<code v-pre>npm -v</code>，<code v-pre>node -v</code>说是命令不存在。<code v-pre>cd</code>到<code v-pre>usr/local/bin</code>目录下面，显示有这两个文件，但是颜色是红色的。</p>
<p><strong>解决方案</strong>：使用下列语句重新建立软连接。</p>
<p><code v-pre>ln -s /usr/local/src/node-v16.15.1-linux-x64/bin/node /usr/local/bin</code></p>
<p><code v-pre>ln -s /usr/local/src/node-v16.15.1-linux-x64/bin/npm /usr/local/bin</code></p>
<p>ln命令需要用绝对路径，不能相对路径。比如node在/root/node/bin，使用ln node/bin/node /usr/bin/node不行，而应该ln /root/node/bin/node /usr/bin/node。</p>
<p>下面是最新的步骤：</p>
<pre><code># 1 安装wgetyum -y install wget

# 2 切换到/usr/local/src目录，选择这个文件夹存放nodejscd /usr/local/src

# 3 去nodejs下载官网复制下载链接，我的服务器是centos 8, 64位，所以我选择了https://nodejs.org/dist/v16.15.1/node-v16.15.1-linux-x64.tar.xz
# 4 使用 wget 安装方式
wget https://nodejs.org/dist/v16.15.1/node-v16.15.1-linux-x64.tar.xz
# 这时候这个压缩包就在当前文件夹下，现在需要解压它

# 5 解压
xz -d node-v16.15.1-linux-x64.tar.xz
tar -xvf node-v16.15.1-linux-x64.tar

# 6 建立软连接
ln -s /usr/local/src/node-v16.15.1-linux-x64/bin/node /usr/local/bin
ln -s /usr/local/src/node-v16.15.1-linux-x64/bin/npm /usr/local/bin

# 这时候你可以切换到/usr/local/bin目录，看看有没有npm，node文件夹，有的话说明成功了

# 7 试试node,npms是否能使用
node -v
npm -v

# 打印出了版本好就说明没问题
</code></pre>
<h3 id="mongodb安装" tabindex="-1"><a class="header-anchor" href="#mongodb安装" aria-hidden="true">#</a> <strong>mongodb安装</strong></h3>
<p>在配置好yum源后，我开始使用<code v-pre>yum install -y mongodb-org</code>命令安装mongodb，但是遇到如下报错</p>
<blockquote>
<p>Linux：CentOS 8报错(yum源更新报错)：“failovermethod” does not exist 与 Failed to download metadata for repo ‘appstream’解决方法</p>
</blockquote>
<p><a href="https://www.cnblogs.com/nhdlb/p/16512888.html" target="_blank" rel="noopener noreferrer">这篇博客<ExternalLinkIcon/></a>写的很好，也给出了对应的解决方案，我在这里也可以记录一下：</p>
<p><strong>问题一</strong></p>
<p><code v-pre>Configuration: OptionBinding with id “failovermethod” does not exist（配置：ID 为 “failovermethod” 的 OptionBinding 不存在）</code></p>
<p><strong>解决步骤</strong></p>
<pre><code># 切换目录
cd /etc/yum.repos.d/

# 备份源文件信息
tar zcf /home/yum.repos.d.tar.gz /etc/yum.repos.d/

# 清除无用的源文件信息
rm -rf CentOS-*.rpmsave

# 修改CentOS-Epel.repo文件,注释CentOS-Epel.repo源文件中的failovermethod=priority
这里我直接用xftp软件，可视化修改（可视化对我来说很重要，原谅我是个视觉动物）
</code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19667f0644c64cd5985241b263b6deb4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt=""></p>
<p><strong>问题2</strong></p>
<p><code v-pre>Error: Failed to download metadata for repo ‘appstream’: Cannot prepare internal mirrorlist: No URLs in mirrorlist</code></p>
<p><strong>解决步骤</strong></p>
<pre><code># 进入/etc/yum.repos.d目录
cd /etc/yum.repos.d/

## 修改所有源的链接地址
# 注释掉mirrorlist链接路径
sed -i 's/mirrorlist=/#mirrorlist=/g' /etc/yum.repos.d/CentOS-*
# 解开并修改baseurl链接路径
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

# 重建缓冲
yum clean all &amp;&amp; yum makecache

## 修改源地址为阿里地址
# 继续第二步进行修改baseurl链接路径
# 修改为阿里源路径
sed -i 's|baseurl=http://mirrors.tencentyun.com/epel/$releasever/Everything/$basearch|baseurl=http://mirrors.aliyun.com/epel-archive/8/Everything/$basearch|g' /etc/yum.repos.d/CentOS-Epel.repo
sed -i 's|baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/|baseurl=http://mirrors.aliyun.com/centos-vault/8.5.2111/BaseOS/$basearch/os/|g' /etc/yum.repos.d/CentOS-Linux-BaseOS.repo
sed -i 's|baseurl=http://vault.centos.org/$contentdir/$releasever/AppStream/$basearch/os/|baseurl=http://mirrors.aliyun.com/centos-vault/8.5.2111/AppStream/$basearch/os/|g' /etc/yum.repos.d/CentOS-Linux-AppStream.repo
sed -i 's|baseurl=http://vault.centos.org/$contentdir/$releasever/extras/$basearch/os/|baseurl=http://mirrors.aliyun.com/centos-vault/8.5.2111/extras/$basearch/os/|g' /etc/yum.repos.d/CentOS-Linux-Extras.repo

# 重建缓冲
yum clean all &amp;&amp; yum makecache
</code></pre>
<p>这个问题到底就解决了！</p>
<h3 id="mongodb的数据转移" tabindex="-1"><a class="header-anchor" href="#mongodb的数据转移" aria-hidden="true">#</a> mongodb的数据转移</h3>
<p>我需要把mongodb的数据从原来的服务器移到最新的服务器，这里涉及到数据库的拷贝问题。主要用到4个指令：<code v-pre>mongodump</code> 数据备份 和 <code v-pre>mongorestore</code>数据恢复；<code v-pre>mongoexport</code> 集合导出 和<code v-pre>mongoimport</code> 集合导入</p>
<p><code v-pre>**mongodump</code> 数据备份 和 <code v-pre>mongorestore</code>数据恢复**</p>
<ol>
<li><code v-pre>mongodump</code> 数据备份</li>
</ol>
<p>语法：<code v-pre>mongodump -h dbhost -d dbname -o dbdirectory``-h</code>： MongDB所在服务器地址，一般是127.0.0.1:27017，可以通过在xshell输入mongo看到<code v-pre>-d</code>： 需要备份的数据库实例，例如：test<code v-pre>-o</code>： 备份的数据存放位置，例如：/home/mongodump/，当然该目录需要提前建立，这个目录里面存放该数据库实例的备份数</p>
<p>对于我而言，我的备份命令如下，🧨🧨🧨<strong>记住这里是在老服务器上操作</strong>🧨🧨🧨</p>
<pre><code>mongodump -h 127.0.0.1:27017 -d schoolstore -o /home/mongodump/
</code></pre>
<p>之后再home/mongodump文件下可以看到schoolstore文件夹，里面是我项目用到的数据库。</p>
<ol>
<li>传输文件</li>
</ol>
<p>把通过Xftp，把home/mongodump下的schoolstore文件夹传输给本地，在本地传输给新服务器，放到home/mongodump下。</p>
<p>（xftp我的神）</p>
<ol>
<li><code v-pre>mongorestore</code> 数据恢复</li>
</ol>
<p>语法：<code v-pre>mongorestore -h dbhost -d dbname --dir dbdirectory</code> <code v-pre>-h</code>： MongoDB所在服务器地址 <code v-pre>-d</code>： 需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2 <code v-pre>--dir</code>： 备份数据所在位置，例如：/home/mongodump/itcast/</p>
<p>对于我而言，我的备份命令如下，🧨🧨🧨<strong>记住这里是在新服务器上操作</strong>🧨🧨🧨</p>
<pre><code>mongorestore -h 127.0.0.1:27017 -d schoolstore --dir /home/mongodump/schoolstore
</code></pre>
<ol>
<li>检验</li>
</ol>
<p>利用xshell里连接新服务器，输入<code v-pre>mongo</code> 。</p>
<p>在mongo控制台里输入show dbs，显示所有数据库，可以看到多了schoolstore 数据库。</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c3e7f5a1d3f47aaaaf9ca6a75591ba2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt=""></p>
<p><code v-pre>**mongoexport</code> 集合导出 和<code v-pre>mongoimport</code> 集合导入**</p>
<p>转移了数据库，但是这个数据库我在新的服务器里还不能直接使用。因为我的数据库存储了图片的url链接，链接都用了老服务的域名。所以我需要批量更新。</p>
<p>我的解决办法如下：</p>
<ol>
<li><code v-pre>**mongoexport</code>** 导出集合</li>
</ol>
<p>我的数据集合是schoolstore下的products，我需要把它导出为json文件，然后传输到本地，用vscode搜索老域名，替换成新域名。</p>
<pre><code>mongoexport -h 127.0.0.1:27017 -d schoolstore -c products -o /home/test.json
</code></pre>
<ol>
<li>
<p><code v-pre>**mongoimport**</code> 导入</p>
<p>在本地替换好新的域名后，再把他传输给服务器，替换老的json文件。现在需要把这个json文件批量导入到schoolstore下的products集合。</p>
</li>
</ol>
<p>在导入之前先清空一下products的数据。</p>
<pre><code># 清空集合的数据
db.schoolstore.deleteMany({})
# 导入
mongoimport -h 127.0.0.1:27017 -d schoolstore -c products —file /home/test.json
</code></pre>
<h3 id="mongodb常用指令" tabindex="-1"><a class="header-anchor" href="#mongodb常用指令" aria-hidden="true">#</a> mongodb常用指令</h3>
<p>下面给一些常用的mongodb指令，其他的用到在积累。</p>
<pre><code>mongo     进入mongodb命令行
show dbs    显示数据库列表
use dbname    切换/创建dbname数据库，大小写敏感
show collections    显示数据库中的集合
db.集合名称.find({}) 查看某一个集合的所有数据
</code></pre>
<h3 id="pm2建立软连接" tabindex="-1"><a class="header-anchor" href="#pm2建立软连接" aria-hidden="true">#</a> pm2建立软连接</h3>
<p>安装pm2的时候，需要用到pm2指令，前提需要像Node和npm一样建立软连接，和node一样</p>
<p><code v-pre>ln -s /usr/local/src/node-v16.15.1-linux-x64/bin/pm2 /usr/local/bin</code></p>
<h3 id="本项目有关地址" tabindex="-1"><a class="header-anchor" href="#本项目有关地址" aria-hidden="true">#</a> 本项目有关地址</h3>
<ol>
<li><a href="https://juejin.cn/post/7111593698797846565#heading-24" target="_blank" rel="noopener noreferrer">记录第一次vue-nodejs-mongodb项目服务器部署<ExternalLinkIcon/></a></li>
<li><a href="https://janice143.github.io/myblog.github.io/" target="_blank" rel="noopener noreferrer">我的个人博客地址，里面偶尔会做一些笔记<ExternalLinkIcon/></a></li>
<li><a href="http://43.143.81.10:8080/home" target="_blank" rel="noopener noreferrer">本项目部署地址<ExternalLinkIcon/></a></li>
<li>[我的github项目</li>
</ol>
</div></template>


