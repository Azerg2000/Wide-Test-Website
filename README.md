# Puppeteer Screenshot Tool

This project uses Puppeteer to take screenshots of web pages.

## Prerequisites

- Node.js (version 14 or higher)
- npm

## Installation

1. Install Node.js from https://nodejs.org/
2. Run `npm install` to install dependencies (Puppeteer)

## Usage

Run the script with a URL:

```
node screenshot.js https://example.com
```

Or for a local HTML file:

```
node screenshot.js "file:///path/to/your/file.html"
```

The screenshot will be saved as `screenshot.png` in the current directory.

If no URL is provided, it defaults to https://example.com.

## Troubleshooting

- Ensure Node.js and npm are installed.
- Puppeteer downloads Chromium automatically on first run.
- For local files, use the full file:// URL with proper encoding (e.g., %20 for spaces).