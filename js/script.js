// Elements
const themeBtn = document.getElementById("themeBtn");
const greetingEl = document.getElementById("greeting");
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Greeting by time of day
const hour = new Date().getHours();
let greeting = "Hello!";
if (hour < 12) greeting = "Good morning 👋";
else if (hour < 18) greeting = "Good afternoon 👋";
else greeting = "Good evening 👋";
greetingEl.textContent = greeting;

// Theme toggle 
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

function showNotAvailable(event) {
  event.preventDefault(); // this prevents page from refreshing
  alert("This project is not available yet.");
}


// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu after clicking a link (mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


// Form interaction (no backend)
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Thanks! Your message is ready to be sent (demo only).";
  contactForm.reset();
});
