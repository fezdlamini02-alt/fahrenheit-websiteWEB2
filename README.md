# Fahrenheit Seafood and Grill Website

A responsive restaurant website for Fahrenheit Seafood and Grill, created as part of WEDE Part 2.

## Author

Created by: Mbali Dlamini  
Student Number: ST10506754

## Project Overview

The site presents the restaurant's seafood menu, gallery, contact details, reservation form, and enquiry form.

## Project Structure

```text
assets/
  css/
    style.css
  images/
    calamari_rings.jpg
    chef_preparing.jpg
    grilled_salmon.jpg
    hero.jpg
    restaurant_interior.jpg
    seafood_platter.jpg
    calamari_rings.svg
    chef_preparing.svg
    grilled_salmon.svg
    hero.svg
    restaurant_interior.svg
    seafood_platter.svg
  js/
    script.js
contact.html
enquiry.html
index.html
menu.json
robots.txt
```

`index.html` contains the home page, menu, gallery, FAQs, and reservation form. Contact details, the contact form, and embedded map are on `contact.html`; the enquiry form is on `enquiry.html`.

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

The Netlify production site is publicly accessible to anyone who has its URL. Each page asks search engines not to index it, and no sitemap is published. This reduces the chance of people finding it through search, but it does not restrict access: anyone who receives or forwards the link can open the site. Use Netlify password protection or account-based access if access must be limited.

## Forms and Deployment

The site is hosted on Netlify. Netlify Forms receives reservation, contact, and enquiry submissions; review submissions in the site's Netlify dashboard. Form submission requires a successful Netlify deployment with form detection enabled. When testing from a local static file or server, the forms cannot be delivered to Netlify.

Menu loading uses `fetch`, so run the site through a web server or the deployed site rather than opening `index.html` directly as a `file:` URL.

## Run the Website Locally

From the project root, start a local server:

```sh
py -m http.server 8000
```

Open <http://localhost:8000> in a browser. Keep the terminal open while using the site; press Ctrl+C to stop the server. Python 3 must be installed and available through the `py` launcher.

## Technologies

- HTML
- CSS
- JavaScript
- JSON
- Netlify Forms
- Google Maps embed

## References

- Google Maps Platform, “Get started with Google Maps URLs.” <https://developers.google.com/maps/documentation/urls/get-started>
- Netlify Docs, “Set up forms.” <https://docs.netlify.com/forms/setup/>

Image attribution details for files in `assets/images/` were not recorded in the repository. Verify the original creators, sources, and licences and add citations here before submission if any assets are externally sourced.

## Deployment

- Repository: [GitHub repository](https://github.com/fezdlamini02-alt/fahrenheit-websiteWEB2)
- Live site: [Netlify deployment](https://fahrenheit-websiteweb.netlify.app/)
