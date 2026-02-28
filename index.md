---
layout: default
title: Look Into My Realm
---

<div class="hero">
  <h1 class="hero-title glitch" data-text="Look Into My Realm">Look Into My Realm</h1>
  <p class="hero-tagline">Gaming / Tech / Adventures from the void</p>
</div>

<div class="container">

  <div class="section-header">
    <h2 class="section-title">Latest Transmissions</h2>
    <p class="section-subtitle">Dispatches from the cave</p>
    <div class="section-divider"></div>
  </div>

  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-item">
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

  <div class="grid grid-3" style="margin-top: 3rem;">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Gaming Hub</h3>
      </div>
      <p class="post-excerpt">Steam stats, game library, and everything from my 12+ years of gaming.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/gaming' | relative_url }}">Enter the hub &rarr;</a></p>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">AI Games</h3>
      </div>
      <p class="post-excerpt">Playable retro games built with AI. Defender, Steve's Gate, and more to come.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/games' | relative_url }}">Play now &rarr;</a></p>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Game Logs</h3>
      </div>
      <p class="post-excerpt">Session logs, run notes, and deep dives into what I've been playing. Launch sequence incoming.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/under-construction' | relative_url }}">View logs &rarr;</a></p>
    </div>
  </div>

</div>
