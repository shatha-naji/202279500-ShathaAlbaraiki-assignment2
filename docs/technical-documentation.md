# Technical Documentation
## 1. Overview
This project is a responsive portfolio website built with HTML, CSS, and JavaScript. Assignment 2 extends the original Assignment 1 version by adding more interactivity, better user feedback, and improved code quality.

The main improvements include:
- a working dark/light theme toggle with persistence
- project filtering by category
- form validation with custom messages
- improved animations and transitions
- removal of inline event handlers in favor of JavaScript event listeners

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
- Contact section
- Footer

Semantic sectioning improves readability and makes the page easier to maintain.

## 4. CSS Design Approach
The styling uses CSS custom properties (`:root`) to define reusable theme variables such as background, text, border, and accent colors. This makes theme switching easier because the site does not need separate stylesheets for dark and light mode.

Example variables include:
- `--bg`
- `--text`
- `--accent`
- `--border`

When the `dark` class is added to the `body`, these variables change to dark theme values.

## 5. Dark Mode and localStorage
Dark mode is controlled through JavaScript by toggling the `dark` class on the `body` element.

The selected theme is saved using `localStorage`, which allows the website to remember the user's preference after refresh or reopening the page.

### Logic
1. Check whether a saved theme exists in `localStorage`
2. If the saved value is `dark`, apply the `dark` class to the page
3. When the theme button is clicked, toggle the class
4. Save the updated preference back into `localStorage`

This improves user experience by preserving settings across visits.

## 6. Dynamic Content: Project Filtering
The projects section includes filter buttons such as:
- All
- Web
- React
- UI/UX

Each project card has a `data-category` attribute. JavaScript reads this attribute and compares it with the selected filter.

### Filtering process
1. Detect which filter button the user clicked
2. Remove the `active` class from all buttons
3. Add `active` to the selected button
4. Loop through all project cards
5. Show cards whose categories match the selected filter
6. Hide unmatched cards using the `.hidden` class
7. Show an empty-state message if no projects match

This feature makes the page more interactive and helps the user focus on relevant content.

## 7. Event Handling
All interactive behavior is implemented in `script.js` using `addEventListener`.

This is better than inline HTML event handlers because it:
- separates structure from behavior
- improves maintainability
- makes the code easier to expand and debug
- follows cleaner front-end development practice

Examples include:
- clicking the theme button
- toggling the mobile menu
- filtering projects
- showing project feedback
- submitting the contact form

## 8. Contact Form Validation
The contact form uses JavaScript validation to improve feedback before submission.

The validation checks:
- whether all fields are filled in
- whether the email is in a valid format
- whether the message is at least 10 characters long

### Validation flow
1. Prevent default form submission
2. Read and trim field values
3. Remove previous status classes
4. Validate empty fields
5. Validate email with a regular expression
6. Validate minimum message length
7. Display either an error message or a success message

This approach provides clear and immediate feedback to the user.

## 9. User Experience Improvements
Several interface improvements were added to support usability:
- section guidance text
- empty-state feedback when filters show no matches
- message when project demos are unavailable
- hover effects on cards and buttons
- fade-in animation for sections
- smooth transitions for theme changes and interactive elements

These improvements make the page easier to understand and more pleasant to use.

## 10. Responsive Design
The site is responsive and adapts to smaller screens using:
- Flexbox for navigation and skills
- CSS Grid for layout sections
- a media query at `max-width: 720px`

On smaller screens:
- the menu button appears
- navigation links collapse into a toggle menu
- project cards stack into one column
- the about section becomes a single-column layout

## 11. Limitations
Current limitations include:
- the contact form does not send data to a real backend service
- project demo links are placeholders
- the fade-in animation runs on page load only, not on scroll

## 12. Future Improvements
Possible future enhancements include:
- connecting the form to a backend or email service
- adding real project demo links
- adding live project search
- improving accessibility with more keyboard and screen-reader support