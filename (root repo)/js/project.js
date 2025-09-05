// Data project
const projects = [
  { type: "photo", category: "wedding", title: "Wedding Project", src: "/image/wedding-thumb.jpg", link: "/project/wedding.html" },
  { type: "photo", category: "street", title: "Street Photography", src: "/image/street-thumb.jpg", link: "/project/street.html" },
  { type: "photo", category: "portrait", title: "Portrait Session", src: "/image/portrait-thumb.jpg", link: "/project/portrait.html" },
  { type: "photo", category: "documentation", title: "Bayu Buana Travel Servies", src: "/(root repo)/assets/images/Bayu Buana Travel Servies/Bayu Buana Travel Servies (1).webp", link: "/(root repo)/Bayu-Buana-Travel-Servies.html" },
  { type: "photo", category: "landscape", title: "Landscape Photography", src: "/image/landscape-thumb.jpg", link: "/project/landscape.html" },
  { type: "video", category: "shortfilm", title: "SAUDADE", src: "/(root repo)/assets/images/saudade/VE_00776.JPG", link: "/(root repo)/saudade.html" },
  { type: "video", category: "event", title: "Event Highlight", src: "/image/event-thumb.jpg", link: "/project/event.html" },
];

// Elemen
const projectList = document.getElementById("projectList");
const mainFilter = document.getElementById("mainFilter");
const subFilter = document.getElementById("subFilter");
const resetBtn = document.getElementById("resetFilter");

// Render project
function renderProjects(filterType = "all", filterCategory = "all") {
  projectList.innerHTML = "";

  let filtered = projects.filter((p) => {
    if (filterType !== "all" && p.type !== filterType) return false;
    if (filterCategory !== "all" && p.category !== filterCategory) return false;
    return true;
  });

  // Shuffle project (random saat awal)
  if (filterType === "all" && filterCategory === "all") {
    filtered = filtered.sort(() => 0.5 - Math.random());
  }

  if (filtered.length === 0) {
    projectList.innerHTML = "<p>Tidak ada project ditemukan.</p>";
    return;
  }

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <a href="${p.link}">
        <img src="${p.src}" alt="${p.title}">
        <h4>${p.title}</h4>
      </a>
    `;
    projectList.appendChild(div);
  });
}

// Main filter berubah
mainFilter.addEventListener("change", () => {
  const val = mainFilter.value;
  subFilter.innerHTML = '<option value="all">Semua Kategori</option>';
  subFilter.disabled = false;

  if (val === "photo") {
    subFilter.innerHTML += `
      <option value="wedding">Wedding</option>
      <option value="street">Street</option>
      <option value="landscape">Landscape</option>
      <option value="portrait">Portrait</option>
      <option value="event">Event</option>
      <option value="documentation">Documentation</option>
      <option value="etc">Etc</option>
    `;
  } else if (val === "video") {
    subFilter.innerHTML += `
      <option value="shortfilm">Short Film</option>
      <option value="event">Event</option>
      <option value="etc">Etc</option>
    `;
  } else {
    subFilter.disabled = true;
  }

  renderProjects(val);
});

// Sub filter berubah
subFilter.addEventListener("change", () => {
  renderProjects(mainFilter.value, subFilter.value);
});

// Reset filter
resetBtn.addEventListener("click", () => {
  mainFilter.value = "all";
  subFilter.innerHTML = '<option value="all">Pilih kategori</option>';
  subFilter.disabled = true;
  renderProjects("all");
});

// Render awal (random)
renderProjects("all");
