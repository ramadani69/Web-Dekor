const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

/* ================= STICKY NAVBAR ================= */

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* ================= CLOSE MENU AFTER CLICK ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
