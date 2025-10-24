// === 🌙 Tema Mode ===
const body = document.body;
const desktopToggle = document.getElementById("desktopThemeToggle");
const mobileToggle = document.getElementById("mobileThemeToggle");

// fungsi untuk ubah mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// tambahkan event listener ke dua tombol
if (desktopToggle) desktopToggle.addEventListener("click", toggleTheme);
if (mobileToggle) mobileToggle.addEventListener("click", toggleTheme);

// pas buka halaman, cek localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
});

// Set ikon awal sesuai tema tersimpan
const currentIcon = body.classList.contains("dark-mode")
  ? "bi-brightness-high-fill"
  : "bi-moon-fill";
["#themeToggle i", "#mobileThemeToggle i"].forEach((selector) => {
  const icon = document.querySelector(selector);
  if (icon) {
    icon.classList.add(currentIcon);
  }
});

// === 🌈 Efek Transisi Halaman ===
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in saat halaman dimuat
  document.body.classList.add("fade-in");

  // Fade-out sebelum pindah halaman
  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    const target = link.getAttribute("href");

    // Abaikan link eksternal dan anchor di halaman yang sama
    if (target.startsWith("#") || target.startsWith("http")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = target;
      }, 200); // waktu transisi 0.2 detik
    });
  });
});
  
