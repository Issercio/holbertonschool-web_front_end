# Accessibility Project

This project focuses on improving web accessibility standards, particularly keyboard navigation and focus visibility.

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
