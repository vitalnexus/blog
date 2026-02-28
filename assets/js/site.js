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

  // --- Random Read Page ---
  function initRandomRead() {
    var page = document.querySelector('.rr-page');
    if (!page) return;

    // Escape .site-content stacking context (z-index:1) so the fixed overlay
    // renders above .site-header (z-index:1000).  Moving to <body> makes the
    // fixed element's stacking parent the root viewport.
    if (page.parentElement !== document.body) {
      document.body.appendChild(page);
    }

    // Hide default site backgrounds
    var blackHole = document.querySelector('.black-hole-container');
    var sun = document.querySelector('.sun-container');
    if (blackHole) blackHole.style.display = 'none';
    if (sun) sun.style.display = 'none';

    var postsDataEl  = document.getElementById('rrPostsData');
    var titleEl      = document.getElementById('rrTitle');
    var headerTitleEl= document.getElementById('rrHeaderTitle');
    var bodyEl       = document.getElementById('rrBody');
    var dateEl       = document.getElementById('rrDate');
    var catsEl       = document.getElementById('rrCategories');
    var linkEl       = document.getElementById('rrFullLink');
    var contentEl    = document.getElementById('rrContent');
    var shuffleBtn   = document.getElementById('rrShuffle');
    var windowEl     = page.querySelector('.rr-window');

    if (!postsDataEl || !contentEl) return;

    var posts = [];
    try { posts = JSON.parse(postsDataEl.textContent); } catch(e) {}
    if (!posts.length) return;

    var scrollRaf = null;
    var scrollSpeed = 0.4; // px per frame (~24px/sec at 60fps)
    var hintEl = document.getElementById('rrScrollHint');

    function setHint(text) {
      if (hintEl) hintEl.textContent = text;
    }

    function loadPost(post) {
      // Stop any running scroll
      if (scrollRaf) { cancelAnimationFrame(scrollRaf); scrollRaf = null; }

      titleEl.textContent       = post.title;
      if (headerTitleEl) headerTitleEl.textContent = post.title;
      bodyEl.textContent        = post.content;
      if (dateEl)  dateEl.textContent  = post.date;
      if (catsEl)  catsEl.textContent  = post.categories ? post.categories.join(' · ') : '';
      if (linkEl)  linkEl.href         = post.url;

      // Reset scroll position — window starts transparent so background is fully visible
      contentEl.scrollTop = 0;
      if (windowEl) windowEl.style.background = 'rgba(0,5,0,0.00)';
      setHint('↑ scroll to keep reading');

      // Short pause before auto-scroll begins
      setTimeout(startScroll, 1200);
    }

    // While scrolling: window adds a 15% dark tint, slightly dimming the background.
    // When scrolling stops: window returns to transparent so background is fully visible.
    var scrollStopTimer = null;
    function onScrollActivity() {
      if (!windowEl) return;
      windowEl.style.background = 'rgba(0,5,0,0.75)'; // 75% dim while scrolling
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(function() {
        if (windowEl) windowEl.style.background = 'rgba(0,5,0,0.00)'; // transparent when stopped
      }, 600);
    }

    contentEl.addEventListener('scroll', onScrollActivity);

    function startScroll() {
      if (headerTitleEl) headerTitleEl.classList.add('glowing');
      function tick() {
        var maxScroll = contentEl.scrollHeight - contentEl.clientHeight;
        var atBottom  = contentEl.scrollTop >= maxScroll - 2;

        if (atBottom) {
          // Countdown then load a new random post
          if (headerTitleEl) headerTitleEl.classList.remove('glowing');
          var countdown = 5;
          setHint('Loading next Random Post in ' + countdown);
          if (hintEl) hintEl.classList.add('counting');
          var countInterval = setInterval(function() {
            countdown--;
            if (countdown > 0) {
              setHint('Loading next Random Post in ' + countdown);
            } else {
              clearInterval(countInterval);
              if (hintEl) hintEl.classList.remove('counting');
              setHint('↑ scroll to keep reading');
              loadPost(pickRandom());
            }
          }, 1000);
          return;
        }
        contentEl.scrollTop += scrollSpeed;
        scrollRaf = requestAnimationFrame(tick);
      }
      scrollRaf = requestAnimationFrame(tick);
    }

    var lastPostIndex = -1;

    function pickRandom() {
      if (posts.length === 1) return posts[0];
      var idx;
      do {
        idx = Math.floor(Math.random() * posts.length);
      } while (idx === lastPostIndex);
      lastPostIndex = idx;
      return posts[idx];
    }

    // Load initial random post
    loadPost(pickRandom());

    // Shuffle button
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', function() {
        loadPost(pickRandom());
      });
    }

    // Pause auto-scroll on hover so user can read / scroll manually.
    // Background alpha continues to track scroll position via the 'scroll' listener.
    contentEl.addEventListener('mouseenter', function() {
      if (scrollRaf) { cancelAnimationFrame(scrollRaf); scrollRaf = null; }
      if (headerTitleEl) headerTitleEl.classList.remove('glowing');
    });
    contentEl.addEventListener('mouseleave', function() {
      if (!scrollRaf) startScroll();
    });
  }

  // --- Init ---
  function init() {
    createStarField();
    initNavigation();
    initThemeToggle();
    initMatrixEasterEgg();
    initGlitchText();
    initParallaxPage();
    initRandomRead();
    initScrollTransparency();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
