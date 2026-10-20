# Fahrenheit Seafood and Grill Website

A responsive restaurant website for Fahrenheit Seafood and Grill, created as part of WEDE Part 2.

## Author

Created by: Mbali Dlamini  
Student Number: ST10506754

## Project Overview

The site presents the restaurant's seafood menu, gallery, contact details, reservation form, and enquiry form.

## Files

- `index.html` — home page, menu, gallery, FAQs, reservation, and contact form
- `contact.html` — contact details, contact form, and embedded map
- `enquiry.html` — enquiry form
- `style.css` — responsive styling and reduced-motion-aware transitions
- `script.js` — menu loading/search, form submission, FAQ accordion, lightbox, and reveal animations
- `menu.json` — menu content
- `robots.txt` — allows search crawlers to read the pages' no-index instructions
- `Images/` — optimized restaurant and menu images

## Functionality

- Menu cards load from `menu.json`; the search filters by dish name, category, and description.
- Gallery images open in an accessible dialog lightbox with keyboard dismissal.
- FAQ entries expand and collapse with buttons that expose their expanded state to assistive technology.
- Forms validate in the browser and submit asynchronously through Netlify Forms.
- Reservation dates cannot be set in the past.
- The contact page embeds a Google Maps location map without requiring a Maps API key.
- Navigation, button, gallery, and section reveal transitions include reduced-motion support.
- Non-critical images load lazily; image assets are resized and recompressed where that reduces file size.

## Link-Only Sharing

The Netlify production site is publicly accessible to anyone who has its URL. Each page and Netlify response asks search engines not to index it, and no sitemap is published. This reduces the chance of people finding it through search, but it does not restrict access: anyone who receives or forwards the link can open the site. Use Netlify password protection or account-based access if access must be limited.

## Forms and Deployment

The site is hosted on Netlify. Netlify Forms receives reservation, contact, and enquiry submissions; review submissions in the site's Netlify dashboard. Form submission requires a successful Netlify deployment with form detection enabled. When testing from a local static file or server, the forms cannot be delivered to Netlify.

Menu loading uses `fetch`, so run the site through a web server or the deployed site rather than opening `index.html` directly as a `file:` URL.

## Run the Website on Windows

Double-click `START WEBSITE.bat` to start a local web server and open the site in your browser. Keep the command window open while using the website; press Ctrl+C in that window to stop the server. Python 3 must be installed and available through the Windows `py` launcher.

## Technologies

- HTML
- CSS
- JavaScript
- JSON
- Netlify Forms
- Google Maps embed

## Deployment

- Repository: [GitHub repository](https://github.com/fezdlamini02-alt/fahrenheit-websiteWEB2)
- Live site: [Netlify deployment](https://fahrenheit-websiteweb.netlify.app/)
