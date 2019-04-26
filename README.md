
## layout class

### 常见class关键词

布局类：header, footer, container, main, content, aside, page, section
包裹类：wrap, inner
区块类：region, block, box
结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
列表类：list, item, field
主次类：primary, secondary, sub, minor
大小类：s, m, l, xl, large, small
状态类：active, current, checked, hover, fail, success, warn, error, on, off
导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
星级类：rate, star
分割类：group, seperate, divider
等分类：full, half, third, quarter
表格类：table, tr, td, cell, row
图片类：img, thumbnail, original, album, gallery
语言类：cn, en
论坛类：forum, bbs, topic, post
方向类：up, down, left, right
其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading...
有了关键词之后，我们先来制定一些简单的规则。

### 制定简单规则

以中划线连接，如.item-img
使用两个中划线表示特殊化，如.item-img.item-img--small表示在.item-img的基础上特殊化
状态类直接使用单词，参考上面的关键词，如.active, .checked
图标以icon-为前缀（字体图标采用.icon-font.i-name方式命名）。
模块采用关键词命名，如.slide, .modal, .tips, .tabs，特殊化采用上面两个中划线表示，如.imgslide--full, .modal--pay, .tips--up, .tabs--simple
js操作的类统一加上js-前缀
不要超过四个class组合使用，如.a.b.c.d

### 修饰关键词

以header为例，我们可以添加前缀表示不同的header，如区块头部.block-hd(hd为header简写)，modal头部.modal-hd，文章头部.article-hd。
同样标题也可以分为，页面标题.page-tt(title的简写)，区块标题.block-tt等。
同样，这给我们提出了第二个问题，如果要特殊化某个class该怎么办？

### 特殊化class

以上面的tt为例，大概有三种办法：
第一种犯法：直接修改class，将.page-tt修改成.page-user-tt(可以采用scss的%先定义共用的代码)。
第二种办法： 追加class特殊化，根据我们上面定义的规则，在.page-tt上追加一个class成为.page-tt.page-tt--user，注意.page-tt--user不是一个独立的class，它使基于.page-tt这个基础上的。
第三种办法： 使用父类，给一个范围，于是形成.page-user .page-tt。
一般我们使用的是第二种和第三种办法，因为这两种都有共同的.page-tt，可以比较方便控制一些基础共有的样式。