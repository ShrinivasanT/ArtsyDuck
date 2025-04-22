// script.js

// Smooth-scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax effect for the hero image
window.addEventListener("scroll", () => {
  const heroImage = document.querySelector("#hero img");
  if (heroImage) {
    const scrollPosition = window.pageYOffset;
    // Adjust the multiplier (0.5) to change the parallax speed
    heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const cards = document.querySelectorAll("[data-product-card]");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-filter-btn");
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
      // Optional: Highlight active filter button
      filterBtns.forEach((b) => b.classList.remove("bg-blue-700"));
      this.classList.add("bg-blue-700");
    });
  });
});
