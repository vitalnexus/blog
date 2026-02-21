/**
 * 80s Terminal Theme - Always Dark Mode
 * No light mode, pure retro terminal aesthetic
 */

const STORAGE_KEY = 'gam3rgawd-theme';

/**
 * Apply the 80s terminal theme to the document
 */
function applyTheme() {
  const html = document.documentElement;
  html.classList.add('dark');
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#3EAF4A';
}

/**
 * Glitch effect on theme elements
 */
function createGlitchEffect() {
  const elements = document.querySelectorAll('[data-glitch]');
  elements.forEach(el => {
    const text = el.textContent;
    el.setAttribute('data-text', text);
  });
}

/**
 * Initialize theme on page load
 */
function initTheme() {
  applyTheme();
  createGlitchEffect();

  // Hide theme toggle button since we're always dark
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.style.display = 'none';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
