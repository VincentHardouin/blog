const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMedia.addEventListener('change', setTheme);

function setTheme() {
  const theme = darkModeMedia.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

export function initTheme() {
  setTheme();
}
