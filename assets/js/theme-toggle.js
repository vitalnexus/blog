/**
 * Theme Toggle for Jekyll Blog
 * Manages dark/light mode with localStorage persistence
 */

const STORAGE_KEY = 'vitalik-blog-theme';

/**
 * Read the stored theme preference from localStorage
 * @returns {boolean} True if dark mode, false if light mode
 */
function readTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark') return true;
  if (stored === 'light') return false;

  // Default: check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Write the theme preference to localStorage
 * @param {boolean} isDark - True for dark mode, false for light mode
 */
function writeTheme(isDark) {
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

/**
 * Apply the theme to the document
 * @param {boolean} isDark - True for dark mode, false for light mode
 */
function applyTheme(isDark) {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#3eaf4a';
  } else {
    html.classList.remove('dark');
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }
}

/**
 * Toggle the theme between dark and light
 */
function toggleTheme() {
  const isDark = readTheme();
  const newTheme = !isDark;
  writeTheme(newTheme);
  applyTheme(newTheme);
}

/**
 * Initialize theme on page load
 */
function initTheme() {
  const isDark = readTheme();
  applyTheme(isDark);

  // Set up click handler for theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const isDark = e.matches;
      writeTheme(isDark);
      applyTheme(isDark);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
