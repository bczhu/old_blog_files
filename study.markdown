---
layout: page
title: 学习
section: 学习
group: navigation
---
这里主要是与物理、心理学、计算机有关的一些东西，包括读书笔记、感想等。越来越发现，做笔记是通向理解的很重要一步，自勉之。

##文章列表：

<ul class="posts">
  {% for post in site.categories.study %}
<li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
<!--<a class="comments" href="{{ post.url }}#disqus_thread">{{ post.title }}</a> -->
<div id="description">
{{post.description}} 
 <ul class="tag_box inline">
<li><i class="fa fa-tags"></i>：
</li>
      		{% assign tags_list = post.tags %}
      		{% include JB/tags_list %}
      	</ul>
<br/>
<br/>
</div>
</li>
  {% endfor %}
</ul>
