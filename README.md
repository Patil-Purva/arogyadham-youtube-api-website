# Shrikrishna Arogyadham - YouTube Video Website

This is a simple website built with HTML, CSS, and JavaScript that fetches and displays videos from the **Shrikrishna Arogyadham** YouTube channel using the YouTube Data API v3.

##  Features

- Displays channel information like name, logo, subscriber count, and video count.
- Loads the latest videos using YouTube Data API.
- Responsive design using custom CSS.
- API key and channel ID are hidden using a separate `config.js` file (excluded from GitHub).

## Live Preview

You can open the `youtube.html` file in a browser to see the website in action locally.

## Project Structure
├── css/
│ ├── style.css
│ └── youtube.css
├── images/
│ ├── book1.jpg
│ └── logo.png
├── js/
│ ├── config.js <-- (Not pushed to GitHub)
│ ├── config.sample.js <-- Sample for your config file
│ ├── script.js
│ └── youtube.js
├── index.html
├── youtube.html
├── .gitignore
└── README.md

## Setup

1. Copy `js/config.sample.js` to `js/config.js`
2. Add your API key and channel ID:

```js
// js/config.js
const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
const YOUTUBE_CHANNEL_ID = 'YOUR_CHANNEL_ID_HERE';

3.Open youtube.html in your browser.
 Don't commit config.js to GitHub. It's listed in .gitignore.

Tech Stack
HTML5
CSS3
JavaScript 
YouTube Data API v3

Notes
You need a valid YouTube Data API key. Get one from Google Cloud Console
Make sure to enable the YouTube Data API for your project.

