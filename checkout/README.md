# Checkout - Accessibility Exercise

This is an e-commerce checkout page designed as an educational exercise for learning about web accessibility. The purpose of this project is to practice **finding and identifying accessibility issues** in a web application.

## 📋 Project Overview

This checkout page simulates an online shopping cart experience where users can:

- View their order summary with product details
- Modify quantities of items in their cart
- Add related products to their order
- Fill out checkout information (personal details, shipping, payment)
- Complete their purchase

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
2. Explore the checkout interface
3. Use the accessibility tools listed below to identify issues

## 📁 Project Structure

```
checkout/
├── index.html          # Main checkout page
├── styles.css          # Styling and layout
├── js/
│   ├── index.js        # Main functionality
│   └── counter.js      # Quantity counter logic
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
