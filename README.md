# Wide Transport Website Redesign Demo

This repository contains a mock website redesign for Wide Transport, inspired by competitors such as Whimsy Intermodal, plus a small Puppeteer screenshot utility.

## What is included

- `index.html` — redesigned landing page mockup for Wide Transport with:
  - driver and shipper navigation dropdowns
  - TMS shipper login portal mockup
  - downloadable credit application placeholder
  - agent/vendor inquiry form
  - online driver application form
  - expanded mission & values content
  - active blog section mockups
  - highlighted award and social proof section
- `Brand_assets/wide-transport-brand-guidelines.html` — brand guideline reference file
- `wide-vs-whimsy-full-deck.html` — competitor comparison and website improvement analysis
- `screenshot.js` — Puppeteer script to capture a screenshot of any web page or local HTML file
- `package.json` — project metadata and Puppeteer dependency

## View the website

Open `index.html` directly in your browser to preview the redesign.

## Puppeteer screenshot utility

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Install Node.js from https://nodejs.org/
2. In this project folder, run:

```bash
npm install
```

### Usage

Capture a screenshot of a live website:

```bash
node screenshot.js https://example.com
```

Capture a screenshot of the local redesign preview:

```bash
node screenshot.js "file:///C:/Users/azerg/Website%20Building/index.html"
```

The screenshot will be saved as `screenshot.png` in the current directory.

## Notes

- The redesign is a prototype meant for presentation and further development.
- The login, application, and PDF download sections are mockups and need backend integration to become fully functional.
- The GitHub repository is available at `https://github.com/Azerg2000/Wide-Test-Website`.
