---
layout: default
title: Parallax
permalink: /parallax/
---

<div class="parallax-page">
  <!-- Parallax background layer -->
  <div class="parallax-bg"></div>
  
  <!-- Fixed content layer -->
  <div class="parallax-content">
    <div class="container parallax-container">

      <div class="section-header">
        <h1 class="section-title glitch" data-text="Parallax Zone">Parallax Zone</h1>
        <p class="section-subtitle">Scroll to experience the journey</p>
        <div class="section-divider"></div>
      </div>

      <ul class="post-list">
        {% for post in site.posts %}
        <li class="post-item parallax-post" data-categories="{{ post.categories | join: ' ' }}">
          <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
          <div class="post-info">
            <h3 class="post-item-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p class="post-excerpt">{{ post.excerpt | default: "" | strip_html | truncatewords: 50 }}</p>
            <div class="post-categories">
              {% for cat in post.categories %}
                <span class="category-tag">{{ cat }}</span>
              {% endfor %}
            </div>
          </div>
        </li>
        {% endfor %}
      </ul>

    </div>
  </div>
</div>
