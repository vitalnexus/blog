---
layout: default
title: Posts
permalink: /posts/
---

<div class="container">

  <div class="section-header">
    <h1 class="section-title glitch" data-text="All Posts">All Posts</h1>
    <p class="section-subtitle">Everything from the cave</p>
    <div class="section-divider"></div>
  </div>

  <div class="category-filters">
    <button class="category-btn active" onclick="filterPosts('all')">All</button>
    <button class="category-btn" onclick="filterPosts('reviews')">Reviews</button>
    <button class="category-btn" onclick="filterPosts('thoughts')">Thoughts</button>
    <button class="category-btn" onclick="filterPosts('technology')">Technology</button>
    <button class="category-btn" onclick="filterPosts('gaming')">Gaming</button>
    <button class="category-btn" onclick="filterPosts('space-travel')">Space Travel</button>
    <button class="category-btn" onclick="filterPosts('ai-content')">AI Content</button>
  </div>

  <ul class="post-list" id="postList">
    {% for post in site.posts %}
    <li class="post-item" data-categories="{{ post.categories | join: ' ' }}">
      <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
      <div class="post-info">
        <h3 class="post-item-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-excerpt">{{ post.excerpt | default: "" | strip_html | truncatewords: 30 }}</p>
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

<script>
function filterPosts(category) {
  var items = document.querySelectorAll('.post-item');
  var buttons = document.querySelectorAll('.category-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  event.target.classList.add('active');
  for (var i = 0; i < items.length; i++) {
    if (category === 'all') {
      items[i].style.display = '';
    } else {
      var cats = items[i].getAttribute('data-categories');
      items[i].style.display = cats && cats.indexOf(category) !== -1 ? '' : 'none';
    }
  }
}
</script>
