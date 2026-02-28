---
layout: default
title: AI Games
permalink: /games/
---

<!-- Mobile warning modal -->
<div id="mobile-warning-overlay" style="
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
">
  <div id="mobile-warning-dialog" style="
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 10px;
    max-width: 340px;
    width: 100%;
    padding: 2rem 1.75rem 1.5rem;
    text-align: center;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  ">
    <p style="
      color: var(--green);
      font-size: 1rem;
      line-height: 1.6;
      margin: 0 0 0.75rem;
    ">Sorry, AI Games only playable with a keyboard on a desktop.</p>
    <p id="mobile-warning-countdown" style="
      color: var(--text-dim);
      font-size: 0.8rem;
      margin: 0 0 1.25rem;
    ">Returning to Home in <span id="mobile-warning-secs">5</span>s&hellip;</p>
    <button id="mobile-warning-ok" style="
      background: var(--green);
      color: #000;
      border: none;
      border-radius: 5px;
      padding: 0.6rem 2rem;
      font-size: 0.9rem;
      font-weight: bold;
      cursor: pointer;
      letter-spacing: 0.05em;
    ">OK</button>
  </div>
</div>

<script>
  (function () {
    if (!window.matchMedia('(pointer: coarse)').matches) return;

    var homeUrl = '{{ "/" | relative_url }}';
    var overlay  = document.getElementById('mobile-warning-overlay');
    var dialog   = document.getElementById('mobile-warning-dialog');
    var secsEl   = document.getElementById('mobile-warning-secs');
    var secs     = 5;
    var timer;

    function goHome() {
      clearInterval(timer);
      window.location.href = homeUrl;
    }

    overlay.style.display = 'flex';

    // Countdown tick
    timer = setInterval(function () {
      secs -= 1;
      secsEl.textContent = secs;
      if (secs <= 0) goHome();
    }, 1000);

    // OK button
    document.getElementById('mobile-warning-ok').addEventListener('click', goHome);

    // Backdrop tap (not the inner dialog)
    overlay.addEventListener('click', function (e) {
      if (!dialog.contains(e.target)) goHome();
    });
  })();
</script>

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
