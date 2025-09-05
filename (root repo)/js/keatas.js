//TOMBOLBACK TO TOP//
const backToTopBtn = document.getElementById("backToTop");

// Tampilkan tombol ketika scroll > 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll ke atas saat tombol diklik
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
