# Coffee Shop - Accessibility Exercise

This is a coffee shop website designed as an educational exercise for learning about web accessibility. The purpose of this project is to practice **finding and identifying accessibility issues** in a web application.

## 📋 Project Overview

This coffee shop website simulates an online business where users can:

- Browse the main homepage with featured content
- Navigate through different sections of the site
- View product offerings and details
- Interact with various interface elements
- Experience a complete coffee shop web presence

## 🎯 Learning Objectives

The primary goal of this exercise is to:

- Identify common accessibility barriers in web interfaces
- Practice using accessibility testing tools
- Understand WCAG (Web Content Accessibility Guidelines) principles
- Learn how accessibility issues impact users with disabilities

## Exercise Instructions

1. **Manual Testing**: Navigate through the website using only your keyboard
2. **Tool-Based Testing**: Use the accessibility tools listed below to scan for issues
3. **Screen Reader Testing**: Test with a screen reader if available
4. **Documentation**: Keep notes on issues found and potential solutions
5. **Implementation**: Implement potential solutions

## Common Areas to Investigate

- Navigation structure and keyboard accessibility
- Form elements and labels
- Images and alternative text
- Color contrast ratios
- Heading structure and hierarchy
- Interactive elements and focus indicators
- Semantic HTML usage
- ARIA attributes and roles

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Explore the coffee shop interface
3. Navigate to `product.html` to view the products page

## 📁 Project Structure

```
coffee-shop/
├── index.html          # Main homepage
├── product.html        # Products page
├── css/
│   ├── styles.css      # Main stylesheet
│   └── product.css     # Product page stylesheet
├── js/
│   ├── index.js        # Main JavaScript
│   └── product.js      # Product page JavaScript
└── README.md           # This file
```

## 🛠 Useful Accessibility Testing Tools

### Browser Extensions

**HeadingsMap**

- Browser extension for Chrome and Firefox
- Visualizes the heading structure of web pages
- Helps identify heading hierarchy issues
- Download: [Chrome Web Store](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

**WCAG Color Contrast Checker**

- Browser extension for testing color contrast ratios
- Checks compliance with WCAG AA and AAA standards
- Provides real-time feedback on text visibility
- Download: [Chrome Web Store](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/)

**tabA11y**

- Tab order and focus management testing tool
- Visualizes the tab sequence through interactive elements
- Helps identify focus traps and keyboard navigation issues
- Download: [Chrome Web Store](https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga) | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/taba11y/)

### Web-based Tools

**Text Spacing Bookmarklet**

- Interactive tool for testing WCAG text spacing requirements
- Applies maximum text spacing values to check if content reflows properly
- Helps identify issues with line height, paragraph spacing, letter spacing, and word spacing
- Tests compliance with WCAG 2.1 Success Criterion 1.4.12 (Text Spacing)
- Access: [https://codepen.io/stevef/full/YLMqbo](https://codepen.io/stevef/full/YLMqbo)

### Accessibility Auditing Tools

**Chrome DevTools Accessibility Reference**

- Built-in accessibility testing tools in Chrome browser
- Comprehensive guide to using DevTools for accessibility auditing
- Includes accessibility pane, contrast checking, and more
- Guide: [https://developer.chrome.com/docs/devtools/accessibility/reference](https://developer.chrome.com/docs/devtools/accessibility/reference)

**axe DevTools Browser Extension**

- Professional accessibility testing extension by Deque
- Automated accessibility scanning and guided testing
- Provides detailed issue reports and remediation guidance
- Download: [https://www.deque.com/get-started-axe-devtools-browser-extension/?utm_campaign=devtools](https://www.deque.com/get-started-axe-devtools-browser-extension/?utm_campaign=devtools)

## 💻 Development Tools/Framework

**axe DevTools Linter**

- IDE extension for real-time accessibility linting
- Catches accessibility issues during development
- Integrates with popular code editors and IDEs
- Provides immediate feedback on accessibility violations
- Learn more: [https://www.deque.com/axe/devtools/linter/](https://www.deque.com/axe/devtools/linter/)

**Bootstrap**

- Framework with built-in accessibility considerations
- Comprehensive documentation with accessibility guidelines
- Examples of accessible component patterns
- Best practices for responsive and accessible design
- Visit: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## 📚 Useful Reading Materials

**Inclusive Components**

- Comprehensive guide to building accessible UI components
- Provides practical examples and code patterns
- Covers common interface elements with accessibility best practices
- Visit: [https://inclusive-components.design/](https://inclusive-components.design/)

**WCAG 2.1 Guidelines**

- Official Web Content Accessibility Guidelines from W3C
- Complete technical specification for web accessibility standards
- Essential reference for understanding compliance requirements
- Visit: [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)

**A11y Components Repository**

- Collection of accessible component patterns and examples
- GitHub repository with practical implementation examples
- Community-driven resource for accessible development
- Visit: [https://github.com/t12t/a11y-components](https://github.com/t12t/a11y-components)
