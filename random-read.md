---
layout: default
title: Random Read
permalink: /random-read/
---

<div class="rr-page">

  <!-- Slowly scrolling background -->
  <div class="rr-bg"></div>

  <!-- Fixed reading window -->
  <div class="rr-window">
    <div class="rr-window-header">
      <div class="rr-header-top">
        <span class="rr-label">// RANDOM READ</span>
        <span class="rr-meta">
          <span class="rr-date" id="rrDate"></span>
          <span class="rr-categories" id="rrCategories"></span>
        </span>
        <a href="#" class="rr-full-link" id="rrFullLink">Read Full Post →</a>
      </div>
      <div class="rr-header-title-bar">
        <span class="rr-header-title" id="rrHeaderTitle">Loading...</span>
      </div>
    </div>

    <div class="rr-content-mask">
      <div class="rr-content" id="rrContent">
        <h2 class="rr-title" id="rrTitle">Loading...</h2>
        <div class="rr-body" id="rrBody"></div>
        <!-- Spacer so text can fully scroll out -->
        <div class="rr-end-spacer"></div>
      </div>
    </div>

    <div class="rr-window-footer">
      <span class="rr-scroll-hint">↑ auto-scrolling</span>
      <button class="rr-shuffle" id="rrShuffle" type="button">⟳ New Post</button>
    </div>
  </div>

  <!-- Post data injected by Jekyll -->
  <script id="rrPostsData" type="application/json">
    [
      {% for post in site.posts %}
      {
        "title": {{ post.title | jsonify }},
        "url": "{{ post.url | relative_url }}",
        "content": {{ post.content | strip_html | jsonify }},
        "date": "{{ post.date | date: '%b %d, %Y' }}",
        "categories": {{ post.categories | jsonify }}
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  </script>

</div>
