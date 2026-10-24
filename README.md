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
    calamari-photo.jpg
    chef-photo.jpg
    hero-photo.jpg
    interior-photo.jpg
    platter-photo.jpg
    salmon-photo.jpg
  js/
    script.js
CHANGELOG.md
contact.html
enquiry.html
index.html
menu.json
README.md
robots.txt
WEDE PART 2
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

### Image credits

The following real photographs are from Wikimedia Commons. They are included under their listed Creative Commons licences; creator and source-page credit are provided here. The downloaded thumbnail files are used as provided, without further modification.

| Site file | Photograph and creator | Source | Licence | Accessed |
| --- | --- | --- | --- | --- |
| `hero-photo.jpg` | “Seafood plater at Gold Coast Queensland, Australia, 2019” by Kgbo | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Seafood_plater_at_Gold_Coast_Queensland,_Australia,_2019.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 24 October 2026 |
| `salmon-photo.jpg` | “Salmon and Quinoa dish (39791934733)” by Ella Olsson | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Salmon_and_Quinoa_dish_(39791934733).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | 24 October 2026 |
| `calamari-photo.jpg` | “Yummy Calamari” by Eximiousincorp | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Yummy_Calamari.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 24 October 2026 |
| `platter-photo.jpg` | “Seafood platter at Trennerys Hotel on the Wild Coast (9261400916)” by South African Tourism from South Africa | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Seafood_platter_at_Trennerys_Hotel_on_the_Wild_Coast_(9261400916).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | 24 October 2026 |
| `interior-photo.jpg` | “Restaurant room of Amantaka luxury Resort & Hotel in Luang Prabang Laos” by Basile Morin | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 24 October 2026 |
| `chef-photo.jpg` | “Chef prepares fresh ingredients by chopping red vegetables” by Shixart1985 | [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Chef_prepares_fresh_ingredients_by_chopping_red_vegetables.jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | 24 October 2026 |

The CC BY and CC BY-SA licence terms apply. The CC BY-SA photographs are included without editing; if you adapt them, follow the applicable ShareAlike terms.

Menu and gallery photographs are representative examples from the credited sources; they are not photographs of Fahrenheit Seafood and Grill.

## Deployment

- Repository: [GitHub repository](https://github.com/fezdlamini02-alt/fahrenheit-websiteWEB2)
- Live site: [Netlify deployment](https://fahrenheit-websiteweb.netlify.app/)
