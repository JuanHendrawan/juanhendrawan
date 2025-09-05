const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  nav.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// ✅ Tutup menu ketika salah satu link navigasi diklik
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Klik di luar popup → tutup (hanya di mobile)
const contactBtn = document.getElementById("contactBtn");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.querySelector(".popup .close");

// Buka popup saat klik Contact
contactBtn.addEventListener("click", (e) => {
  e.preventDefault(); // mencegah reload halaman
  contactPopup.style.display = "flex";
});

// Tutup popup saat klik tombol close
closePopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});
// Tutup popup saat klik di luar konten
window.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
  }
});
function checkHoneypot() {
  let honeypot = document.getElementById("honeypot").value;
  if (honeypot !== "") {
    alert("Spam detected!");
    return false; // hentikan submit
  }
  return true;
}
