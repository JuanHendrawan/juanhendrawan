// Flip saat diklik
const card = document.getElementById("myPhotoCard");
const sideText = document.getElementById("sideText");

card.addEventListener("click", () => {
  card.classList.toggle("flip");

  // cek apakah sedang balik ke belakang
  if (card.classList.contains("flip")) {
    sideText.classList.add("show");
  } else {
    sideText.classList.remove("show");
  }
});
// Close nav when a nav-list link is clicked
document.querySelectorAll(".nav-list li a").forEach((link) => {
  link.addEventListener("click", function () {
    const nav = document.querySelector(".nav.open");
    if (nav) {
      nav.classList.remove("open");
    }
  });
});

//GALLERY
const slides = document.querySelectorAll(".gallery-slide");
let current = 0;

// fungsi update posisi
function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev", "next", "hidden");

    if (i === current) {
      slide.classList.add("active");
    } else if (i === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("prev");
    } else if (i === (current + 1) % slides.length) {
      slide.classList.add("next");
    } else {
      slide.classList.add("hidden");
    }
  });
}

// looping otomatis
function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlides();
}

// jalan otomatis setiap 3 detik
setInterval(nextSlide, 3000);

// set awal
updateSlides();
