// ===================================
// ELEVATE BUSINESS - JAVASCRIPT
// ===================================

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  ```
menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.textContent = isOpen ? "✕" : "☰";
```;
});

// Close the mobile menu when a link is clicked.

const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// ===================================
// 2. CONTACT FORM DEMO
// ===================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.classList.remove("success-message");
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your demo message has been checked successfully. No message was sent.`;
  formMessage.classList.add("success-message");
  contactForm.reset();
});
// ===================================
// 3. AUTOMATIC FOOTER YEAR
// ===================================
const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();
// ===================================
// 4. HERO ENTRANCE
// ===================================

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
