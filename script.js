// 🌙 Tema Mode (dari kode sebelumnya)
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Terapkan tema tersimpan
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add('light-mode');
}

// Saat toggle diklik
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const icon = toggleBtn.querySelector('i');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-brightness-high-fill');
    } else {
      localStorage.setItem('theme', 'light-mode');
      icon.classList.remove('bi-brightness-high-fill');
      icon.classList.add('bi-moon-fill');
    }
  });
}

// 🌈 Transisi Halaman
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in saat halaman dimuat
  document.body.classList.add('fade-in');

  // Fade-out sebelum pindah halaman
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const target = link.getAttribute('href');

    // Abaikan link eksternal dan anchor di halaman yang sama
    if (target.startsWith('#') || target.startsWith('http')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = target;
      }, 200); // waktu transisi 0.4s
    });
  });
});
