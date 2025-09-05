// Data Video Projects
const videoProjects = [
  { title: "Short Film", video: "/video/shortfilm.mp4", thumbnail: "/image/shortfilm-thumb.jpg" },
  { title: "Event Highlight", video: "/video/event.mp4", thumbnail: "/image/event-thumb.jpg" },
  { title: "Social Media Ad", video: "/video/social.mp4", thumbnail: "/image/social-thumb.jpg" },
  // tambah lagi...
];

const videoGrid = document.getElementById("videoGrid");
const videoPopup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const videoClose = document.getElementById("videoClose");

// Render thumbnail video
videoProjects.forEach((v) => {
  const box = document.createElement("div");
  box.classList.add("video-box");

  box.innerHTML = `
    <img src="${v.thumbnail}" alt="${v.title}">
    <h4>${v.title}</h4>
  `;

  box.addEventListener("click", () => {
    popupVideo.querySelector("source").src = v.video;
    popupVideo.load();
    videoPopup.style.display = "flex";
  });

  videoGrid.appendChild(box);
});

// Close popup
videoClose.addEventListener("click", () => {
  popupVideo.pause();
  videoPopup.style.display = "none";
});
