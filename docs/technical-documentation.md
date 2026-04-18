# Technical Documentation

## 1. Overview
This project is a responsive portfolio website built with HTML, CSS, and JavaScript. Assignment 3 extends the previous versions by adding advanced functionality, external API integration, state management, and improved performance.

The main improvements include:
- dark/light theme toggle with persistence
- project filtering and sorting
- contact form validation with enhanced checks
- integration with an external API (iTunes)
- visitor name storage using localStorage
- timer showing time spent on the site
- improved animations and user feedback


## 2. Project Structure
The project follows an organized structure:

- `index.html` contains the page structure and semantic sections
- `css/styles.css` contains layout, visual styling, transitions, and responsive rules
- `js/script.js` contains all interactive behavior and DOM logic
- `assets/images/` stores project and profile images
- `docs/` stores technical and AI usage documentation


## 3. HTML Structure
The page is divided into the following main sections:
- Header and navigation
- Hero section
- About section
- Projects section
- Skills section
- Music Explorer section
- Interactive Features section
- Contact section
- Footer

Semantic sectioning improves readability and maintainability.

## 4. CSS Design Approach
The styling uses CSS custom properties (`:root`) to define reusable theme variables such as background, text, border, and accent colors.

Example variables:
- `--bg`
- `--text`
- `--accent`
- `--border`

When the `dark` class is added to the `body`, these values change dynamically.


## 5. Dark Mode and localStorage
Dark mode is implemented by toggling a `dark` class on the `<body>` element.

### Logic:
1. Check if a theme is stored in `localStorage`
2. Apply the saved theme
3. Toggle theme on button click
4. Save the updated preference


## 6. Dynamic Content: Project Filtering
Users can filter projects by category:
- All
- Web
- React
- UI/UX

Each project card includes a `data-category` attribute.

### Filtering process:
1. Detect clicked filter
2. Update active button state
3. Loop through cards
4. Show matching cards
5. Hide non-matching cards
6. Display empty-state message if needed


## 7. Project Sorting
Projects can also be sorted using a dropdown menu.

Sorting options:
- A–Z
- Z–A
- Newest
- Oldest

### Sorting process:
1. Read selected sort option
2. Extract data attributes (title/date)
3. Sort project array
4. Re-render sorted cards


## 8. State Management
The application uses `localStorage` to preserve user preferences.

Stored values:
- theme (dark/light)
- visitor name
- selected filter
- selected sorting option

### Flow:
1. Load stored values on page load
2. Apply them to UI
3. Update storage when user interacts


## 9. Visitor Personalization
Users can enter their name to personalize the experience.

### Behavior:
- Name is saved in `localStorage`
- A welcome message is displayed
- The value persists after refresh


## 10. Timer Feature
A timer tracks how long a user stays on the site.

### Logic:
1. Initialize a counter
2. Increase every second using `setInterval`
3. Display minutes and seconds
4. Update in real time


## 11. API Feature – Music Explorer
The Music Explorer uses the iTunes Search API.

### How it works:
1. User enters a search query
2. Fetch request is sent to API
3. Results returned in JSON format
4. Display music cards dynamically

### User feedback:
- Loading message
- Error message
- No-results message


## 12. Event Handling
All interactions use `addEventListener` instead of inline HTML events.

Benefits:
- better structure
- easier maintenance
- separation of concerns


## 13. Form Validation
The contact form includes custom validation:

- required fields
- email format validation
- minimum and maximum message length

### Validation flow:
1. Prevent default submission
2. Read and trim inputs
3. Validate inputs step-by-step
4. Show error or success message


## 14. User Experience Improvements
Enhancements include:
- clear feedback messages
- hover effects and transitions
- fade-in animations
- empty-state handling
- smooth theme switching


## 15. Responsive Design
The site adapts to smaller screens using:
- Flexbox
- CSS Grid
- media queries (`max-width: 720px`)

## 16. Performance Improvements
Optimizations include:
- lazy loading images (`loading="lazy"`)
- clean and reusable CSS/JS
- minimized unnecessary code
- efficient DOM updates

## 17. Limitations
- Contact form does not connect to a backend
- Project links are placeholders

## 18. Future Improvements
Possible enhancements:
- connect form to backend/email service
- add real project demos
- implement search functionality
- improve accessibility features