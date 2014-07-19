---
layout: page
title: 欢迎
group: navigation
section: Home
---
大家好，我是Kane，物理学博士在读，这是我的个人网站。主要是一些学习笔记、读书笔记和闲时的感想，欢迎交流。

+-- {.section}
Study
========
[这里](/study.html)有我的一些笔记。

<ul class="posts">
  {% for post in site.categories.study limit:5 %}
    <li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
<!-- <a class="comments" href="{{ post.url }}#disqus_thread">{{ post.title }}</a> -->
</li>
{% endfor %}
<a href="/study.html">更多 &rarr;</a>
</ul>


=--

+-- {.section}
Miscellaneous
=====
[这里](/life.html)是闲时的一些随想。

<ul class="posts">
  {% for post in site.categories.life limit:5 %}
<!--不用英文，使日期显示更加一目了然。用string 是这样{{ post.date | date_to_string }}  -->
    <li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
<!--<a class="comments" href="{{ post.url }}#disqus_thread">{{ post.title }}</a> -->
</li>

  {% endfor %}
<a href="/life.html">更多 &rarr;</a>
</ul>

=--

关于本站：

极简主义是我的人生哲学，也是建这个网站的宗旨。所以选择了用静态页面这种方式，采用了这样一个模板，尽最大努力简化一些不必要的累赘，而只关注于内容本身。人生是一条很长的路，而我又是个懒人，希望这里是一个新起点，让我能更多一点的记录其中的绝望与希望、挣扎和成长。
