// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const galleryItems = document.querySelectorAll(".gallery-item");

// Add click event to gallery images
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
  });
});

// Close lightbox on close button click
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox on clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
