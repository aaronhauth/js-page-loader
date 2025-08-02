# Fantasy Football Headless HTML Fetcher

A simple Node.js web service built with Express and Puppeteer that returns fully-rendered HTML from dynamic web pages. Ideal for use with web scraping scripts that require JavaScript execution, such as Google Apps Script projects using CheerioGS.

## Features

* Fetches fully-rendered HTML from dynamic pages (JavaScript execution)
* Simple REST API endpoint
* Lightweight and easy to deploy

## Tech Stack

* **Node.js**
* **Express.js** (web framework)
* **Puppeteer** (headless browser)
* **TypeScript**

## Prerequisites

* Node.js (v18 or higher recommended)
* npm
* Ubuntu/Debian based Linux environment (recommended for Puppeteer compatibility)

## Setup

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <repo-name>
npm install
```

### System Dependencies

To use Puppeteer on a Ubuntu/Debian environment, run:

```bash
sudo apt-get update
sudo apt-get install -y libnspr4 libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm-dev libasound2t64 libpangocairo-1.0-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxfixes3 libxi6 libxrandr2 libxrender1 libxtst6 libgtk-3-0
```

Adjust packages based on your specific system needs.

## Usage

### Local Development

Run the development server with hot-reloading using `ts-node`:

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

### Production

Compile TypeScript to JavaScript and start the server:

```bash
npm run build
npm start
```

## API Endpoint

### Get Rendered HTML

Returns fully-rendered HTML for a given URL.

**Request:**

```
GET /html?url=<URL_TO_SCRAPE>
```

**Example:**

```bash
curl "http://localhost:3000/html?url=https://example.com"
```

**Response:** HTML content of the specified URL after JavaScript execution.


## License

MIT License. See [LICENSE](LICENSE) file for details.
