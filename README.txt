UZAZI WELLNESS CARE — DEVELOPER UPLOAD PACKAGE
================================================

PROJECT STRUCTURE
-----------------
After extracting this ZIP you should see exactly these files:

    Uzazi-Wellness-Care-Website/
    ├── index.html         ← main page (HTML)
    ├── style.css          ← all site styling
    ├── app.js             ← navigation + scroll animations
    ├── assets/
    │   └── logo.png       ← brand logo
    └── README.txt         ← this file

If any of those files appear missing, the ZIP did not finish downloading
or extracting fully — re-download and try again.

UPLOAD INSTRUCTIONS (Hostinger)
-------------------------------
1. Log into Hostinger → File Manager → public_html
2. Upload ALL of these to public_html (NOT the folder, just the contents):
       index.html
       style.css
       app.js
       assets/   (the entire folder including logo.png)
3. Visit your domain — site loads instantly.

The relative paths inside index.html are:
    href="style.css"
    src="app.js"
    src="assets/logo.png"

So `style.css`, `app.js`, and the `assets/` folder MUST sit next to
`index.html` in whichever directory you upload to.

PRE-LAUNCH CHECKLIST
--------------------
[ ] Replace placeholder email `hello@uzaziwellnesscare.com` with the
    real address (search in index.html).
[ ] Replace placeholder phone `+254 000 000 000` with the real number.
[ ] Connect the contact form — currently routes via mailto. Consider
    Formspree, Netlify Forms, or a backend endpoint.
[ ] Add Google Analytics / Plausible — paste snippet before `</head>`
    in index.html.
[ ] Set up custom domain DNS at Hostinger to point uzaziwellness.com
    (or your chosen domain) to the hosting account.
[ ] Add SPF / DKIM / DMARC DNS records for any email addresses on the
    domain so emails don't land in spam.
[ ] Plan M-Pesa / Flutterwave payment integration for the booking flow
    (will require a small backend or third-party widget).

BRAND
-----
Forest green #0f3431, rose-gold #c5916a — matches the Legacy Care Africa
family palette.

EDITING
-------
Plain HTML, CSS, and JavaScript. No build step, no frameworks. Any
developer can open index.html / style.css / app.js in a text editor and
edit directly.
