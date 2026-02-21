---
layout: default
title: Vitalik's Blog Clone
---

<div class="index-header">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
</div>

<ul class="posts-list">
  {% for post in site.posts %}
  <li class="post-item">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <div class="post-item-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%B %d, %Y" }}
      </time>
      {% if post.author %}
      <span class="post-author">by {{ post.author }}</span>
      {% endif %}
    </div>
    {% if post.excerpt %}
    <div class="post-item-excerpt">
      {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
    </div>
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
  </li>
  {% endfor %}
</ul>
