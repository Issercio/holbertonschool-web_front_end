# Accessibility Project

This project focuses on improving web accessibility standards, particularly keyboard navigation, focus visibility, and skip-links implementation.

## Task 0: Make the "Works" Card Focus Visible

### Objective
Improve keyboard accessibility in the Works section by making the card focus state visible when navigating with the TAB key.

### Changes Made
Updated the CSS for the `.card-work` component to provide visible focus states:

- **Modified `.card-work .card-title`**: Removed `opacity: 0` to allow the title to be visible on focus
- **Updated `.card-work .card-title a`**: Set `opacity: 0` by default, then applied `opacity: 1` on focus/hover states
- **Combined focus and hover states**: Both `.card-work .card-title a:focus` and `.card-work:hover .card-title a` now display:
  - `opacity: 1` - Full visibility
  - `height: 100%` - Full card height
  - `background-color: rgba(0, 0, 0, 0.7)` - Dark overlay background

### Result
When users navigate the Works section using keyboard (TAB key), the card title and dark background are now visible, matching the hover state behavior. This ensures keyboard users have the same visual feedback as mouse users.

### Files
- `keyboard/01-styles.css` - Updated stylesheet with improved focus states
- `keyboard/01-index.html` - HTML file demonstrating the Works section

## Task 1: Add Skip-Links

### Objective
Implement skip-links navigation to allow keyboard users to quickly jump to main content sections, improving accessibility for keyboard navigation.

### Changes Made

#### HTML Structure (01-index.html and 01-article.html):
- **Added skip-links nav**: A `<nav>` element with `aria-label="Skip links"` positioned at the top of the body
- **Created skip-links list**: An unordered list with class `off-screen` containing two skip links:
  - "Skip to primary navigation" linking to `#a11y-primary-nav`
  - "Skip to main content" linking to `#a11y-main-content`
- **Added IDs and tabindex**: 
  - `id="a11y-primary-nav"` and `tabindex="-1"` on `<nav class="navbar-menu">`
  - `id="a11y-main-content"` and `tabindex="-1"` on `<main>`

#### CSS Styling (01-styles.css):
- **`.off-screen` class**:
  - `left: -100vw` - Positions the list off-screen
  - `position: absolute` - Removes from normal flow
  
- **`.skip-link` class**:
  - `background: var(–color-black)` - Dark background
  - `color: var(–color-white)` - White text
  - `left: 0` - Positioned at left edge
  - `padding: .7rem` - Internal spacing
  - `position: fixed` - Fixed positioning at top
  - `opacity: 0` - Initially hidden
  - `top: 0` - At top of viewport
  - `z-index: 10` - Above other elements
  - `transform: translateY(-1rem)` - Positioned slightly above
  - `transition: transform .2s ease-in-out, opacity .2s ease-in-out` - Smooth animation

- **`.skip-link:focus` state**:
  - `opacity: 1` - Becomes visible
  - `transform: translateY(0)` - Slides into view

### Result
Users can now press TAB immediately after loading the page to access skip-links, allowing them to jump directly to primary navigation or main content without tabbing through all elements. The skip-links appear with a smooth animation when focused.

### Files
- `skip-links/01-styles.css` - Complete stylesheet with skip-links styling
- `skip-links/01-index.html` - Homepage with skip-links implementation
- `skip-links/01-article.html` - Article page with skip-links implementation
