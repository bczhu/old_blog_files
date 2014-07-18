---
layout: page
title: 随想
section: 随想
group: navigation
---
这里主要是平时随意的一些文字。

##文章列表：

<ul class="posts">
  {% for post in site.categories.life %}
    <li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
<!--<a class="comments" href="{{ post.url }}#disqus_thread">{{ post.title }}</a> -->
<div id="description">
{{post.description}} 
 <ul class="tag_box inline">
<li>标签：
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
