/* ============================================
   DEFENDER - Classic Arcade Game
   Arrow keys to move, Space to shoot
   ============================================ */
var defenderGame = (function () {
  'use strict';

  var canvas, ctx;
  var W = 800, H = 400;
  var running = false, animId = null, gameOver = false;
  var score = 0, lives = 3, wave = 1;

  // Player ship
  var ship = { x: 100, y: 200, w: 30, h: 14, speed: 4, dir: 1 };

  // World scrolling
  var worldX = 0;
  var WORLD_W = 4000;

  // Entities
  var bullets = [];
  var enemies = [];
  var humans = [];
  var particles = [];
  var stars = [];

  // Input
  var keys = {};

  // Terrain
  var terrain = [];

  function init() {
    canvas = document.getElementById('defenderCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;

    generateTerrain();
    generateStars();

    document.addEventListener('keydown', function (e) {
      keys[e.key] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].indexOf(e.key) !== -1) {
        e.preventDefault();
      }
    });
    document.addEventListener('keyup', function (e) {
      keys[e.key] = false;
    });

    drawTitle();
  }

  function generateTerrain() {
    terrain = [];
    var y = H - 60;
    for (var x = 0; x < WORLD_W; x += 8) {
      y += (Math.random() - 0.5) * 10;
      if (y > H - 30) y = H - 30;
      if (y < H - 100) y = H - 100;
      terrain.push({ x: x, y: y });
    }
  }

  function generateStars() {
    stars = [];
    for (var i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * WORLD_W,
        y: Math.random() * (H - 120),
        size: Math.random() * 1.5 + 0.5,
        bright: Math.random()
      });
    }
  }

  function spawnWave() {
    enemies = [];
    var count = 4 + wave * 2;
    for (var i = 0; i < count; i++) {
      enemies.push({
        x: Math.random() * WORLD_W,
        y: 40 + Math.random() * 150,
        w: 16, h: 16,
        speed: 0.8 + wave * 0.2,
        type: 'lander',
        targetHuman: null,
        carrying: false,
        alive: true,
        timer: Math.random() * 200
      });
    }
  }

  function spawnHumans() {
    humans = [];
    for (var i = 0; i < 8; i++) {
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
    ctx.fillStyle = '#00FF41';
    ctx.font = 'bold 36px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText('DEFENDER', W / 2, H / 2 - 30);
    ctx.font = '14px Courier New';
    ctx.fillStyle = '#4a7a4a';
    ctx.fillText('Arrow keys to move / Space to shoot', W / 2, H / 2 + 10);
    ctx.fillText('Press START to play', W / 2, H / 2 + 35);
    ctx.textAlign = 'left';
  }

  function start() {
    if (running) return;
    score = 0; lives = 3; wave = 1; gameOver = false;
    ship.x = 100; ship.y = 200; ship.dir = 1;
    worldX = 0;
    bullets = []; particles = [];
    spawnHumans();
    spawnWave();
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

  var shootCooldown = 0;

  function update() {
    if (gameOver) return;

    // Input
    if (keys['ArrowUp'] && ship.y > 20) ship.y -= ship.speed;
    if (keys['ArrowDown'] && ship.y < H - 80) ship.y += ship.speed;
    if (keys['ArrowRight']) { worldX += ship.speed + 2; ship.dir = 1; }
    if (keys['ArrowLeft']) { worldX -= ship.speed + 2; ship.dir = -1; }

    // Wrap world
    if (worldX < 0) worldX += WORLD_W;
    if (worldX >= WORLD_W) worldX -= WORLD_W;

    // Shoot
    if (shootCooldown > 0) shootCooldown--;
    if (keys[' '] && shootCooldown <= 0) {
      bullets.push({
        x: ship.x + worldX + (ship.dir === 1 ? ship.w : 0),
        y: ship.y + ship.h / 2,
        speed: 8 * ship.dir,
        life: 60
      });
      shootCooldown = 8;
    }

    // Update bullets
    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].x += bullets[i].speed;
      bullets[i].life--;
      if (bullets[i].x < worldX - 50 || bullets[i].x > worldX + W + 50 || bullets[i].life <= 0) {
        bullets.splice(i, 1);
      }
    }

    // Update enemies
    for (var i = enemies.length - 1; i >= 0; i--) {
      var e = enemies[i];
      if (!e.alive) continue;

      e.timer++;

      // Lander AI: move toward a human
      if (!e.carrying && e.targetHuman === null && e.timer > 100) {
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
          // Move toward human
          if (e.x < h.x) e.x += e.speed;
          else if (e.x > h.x) e.x -= e.speed;
          if (e.y < h.y - 20) e.y += e.speed * 0.5;
          else if (e.y > h.y - 15) e.y -= e.speed * 0.3;

          // Grab human
          if (Math.abs(e.x - h.x) < 12 && Math.abs(e.y - (h.y - 18)) < 12) {
            e.carrying = true;
            h.carried = true;
          }
        }
      } else if (!e.carrying) {
        // Patrol
        e.x += Math.sin(e.timer * 0.02) * e.speed;
        e.y += Math.cos(e.timer * 0.03) * e.speed * 0.3;
      }

      // Carry human up
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

      // Bullet collision
      for (var b = bullets.length - 1; b >= 0; b--) {
        var bx = bullets[b].x - e.x;
        var by = bullets[b].y - e.y;
        if (Math.abs(bx) < e.w && Math.abs(by) < e.h) {
          e.alive = false;
          score += 150;
          spawnExplosion(e.x - worldX, e.y);
          bullets.splice(b, 1);

          // Drop carried human
          if (e.carrying && e.targetHuman !== null && humans[e.targetHuman]) {
            humans[e.targetHuman].carried = false;
            humans[e.targetHuman].falling = true;
            humans[e.targetHuman].vy = 0;
          }
          break;
        }
      }

      // Ship collision
      var sx = ship.x + worldX;
      if (e.alive && Math.abs(e.x - sx) < 20 && Math.abs(e.y - ship.y) < 16) {
        lives--;
        spawnExplosion(ship.x, ship.y);
        ship.x = 100; ship.y = 200;
        if (lives <= 0) { gameOver = true; }
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

    // Update particles
    for (var i = particles.length - 1; i >= 0; i--) {
      particles[i].x += particles[i].vx;
      particles[i].y += particles[i].vy;
      particles[i].life--;
      if (particles[i].life <= 0) particles.splice(i, 1);
    }

    // Check wave clear
    var allDead = true;
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].alive) { allDead = false; break; }
    }
    if (allDead) {
      wave++;
      spawnWave();
    }
  }

  function spawnExplosion(x, y) {
    for (var i = 0; i < 12; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 20 + Math.random() * 15,
        color: Math.random() > 0.5 ? '#00FF41' : '#00e5ff'
      });
    }
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Stars (parallax)
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
      // Wrap
      if (tx < -WORLD_W / 2) tx += WORLD_W;
      if (tx > WORLD_W / 2) tx -= WORLD_W;
      if (tx >= -10 && tx <= W + 10) {
        if (!started) { ctx.moveTo(tx, terrain[i].y); started = true; }
        else ctx.lineTo(tx, terrain[i].y);
      }
    }
    ctx.stroke();

    // Fill below terrain
    ctx.fillStyle = 'rgba(0, 255, 65, 0.03)';
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.fill();

    // Humans
    for (var i = 0; i < humans.length; i++) {
      var h = humans[i];
      if (!h.alive) continue;
      var hx = h.x - worldX;
      if (hx < -WORLD_W / 2) hx += WORLD_W;
      if (hx > WORLD_W / 2) hx -= WORLD_W;
      if (hx >= -20 && hx <= W + 20) {
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(hx - 2, h.y - 12, 5, 8);  // body
        ctx.fillRect(hx - 1, h.y - 14, 3, 3);  // head
        ctx.fillRect(hx - 3, h.y - 8, 2, 4);   // arm
        ctx.fillRect(hx + 2, h.y - 8, 2, 4);   // arm
        ctx.fillRect(hx - 1, h.y - 4, 2, 4);   // leg
        ctx.fillRect(hx + 1, h.y - 4, 2, 4);   // leg
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
        ctx.fillStyle = '#ff0040';
        // Diamond shape
        ctx.beginPath();
        ctx.moveTo(ex, e.y - 8);
        ctx.lineTo(ex + 8, e.y);
        ctx.lineTo(ex, e.y + 8);
        ctx.lineTo(ex - 8, e.y);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ff6680';
        ctx.fillRect(ex - 2, e.y - 2, 4, 4);
      }
    }

    // Player ship
    ctx.fillStyle = '#00FF41';
    ctx.beginPath();
    if (ship.dir === 1) {
      ctx.moveTo(ship.x + ship.w, ship.y + ship.h / 2);
      ctx.lineTo(ship.x, ship.y);
      ctx.lineTo(ship.x + 5, ship.y + ship.h / 2);
      ctx.lineTo(ship.x, ship.y + ship.h);
    } else {
      ctx.moveTo(ship.x, ship.y + ship.h / 2);
      ctx.lineTo(ship.x + ship.w, ship.y);
      ctx.lineTo(ship.x + ship.w - 5, ship.y + ship.h / 2);
      ctx.lineTo(ship.x + ship.w, ship.y + ship.h);
    }
    ctx.closePath();
    ctx.fill();

    // Engine glow
    ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
    var engineX = ship.dir === 1 ? ship.x - 5 : ship.x + ship.w + 5;
    ctx.fillRect(engineX - 3, ship.y + ship.h / 2 - 2, 6, 4);

    // Bullets
    ctx.fillStyle = '#00FF41';
    for (var i = 0; i < bullets.length; i++) {
      var bx = bullets[i].x - worldX;
      if (bx >= -10 && bx <= W + 10) {
        ctx.fillRect(bx, bullets[i].y - 1, 8, 2);
      }
    }

    // Particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / 35;
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
    var mw = 160, mh = 16, mx = W / 2 - mw / 2, my = 6;
    ctx.fillStyle = 'rgba(0, 255, 65, 0.1)';
    ctx.fillRect(mx, my, mw, mh);
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.3)';
    ctx.strokeRect(mx, my, mw, mh);

    // Player on minimap
    var px = (ship.x + worldX) / WORLD_W * mw;
    ctx.fillStyle = '#00FF41';
    ctx.fillRect(mx + px - 1, my + 2, 3, mh - 4);

    // Enemies on minimap
    ctx.fillStyle = '#ff0040';
    for (var i = 0; i < enemies.length; i++) {
      if (!enemies[i].alive) continue;
      var ex = enemies[i].x / WORLD_W * mw;
      ctx.fillRect(mx + ex, my + 4, 2, mh - 8);
    }

    // Humans on minimap
    ctx.fillStyle = '#00e5ff';
    for (var i = 0; i < humans.length; i++) {
      if (!humans[i].alive) continue;
      var hx = humans[i].x / WORLD_W * mw;
      ctx.fillRect(mx + hx, my + mh - 5, 1, 3);
    }
  }

  function loop() {
    if (!running) return;
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  // Init on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { start: start, reset: reset };
})();
