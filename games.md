---
layout: default
title: AI Games
permalink: /games/
---

<div class="container">

  <div class="hero" style="padding: 3rem 1rem 2rem;">
    <h1 class="hero-title glitch" data-text="AI Games">AI Games</h1>
    <p class="hero-tagline">Retro games built with AI -- playable right here</p>
  </div>

  <div class="section-header">
    <h2 class="section-title">Defender</h2>
    <p class="section-subtitle">Classic 1981 arcade action -- defend the humans</p>
    <div class="section-divider"></div>
  </div>

  <div class="game-embed">
    <div class="game-canvas-wrapper">
      <canvas id="defenderCanvas" width="800" height="400"></canvas>
    </div>
    <div class="game-controls">
      <button class="game-btn" onclick="defenderGame.start()">Start</button>
      <button class="game-btn" onclick="defenderGame.reset()">Reset</button>
      <span style="color: var(--text-dim); font-size: 0.75rem; align-self: center;">Arrow keys to move / Space to shoot</span>
    </div>
  </div>

  <div class="card" style="margin-bottom: 3rem;">
    <p style="color: var(--text-dim); font-size: 0.85rem;">Based on the 1981 Williams Electronics arcade classic. Fly your ship across the landscape, shoot the alien landers before they abduct the humans below. Arrow keys to move, space to fire.</p>
  </div>

  <div class="section-header">
    <h2 class="section-title">Steve's Gate</h2>
    <p class="section-subtitle">An evolved Defender -- warp through the stargate</p>
    <div class="section-divider"></div>
  </div>

  <div class="game-embed">
    <div class="game-canvas-wrapper">
      <canvas id="stargateCanvas" width="800" height="400"></canvas>
    </div>
    <div class="game-controls">
      <button class="game-btn" onclick="stargateGame.start()">Start</button>
      <button class="game-btn" onclick="stargateGame.reset()">Reset</button>
      <span style="color: var(--text-dim); font-size: 0.75rem; align-self: center;">Arrows / Space / Enter to warp</span>
    </div>
  </div>

  <div class="card">
    <p style="color: var(--text-dim); font-size: 0.85rem;">Inspired by the 1981 Stargate sequel (aka Defender II). Same controls as Defender plus Enter to activate the stargate warp. Warp to where humans are in danger. More enemy types, faster action.</p>
  </div>

</div>

<script src="{{ '/assets/js/defender.js' | relative_url }}"></script>
<script src="{{ '/assets/js/stargate.js' | relative_url }}"></script>
