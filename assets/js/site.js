/* ============================================
   Look Into My Realm - Site JavaScript
   Star field, navigation, matrix easter egg
   ============================================ */

(function () {
  'use strict';

  // --- Star Field Generator ---
  function createStarField() {
    var field = document.getElementById('starField');
    if (!field) return;
    var count = 120;
    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      var size = Math.random() * 2 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 4 + 2) + 's';
      star.style.animationDelay = (Math.random() * 4) + 's';
      field.appendChild(star);
    }
  }

  // --- Mobile Navigation ---
  function initNavigation() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  // --- Theme Toggle ---
  var themeStorageKey = 'lir-theme';

  function getStoredTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (err) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (err) {
      // ignore storage errors
    }
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function applyTheme(theme, persist) {
    if (theme !== 'light' && theme !== 'dark') return;
    document.documentElement.setAttribute('data-theme', theme);
    var toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (persist) {
      storeTheme(theme);
    }
  }

  function initThemeToggle() {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    applyTheme(getPreferredTheme(), false);

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(current, true);
    });

    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var handleChange = function (event) {
        if (getStoredTheme()) return;
        applyTheme(event.matches ? 'light' : 'dark', false);
      };
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', handleChange);
      } else if (typeof mq.addListener === 'function') {
        mq.addListener(handleChange);
      }
    }
  }

  // --- Matrix Easter Egg ---
  // Activated by typing "matrix" anywhere on the page
  var matrixBuffer = '';
  var matrixActive = false;
  var matrixAnimId = null;

  function initMatrixEasterEgg() {
    document.addEventListener('keydown', function (e) {
      if (matrixActive) {
        if (e.key === 'Escape') {
          stopMatrix();
        }
        return;
      }
      matrixBuffer += e.key.toLowerCase();
      if (matrixBuffer.length > 10) {
        matrixBuffer = matrixBuffer.slice(-10);
      }
      if (matrixBuffer.includes('matrix')) {
        matrixBuffer = '';
        startMatrix();
      }
    });
  }

  function startMatrix() {
    matrixActive = true;
    var canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    canvas.classList.add('active');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var fontSize = 14;
    var columns = Math.floor(canvas.width / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Custom characters - GAM3RGAWD themed
    var chars = 'GAM3RGAWD Look Into My Realm 01 VOID SPACE NEXUS LEVEL22 STEAM CAVE DWELLER ';
    chars = chars.split('');

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00FF41';
      ctx.font = fontSize + 'px Courier New';

      for (var i = 0; i < drops.length; i++) {
        var text = chars[Math.floor(Math.random() * chars.length)];
        var x = i * fontSize;
        var y = drops[i] * fontSize;

        // Vary brightness
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff';
        } else if (Math.random() > 0.8) {
          ctx.fillStyle = '#00FF41';
        } else {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.6)';
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      matrixAnimId = requestAnimationFrame(draw);
    }

    draw();

    // Auto-stop after 8 seconds
    setTimeout(function () {
      if (matrixActive) stopMatrix();
    }, 8000);
  }

  function stopMatrix() {
    matrixActive = false;
    var canvas = document.getElementById('matrixCanvas');
    if (canvas) {
      canvas.classList.remove('active');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (matrixAnimId) {
      cancelAnimationFrame(matrixAnimId);
      matrixAnimId = null;
    }
  }

  // --- Glitch text init ---
  function initGlitchText() {
    var glitchEls = document.querySelectorAll('.glitch');
    for (var i = 0; i < glitchEls.length; i++) {
      if (!glitchEls[i].getAttribute('data-text')) {
        glitchEls[i].setAttribute('data-text', glitchEls[i].textContent);
      }
    }
  }

  // --- Parallax Page Detection ---
  function initParallaxPage() {
    var parallaxPage = document.querySelector('.parallax-page');
    if (parallaxPage) {
      // Hide default backgrounds when on parallax page
      var blackHole = document.querySelector('.black-hole-container');
      var sun = document.querySelector('.sun-container');
      if (blackHole) blackHole.style.display = 'none';
      if (sun) sun.style.display = 'none';
    }
  }

  // --- Light Mode Scroll Transparency ---
  function initScrollTransparency() {
    var parallaxPage = document.querySelector('.parallax-page');
    if (parallaxPage) return; // Don't apply on parallax page

    var contentElements = [];
    var scrollTimeout = null;
    var isScrolling = false;

    function setOpacity(opacity) {
      contentElements.forEach(function(el) {
        el.style.transition = 'opacity 0.3s ease';
        el.style.opacity = opacity;
      });
    }

    function onScrollEnd() {
      isScrolling = false;
      var theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        setOpacity('1'); // Return to full opacity when scroll stops
      }
    }

    function onScroll() {
      var theme = document.documentElement.getAttribute('data-theme');
      if (theme !== 'light') {
        // Reset opacity for dark mode
        contentElements.forEach(function(el) {
          el.style.opacity = '';
          el.style.transition = '';
        });
        return;
      }

      // While scrolling, set to 30% opacity
      if (!isScrolling) {
        isScrolling = true;
        setOpacity('0.3');
      }

      // Clear previous timeout and set new one
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(onScrollEnd, 150); // Return to normal 150ms after scroll stops
    }

    function cacheElements() {
      contentElements = Array.prototype.slice.call(
        document.querySelectorAll('.container, .card, .post-item, .section-header, .hero, .site-header, .site-footer, .profile-banner, .game-card')
      );
    }

    // Initialize
    cacheElements();
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Re-check when theme changes
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'data-theme') {
          var theme = document.documentElement.getAttribute('data-theme');
          if (theme !== 'light') {
            contentElements.forEach(function(el) {
              el.style.opacity = '';
              el.style.transition = '';
            });
          }
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
  }

  // --- Init ---
  function init() {
    createStarField();
    initNavigation();
    initThemeToggle();
    initMatrixEasterEgg();
    initGlitchText();
    initParallaxPage();
    initScrollTransparency();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
