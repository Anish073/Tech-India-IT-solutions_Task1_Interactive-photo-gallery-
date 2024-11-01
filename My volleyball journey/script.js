const images = [
  "volley.jpeg",
  "volley2.jpeg",
  "volley3.jpeg",
];

let currentIndex = 0;

// Load gallery dynamically
const gallery = document.getElementById("gallery");
images.forEach((src, index) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Gallery Image ${index + 1}`;
  img.setAttribute("onclick", `openLightbox(${index})`);
  div.appendChild(img);
  gallery.appendChild(div);
});

// Open the Lightbox
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex];
}

// Close the Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Show Previous Image
function prevImage() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateLightboxImage();
}

// Show Next Image
function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateLightboxImage();
}

// Update Lightbox Image
function updateLightboxImage() {
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[currentIndex];
}

// Keyboard Navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "Escape") {
    closeLightbox();
  }
});
