import "./styles.css";
// Dropdown Menu - No additional JavaScript needed

// Image Carousel
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

document.querySelector(".next").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  images[currentIndex].classList.add("active");
});
