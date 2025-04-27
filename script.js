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

// Function to filter products based on selected filter button
function filterProducts(category) {
  // Get all product cards
  const productCards = document.querySelectorAll("[data-product-card]");

  // Loop through all product cards
  productCards.forEach((card) => {
    // Get the categories for the current card (split in case there are multiple categories)
    const productCategories = card.getAttribute("data-category").split(" ");

    // Check if the card's categories match the selected filter
    if (category === "all" || productCategories.includes(category)) {
      // Show the product card
      card.style.display = "block";
    } else {
      // Hide the product card
      card.style.display = "none";
    }
  });
}

// Event listeners for filter buttons
document.getElementById("filterAll").addEventListener("click", () => {
  filterProducts("all");
});

document.getElementById("filterTshirt").addEventListener("click", () => {
  filterProducts("tshirt");
});

document.getElementById("filterTotebag").addEventListener("click", () => {
  filterProducts("totebag");
});

document.getElementById("filterAnime").addEventListener("click", () => {
  filterProducts("anime");
});

document.getElementById("filterFloral").addEventListener("click", () => {
  filterProducts("floral");
});

document.getElementById("filterAnonymous").addEventListener("click", () => {
  filterProducts("anonymous");
});

// Selecting the slider and buttons
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Button click event handlers
prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -300, // Scroll left by 300px
    behavior: "smooth", // Smooth scrolling
  });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 300, // Scroll right by 300px
    behavior: "smooth", // Smooth scrolling
  });
});

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("block");
  });
}
