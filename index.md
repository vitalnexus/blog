---
layout: default
title: Look Into My Realm
---

<div class="hero">
  <h1 class="hero-title glitch" data-text="Look Into My Realm">Look Into My Realm</h1>
  <p class="hero-tagline">Gaming / Tech / Adventures from the void</p>
</div>

<div class="container">

  <div class="card" style="margin-bottom: 3rem;">
    <div class="card-header">
      <h3 class="card-title">Welcome</h3>
    </div>
    <p>Dark mode isn't a preference for me — it's a way of life. Every device, every app, every browser: dark, always. So when it came time to build this site, I still wanted to offer a light mode option, but I also wanted it to actually mean something. Hit the sun icon in the top right to switch to light mode, and you'll notice something: the moment you start scrolling, a sun blazes into view and makes the content nearly impossible to read — just like real sunlight on a screen. Stop scrolling, and the text becomes readable again. It's a small, deliberate design choice that captures exactly how light mode makes me feel. There's more to say about the design philosophy behind this site, and I'll get into that soon.</p>
  </div>

  <div class="grid grid-3" style="margin-bottom: 3rem;">
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

</div>
