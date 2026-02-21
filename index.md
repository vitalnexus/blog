---
layout: default
title: Look Into My Real
---

<div class="hero">
  <h1 class="hero-title glitch" data-text="Look Into My Real">Look Into My Real</h1>
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
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
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
        <svg viewBox="0 0 24 24"><path d="M21 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 10H4V8h16v8zM6.5 13.5l2-2.5 1.5 2 2.5-3 3 4H6.5z"/></svg>
        <h3 class="card-title">Gaming Hub</h3>
      </div>
      <p class="post-excerpt">Steam stats, game library, and everything from my 12+ years of gaming.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/gaming' | relative_url }}">Enter the hub &rarr;</a></p>
    </div>
    <div class="card">
      <div class="card-header">
        <svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 0 16 7.96 7.96 0 0 0 6.93-4H17.65zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-1 3v4l3.5 2.1.75-1.23L12.5 12.5V9H11z"/></svg>
        <h3 class="card-title">AI Games</h3>
      </div>
      <p class="post-excerpt">Playable retro games built with AI. Defender, Steve's Gate, and more to come.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/games' | relative_url }}">Play now &rarr;</a></p>
    </div>
    <div class="card">
      <div class="card-header">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        <h3 class="card-title">About</h3>
      </div>
      <p class="post-excerpt">Who is GAM3RGAWD? Lifelong gamer, cave dweller, and void explorer.</p>
      <p style="margin-top: 1rem;"><a href="{{ '/about' | relative_url }}">Learn more &rarr;</a></p>
    </div>
  </div>

</div>
