const themeBtn = document.getElementById("themeBtn");
const greetingEl = document.getElementById("greeting");
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");
const projectFeedback = document.getElementById("projectFeedback");
const projectLinks = document.querySelectorAll(".project-link");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Greeting by time of day
const hour = new Date().getHours();
let greeting = "Hello!";
if (hour < 12) {
  greeting = "Good morning 👋";
} else if (hour < 18) {
  greeting = "Good afternoon 👋";
} else {
  greeting = "Good evening 👋";
}
greetingEl.textContent = greeting;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
} else {
  themeBtn.textContent = "🌙";
}

// Working theme toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  themeBtn.textContent = isDarkMode ? "☀️" : "🌙";
});

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Project links without inline onclick
projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    projectFeedback.textContent = "This project demo is not available yet, but the project description is included above.";
  });
});

// Project filter
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category;

      if (filter === "all" || categories.includes(filter)) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (visibleCount === 0) {
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
    }

    projectFeedback.textContent =
      filter === "all"
        ? "Showing all projects."
        : `Showing ${filter.toUpperCase()} projects.`;
  });
});

// Contact form validation
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formMsg.classList.remove("success", "error");

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields before sending your message.";
    formMsg.classList.add("error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.classList.add("error");
    return;
  }

  if (message.length < 10) {
    formMsg.textContent = "Your message should be at least 10 characters long.";
    formMsg.classList.add("error");
    return;
  }

  formMsg.textContent = `Thank you, ${name}! Your message has been validated successfully.`;
  formMsg.classList.add("success");
  contactForm.reset();
});
const musicBtn = document.getElementById("musicBtn");
const musicSearch = document.getElementById("musicSearch");
const musicStatus = document.getElementById("musicStatus");
const musicResults = document.getElementById("musicResults");

musicBtn.addEventListener("click", fetchMusic);

async function fetchMusic() {
  const query = musicSearch.value.trim();

  musicResults.innerHTML = "";

  if (query === "") {
    musicStatus.textContent = "Please enter a song title or artist name.";
    musicStatus.classList.add("error");
    return;
  }

  musicStatus.classList.remove("error", "success");
  musicStatus.textContent = "Loading music recommendations...";

  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=5`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch music data.");
    }

    const data = await response.json();

    if (data.results.length === 0) {
      musicStatus.textContent = "No songs found. Try another search term.";
      return;
    }

    musicStatus.textContent = `Showing results for "${query}".`;

    data.results.forEach((song) => {
      const card = document.createElement("article");
      card.classList.add("music-card");

      card.innerHTML = `
        <h3>${song.trackName}</h3>
        <p><strong>Artist:</strong> ${song.artistName}</p>
        <p><strong>Album:</strong> ${song.collectionName}</p>
        ${
          song.previewUrl
            ? `<a href="${song.previewUrl}" target="_blank" rel="noopener noreferrer">Listen to Preview</a>`
            : `<p>No preview available.</p>`
        }
      `;

      musicResults.appendChild(card);
    });
  } catch (error) {
    musicStatus.textContent = "Sorry, music data could not be loaded. Please try again.";
    musicStatus.classList.add("error");
  }
}