---
layout: default
title: Live Reviews
permalink: /live-review/
---

<div class="container">

  <div class="section-header">
    <h1 class="section-title glitch" data-text="Live Reviews">Live Reviews</h1>
    <p class="section-subtitle">Opinions forged in real-time through the fire of gameplay</p>
    <div class="section-divider"></div>
  </div>

  <ul class="post-list" id="reviewList">
    {% for post in site.posts %}
      {% if post.categories contains "reviews" %}
      <li class="post-item">
        <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
        <div class="post-info">
          <h3 class="post-item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-excerpt">{{ post.excerpt | default: "" | strip_html | truncatewords: 40 }}</p>
          <div class="post-categories">
            {% for cat in post.categories %}
              <span class="category-tag">{{ cat }}</span>
            {% endfor %}
          </div>
        </div>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

  {% assign review_posts = site.posts | where_exp: "post", "post.categories contains 'reviews'" %}
  {% if review_posts.size == 0 %}
  <div class="card" style="text-align: center; padding: 2rem;">
    <p style="color: var(--text-dim);">No live reviews yet. Check back soon for deep dives into games that capture the soul.</p>
  </div>
  {% endif %}

</div>
