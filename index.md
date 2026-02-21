---
layout: default
title: Vitalnexus - My Realm
---

<div class="realm-hero">
  <div class="realm-hero-content">
    <div class="realm-title-wrapper">
      <h1 class="realm-title glitch" data-text="Look Into My Realm">
        <span class="realm-subtitle">▶ ENTER REALM ◀</span>
        Look Into My Realm
      </h1>
      <p class="realm-tagline">{{ site.description }}</p>
    </div>
    
    <div class="realm-stats">
      <div class="stat-box">
        <span class="stat-label">POSTS DISCOVERED</span>
        <span class="stat-value">{{ site.posts | size }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">REALM LEVEL</span>
        <span class="stat-value">∞</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">STATUS</span>
        <span class="stat-value pulse">ONLINE</span>
      </div>
    </div>
  </div>
  
  <div class="realm-grid-bg">
    <div class="grid-spot"></div>
    <div class="grid-spot"></div>
    <div class="grid-spot"></div>
    <div class="grid-spot"></div>
  </div>
</div>

<section class="quest-log">
  <div class="quest-log-header">
    <h2>📜 QUEST LOG - Active Missions</h2>
    <div class="header-accent"></div>
  </div>

  <ul class="quests-list">
    {% for post in site.posts %}
    <li class="quest-item" style="animation-delay: {{ forloop.index0 | times: 0.1 }}s">
      <div class="quest-marker">⚔️</div>
      <div class="quest-content">
        <h3 class="quest-title">
          <a href="{{ post.url | relative_url }}" class="quest-link">
            {{ post.title }}
          </a>
        </h3>
        <div class="quest-meta">
          <span class="quest-date">
            📅 <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%b %d, %Y" }}
            </time>
          </span>
          {% if post.author %}
          <span class="quest-author">👤 {{ post.author }}</span>
          {% endif %}
        </div>
        {% if post.excerpt %}
        <p class="quest-description">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
        {% endif %}
        <a href="{{ post.url | relative_url }}" class="quest-action">
          ACCEPT QUEST →
        </a>
      </div>
      <div class="quest-glow"></div>
    </li>
    {% endfor %}
  </ul>
  
  {% if site.posts.size == 0 %}
  <div class="no-quests">
    <p>🗺️ No quests discovered yet. Check back soon for new adventures!</p>
  </div>
  {% endif %}
</section>

<section class="realm-footer-banner">
  <p class="realm-message">✨ Welcome, brave explorer. The realm awaits. ✨</p>
</section>
