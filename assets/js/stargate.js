/* ============================================
   STEVE'S GATE - Evolved Defender
   Arrow keys + Space + Enter to warp
   ============================================ */
var stargateGame = (function () {
  'use strict';

  var canvas, ctx;
  var W = 800, H = 400;
  var running = false, animId = null, gameOver = false;
  var score = 0, lives = 3, wave = 1;

  var ship = { x: 100, y: 200, w: 32, h: 16, speed: 5, dir: 1 };
  var worldX = 0;
  var WORLD_W = 5000;

  var bullets = [];
  var enemies = [];
  var humans = [];
  var particles = [];
  var stars = [];
  var terrain = [];
  var gates = [];
  var powerups = [];

  var keys = {};
  var shootCooldown = 0;
  var warpCooldown = 0;
  var warpFlash = 0;
  var smartBombs = 3;

  function init() {
    canvas = document.getElementById('stargateCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;

    generateTerrain();
    generateStars();

    document.addEventListener('keydown', function (e) {
      keys[e.key] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'].indexOf(e.key) !== -1) {
        e.preventDefault();
      }
    });
    document.addEventListener('keyup', function (e) { keys[e.key] = false; });

    drawTitle();
  }

  function generateTerrain() {
    terrain = [];
    var y = H - 60;
    for (var x = 0; x < WORLD_W; x += 8) {
      y += (Math.random() - 0.5) * 12;
      if (y > H - 25) y = H - 25;
      if (y < H - 110) y = H - 110;
      terrain.push({ x: x, y: y });
    }
  }

  function generateStars() {
    stars = [];
    for (var i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * WORLD_W,
        y: Math.random() * (H - 130),
        size: Math.random() * 2 + 0.5,
        bright: Math.random()
      });
    }
  }

  function spawnGates() {
    gates = [];
    for (var i = 0; i < 3; i++) {
      gates.push({
        x: 800 + Math.random() * (WORLD_W - 1600),
        y: 80 + Math.random() * 100,
        w: 20, h: 40,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function spawnWave() {
    enemies = [];
    var count = 5 + wave * 3;
    for (var i = 0; i < count; i++) {
      var type = 'lander';
      var r = Math.random();
      if (wave >= 2 && r > 0.7) type = 'bomber';
      if (wave >= 3 && r > 0.85) type = 'pod';

      enemies.push({
        x: Math.random() * WORLD_W,
        y: 30 + Math.random() * 160,
        w: 16, h: 16,
        speed: 1 + wave * 0.25,
        type: type,
        targetHuman: null,
        carrying: false,
        alive: true,
        timer: Math.random() * 200,
        shootTimer: 100 + Math.random() * 200
      });
    }
  }

  function spawnHumans() {
    humans = [];
    for (var i = 0; i < 10; i++) {
      humans.push({
        x: 200 + Math.random() * (WORLD_W - 400),
        y: H - 70,
        w: 6, h: 12,
        alive: true,
        carried: false,
        falling: false,
        vy: 0
      });
    }
  }

  function drawTitle() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Gate effect
    ctx.strokeStyle = '#ff00ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(W / 2, H / 2 - 40, 80, 30, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#00FF41';
    ctx.beginPath();
    ctx.ellipse(W / 2, H / 2 - 40, 70, 25, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#00FF41';
    ctx.font = 'bold 36px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText("STEVE'S GATE", W / 2, H / 2 + 20);
    ctx.font = '14px Courier New';
    ctx.fillStyle = '#4a7a4a';
    ctx.fillText('Arrows + Space + Enter to warp', W / 2, H / 2 + 50);
    ctx.fillText('Press START to play', W / 2, H / 2 + 75);
    ctx.textAlign = 'left';
  }

  function start() {
    if (running) return;
    score = 0; lives = 3; wave = 1; gameOver = false;
    smartBombs = 3; warpCooldown = 0; warpFlash = 0;
    ship.x = 100; ship.y = 200; ship.dir = 1;
    worldX = 0;
    bullets = []; particles = []; powerups = [];
    spawnHumans();
    spawnWave();
    spawnGates();
    running = true;
    loop();
  }

  function reset() {
    running = false;
    gameOver = false;
    if (animId) cancelAnimationFrame(animId);
    animId = null;
    drawTitle();
  }

  function warpToGate() {
    if (warpCooldown > 0) return;

    // Find human in most danger
    var bestHuman = null;
    var bestDist = Infinity;
    for (var i = 0; i < enemies.length; i++) {
      var e = enemies[i];
      if (!e.alive || e.targetHuman === null) continue;
      var h = humans[e.targetHuman];
      if (!h || !h.alive) continue;
      var dx = e.x - h.x;
      var dy = e.y - h.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < bestDist) {
        bestDist = dist;
        bestHuman = e.targetHuman;
      }
    }

    if (bestHuman !== null && humans[bestHuman]) {
      worldX = humans[bestHuman].x - ship.x;
      if (worldX < 0) worldX += WORLD_W;
      warpFlash = 15;
      warpCooldown = 120;
      score += 100;
    }
  }

  function update() {
    if (gameOver) return;

    // Input
    if (keys['ArrowUp'] && ship.y > 20) ship.y -= ship.speed;
    if (keys['ArrowDown'] && ship.y < H - 80) ship.y += ship.speed;
    if (keys['ArrowRight']) { worldX += ship.speed + 3; ship.dir = 1; }
    if (keys['ArrowLeft']) { worldX -= ship.speed + 3; ship.dir = -1; }

    if (worldX < 0) worldX += WORLD_W;
    if (worldX >= WORLD_W) worldX -= WORLD_W;

    if (warpCooldown > 0) warpCooldown--;
    if (warpFlash > 0) warpFlash--;

    // Warp (Enter)
    if (keys['Enter']) {
      keys['Enter'] = false;
      warpToGate();
    }

    // Shoot
    if (shootCooldown > 0) shootCooldown--;
    if (keys[' '] && shootCooldown <= 0) {
      bullets.push({
        x: ship.x + worldX + (ship.dir === 1 ? ship.w : 0),
        y: ship.y + ship.h / 2,
        speed: 10 * ship.dir,
        life: 50
      });
      shootCooldown = 6;
    }

    // Update bullets
    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].x += bullets[i].speed;
      bullets[i].life--;
      if (bullets[i].life <= 0) bullets.splice(i, 1);
    }

    // Update gates
    for (var i = 0; i < gates.length; i++) {
      gates[i].pulse += 0.05;
    }

    // Update enemies
    for (var i = enemies.length - 1; i >= 0; i--) {
      var e = enemies[i];
      if (!e.alive) continue;
      e.timer++;

      if (e.type === 'lander') {
        // Same lander AI as defender
        if (!e.carrying && e.targetHuman === null && e.timer > 80) {
          for (var j = 0; j < humans.length; j++) {
            if (humans[j].alive && !humans[j].carried) {
              e.targetHuman = j;
              break;
            }
          }
        }

        if (e.targetHuman !== null && humans[e.targetHuman]) {
          var h = humans[e.targetHuman];
          if (!h.alive || h.carried) { e.targetHuman = null; }
          else {
            if (e.x < h.x) e.x += e.speed;
            else if (e.x > h.x) e.x -= e.speed;
            if (e.y < h.y - 20) e.y += e.speed * 0.5;
            else if (e.y > h.y - 15) e.y -= e.speed * 0.3;

            if (Math.abs(e.x - h.x) < 12 && Math.abs(e.y - (h.y - 18)) < 12) {
              e.carrying = true;
              h.carried = true;
            }
          }
        } else if (!e.carrying) {
          e.x += Math.sin(e.timer * 0.02) * e.speed;
          e.y += Math.cos(e.timer * 0.03) * e.speed * 0.3;
        }

        if (e.carrying && e.targetHuman !== null && humans[e.targetHuman]) {
          e.y -= e.speed * 0.7;
          humans[e.targetHuman].x = e.x;
          humans[e.targetHuman].y = e.y + 18;
          if (e.y < -20) {
            humans[e.targetHuman].alive = false;
            e.carrying = false;
            e.targetHuman = null;
          }
        }
      } else if (e.type === 'bomber') {
        // Bombers fly horizontally and drop bombs
        e.x += e.speed * 1.5;
        e.y += Math.sin(e.timer * 0.04) * 0.5;
        if (e.x > WORLD_W) e.x -= WORLD_W;
      } else if (e.type === 'pod') {
        // Pods move slowly, split into swarmers when hit
        e.x += Math.sin(e.timer * 0.01) * e.speed * 0.5;
        e.y += Math.cos(e.timer * 0.015) * e.speed * 0.3;
      }

      // Bullet collision
      for (var b = bullets.length - 1; b >= 0; b--) {
        var bx = bullets[b].x - e.x;
        var by = bullets[b].y - e.y;
        if (Math.abs(bx) < e.w && Math.abs(by) < e.h) {
          e.alive = false;
          score += e.type === 'pod' ? 300 : e.type === 'bomber' ? 250 : 150;
          spawnExplosion(e.x - worldX, e.y);
          bullets.splice(b, 1);

          // Pod splits into 3 swarmers
          if (e.type === 'pod') {
            for (var s = 0; s < 3; s++) {
              enemies.push({
                x: e.x + (Math.random() - 0.5) * 30,
                y: e.y + (Math.random() - 0.5) * 30,
                w: 10, h: 10,
                speed: 2 + wave * 0.3,
                type: 'swarmer',
                targetHuman: null,
                carrying: false,
                alive: true,
                timer: 0,
                shootTimer: 999
              });
            }
          }

          if (e.carrying && e.targetHuman !== null && humans[e.targetHuman]) {
            humans[e.targetHuman].carried = false;
            humans[e.targetHuman].falling = true;
            humans[e.targetHuman].vy = 0;
          }
          break;
        }
      }

      // Swarmer chase player
      if (e.type === 'swarmer' && e.alive) {
        var sx = ship.x + worldX;
        if (e.x < sx) e.x += e.speed * 1.2;
        else e.x -= e.speed * 1.2;
        if (e.y < ship.y) e.y += e.speed * 0.8;
        else e.y -= e.speed * 0.8;
      }

      // Ship collision
      var shipWorldX = ship.x + worldX;
      if (e.alive && Math.abs(e.x - shipWorldX) < 20 && Math.abs(e.y - ship.y) < 16) {
        lives--;
        spawnExplosion(ship.x, ship.y);
        ship.x = 100; ship.y = 200;
        if (lives <= 0) gameOver = true;
      }
    }

    // Update falling humans
    for (var i = 0; i < humans.length; i++) {
      var h = humans[i];
      if (h.falling && h.alive) {
        h.vy += 0.15;
        h.y += h.vy;
        if (h.y >= H - 70) {
          h.y = H - 70;
          h.falling = false;
          h.vy = 0;
        }
      }
    }

    // Particles
    for (var i = particles.length - 1; i >= 0; i--) {
      particles[i].x += particles[i].vx;
      particles[i].y += particles[i].vy;
      particles[i].life--;
      if (particles[i].life <= 0) particles.splice(i, 1);
    }

    // Wave clear
    var allDead = true;
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].alive) { allDead = false; break; }
    }
    if (allDead) {
      wave++;
      spawnWave();
      if (wave % 2 === 0) spawnGates();
    }
  }

  function spawnExplosion(x, y) {
    for (var i = 0; i < 15; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 7,
        vy: (Math.random() - 0.5) * 7,
        life: 20 + Math.random() * 20,
        color: ['#00FF41', '#00e5ff', '#ff00ff', '#ffd700'][Math.floor(Math.random() * 4)]
      });
    }
  }

  function draw() {
    // Warp flash
    if (warpFlash > 0) {
      ctx.fillStyle = 'rgba(0, 255, 65, ' + (warpFlash / 15 * 0.3) + ')';
      ctx.fillRect(0, 0, W, H);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
    }

    // Stars
    ctx.fillStyle = '#fff';
    for (var i = 0; i < stars.length; i++) {
      var sx = (stars[i].x - worldX * 0.3) % WORLD_W;
      if (sx < 0) sx += WORLD_W;
      if (sx < W) {
        ctx.globalAlpha = 0.3 + stars[i].bright * 0.7;
        ctx.fillRect(sx, stars[i].y, stars[i].size, stars[i].size);
      }
    }
    ctx.globalAlpha = 1;

    // Terrain
    ctx.strokeStyle = '#00FF41';
    ctx.lineWidth = 1;
    ctx.beginPath();
    var started = false;
    for (var i = 0; i < terrain.length; i++) {
      var tx = terrain[i].x - worldX;
      if (tx < -WORLD_W / 2) tx += WORLD_W;
      if (tx > WORLD_W / 2) tx -= WORLD_W;
      if (tx >= -10 && tx <= W + 10) {
        if (!started) { ctx.moveTo(tx, terrain[i].y); started = true; }
        else ctx.lineTo(tx, terrain[i].y);
      }
    }
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 255, 65, 0.02)';
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.fill();

    // Gates
    for (var i = 0; i < gates.length; i++) {
      var g = gates[i];
      var gx = g.x - worldX;
      if (gx < -WORLD_W / 2) gx += WORLD_W;
      if (gx > WORLD_W / 2) gx -= WORLD_W;
      if (gx >= -30 && gx <= W + 30) {
        var pulse = Math.sin(g.pulse) * 0.3 + 0.7;
        ctx.strokeStyle = 'rgba(255, 0, 255, ' + pulse + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(gx, g.y, g.w, g.h, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(0, 255, 65, ' + (pulse * 0.5) + ')';
        ctx.beginPath();
        ctx.ellipse(gx, g.y, g.w - 5, g.h - 8, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      }
    }

    // Humans
    for (var i = 0; i < humans.length; i++) {
      var h = humans[i];
      if (!h.alive) continue;
      var hx = h.x - worldX;
      if (hx < -WORLD_W / 2) hx += WORLD_W;
      if (hx > WORLD_W / 2) hx -= WORLD_W;
      if (hx >= -20 && hx <= W + 20) {
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(hx - 2, h.y - 12, 5, 8);
        ctx.fillRect(hx - 1, h.y - 14, 3, 3);
        ctx.fillRect(hx - 3, h.y - 8, 2, 4);
        ctx.fillRect(hx + 2, h.y - 8, 2, 4);
        ctx.fillRect(hx - 1, h.y - 4, 2, 4);
        ctx.fillRect(hx + 1, h.y - 4, 2, 4);
      }
    }

    // Enemies
    for (var i = 0; i < enemies.length; i++) {
      var e = enemies[i];
      if (!e.alive) continue;
      var ex = e.x - worldX;
      if (ex < -WORLD_W / 2) ex += WORLD_W;
      if (ex > WORLD_W / 2) ex -= WORLD_W;
      if (ex >= -20 && ex <= W + 20) {
        if (e.type === 'lander') {
          ctx.fillStyle = '#ff0040';
          ctx.beginPath();
          ctx.moveTo(ex, e.y - 8);
          ctx.lineTo(ex + 8, e.y);
          ctx.lineTo(ex, e.y + 8);
          ctx.lineTo(ex - 8, e.y);
          ctx.closePath();
          ctx.fill();
        } else if (e.type === 'bomber') {
          ctx.fillStyle = '#ffd700';
          ctx.fillRect(ex - 8, e.y - 4, 16, 8);
          ctx.fillRect(ex - 4, e.y - 8, 8, 4);
        } else if (e.type === 'pod') {
          ctx.fillStyle = '#ff00ff';
          ctx.beginPath();
          ctx.arc(ex, e.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#000';
          ctx.beginPath();
          ctx.arc(ex, e.y, 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (e.type === 'swarmer') {
          ctx.fillStyle = '#ff6600';
          ctx.fillRect(ex - 4, e.y - 4, 8, 8);
        }
      }
    }

    // Player ship - more detailed
    ctx.fillStyle = '#00FF41';
    ctx.beginPath();
    if (ship.dir === 1) {
      ctx.moveTo(ship.x + ship.w, ship.y + ship.h / 2);
      ctx.lineTo(ship.x + 5, ship.y);
      ctx.lineTo(ship.x, ship.y + 4);
      ctx.lineTo(ship.x + 5, ship.y + ship.h / 2);
      ctx.lineTo(ship.x, ship.y + ship.h - 4);
      ctx.lineTo(ship.x + 5, ship.y + ship.h);
    } else {
      ctx.moveTo(ship.x, ship.y + ship.h / 2);
      ctx.lineTo(ship.x + ship.w - 5, ship.y);
      ctx.lineTo(ship.x + ship.w, ship.y + 4);
      ctx.lineTo(ship.x + ship.w - 5, ship.y + ship.h / 2);
      ctx.lineTo(ship.x + ship.w, ship.y + ship.h - 4);
      ctx.lineTo(ship.x + ship.w - 5, ship.y + ship.h);
    }
    ctx.closePath();
    ctx.fill();

    // Engine trail
    var trailX = ship.dir === 1 ? ship.x - 8 : ship.x + ship.w + 8;
    ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
    ctx.fillRect(trailX - 4, ship.y + ship.h / 2 - 2, 8, 4);
    ctx.fillStyle = 'rgba(0, 229, 255, 0.3)';
    ctx.fillRect(trailX - 8, ship.y + ship.h / 2 - 1, 6, 2);

    // Bullets
    ctx.fillStyle = '#00FF41';
    for (var i = 0; i < bullets.length; i++) {
      var bx = bullets[i].x - worldX;
      if (bx >= -10 && bx <= W + 10) {
        ctx.fillRect(bx, bullets[i].y - 1, 10, 2);
        ctx.fillStyle = 'rgba(0, 255, 65, 0.3)';
        ctx.fillRect(bx - 4, bullets[i].y - 1, 4, 2);
        ctx.fillStyle = '#00FF41';
      }
    }

    // Particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / 40;
      ctx.fillRect(p.x, p.y, 3, 3);
    }
    ctx.globalAlpha = 1;

    // HUD
    ctx.fillStyle = '#00FF41';
    ctx.font = '14px Courier New';
    ctx.textAlign = 'left';
    ctx.fillText('SCORE: ' + score, 10, 20);
    ctx.fillText('WAVE: ' + wave, 10, 38);

    ctx.textAlign = 'right';
    ctx.fillText('LIVES: ' + lives, W - 10, 20);

    // Warp cooldown indicator
    if (warpCooldown > 0) {
      ctx.fillStyle = 'rgba(255, 0, 255, 0.5)';
      ctx.fillText('WARP: ' + Math.ceil(warpCooldown / 60) + 's', W - 10, 38);
    } else {
      ctx.fillStyle = '#ff00ff';
      ctx.fillText('WARP: READY', W - 10, 38);
    }

    // Minimap
    drawMinimap();

    if (gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#ff0040';
      ctx.font = 'bold 32px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', W / 2, H / 2 - 10);
      ctx.fillStyle = '#00FF41';
      ctx.font = '14px Courier New';
      ctx.fillText('Score: ' + score + ' / Wave: ' + wave, W / 2, H / 2 + 20);
      ctx.fillText('Press RESET to try again', W / 2, H / 2 + 45);
      ctx.textAlign = 'left';
      running = false;
    }
  }

  function drawMinimap() {
    var mw = 180, mh = 16, mx = W / 2 - mw / 2, my = 6;
    ctx.fillStyle = 'rgba(0, 255, 65, 0.1)';
    ctx.fillRect(mx, my, mw, mh);
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.3)';
    ctx.strokeRect(mx, my, mw, mh);

    var px = (ship.x + worldX) / WORLD_W * mw;
    ctx.fillStyle = '#00FF41';
    ctx.fillRect(mx + px - 1, my + 2, 3, mh - 4);

    ctx.fillStyle = '#ff0040';
    for (var i = 0; i < enemies.length; i++) {
      if (!enemies[i].alive) continue;
      var ex = enemies[i].x / WORLD_W * mw;
      ctx.fillRect(mx + ex, my + 4, 2, mh - 8);
    }

    ctx.fillStyle = '#00e5ff';
    for (var i = 0; i < humans.length; i++) {
      if (!humans[i].alive) continue;
      var hx = humans[i].x / WORLD_W * mw;
      ctx.fillRect(mx + hx, my + mh - 5, 1, 3);
    }

    // Gates on minimap
    ctx.fillStyle = '#ff00ff';
    for (var i = 0; i < gates.length; i++) {
      var gx = gates[i].x / WORLD_W * mw;
      ctx.fillRect(mx + gx - 1, my + 1, 3, mh - 2);
    }
  }

  function loop() {
    if (!running) return;
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { start: start, reset: reset };
})();
