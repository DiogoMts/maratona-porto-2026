const APP_VERSION = '0.1.12';
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.app-version').forEach(el => el.textContent = `v${APP_VERSION}`);
});
