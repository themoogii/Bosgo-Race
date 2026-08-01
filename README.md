# Bosgo Race 2026

This folder contains a static local clone of `https://piranhabar.ie/`.

Run it from this directory:

```sh
python3 -m http.server 8088
```

Then open:

```text
http://127.0.0.1:8088/
```

Local cloned pages:

```text
http://127.0.0.1:8088/
http://127.0.0.1:8088/about.html
http://127.0.0.1:8088/contact.html
```

The pages keep the original production markup and reference the original remote CSS, JavaScript, fonts, SVG logos, Lottie assets, images, and MP4 media so the loader, side menu, scroll animations, hover video changes, modal shells, typography, and responsive styling stay as close as possible to the live site.

Because the animation/media assets are loaded from `piranhabar.ie` and CDNs, an internet connection is required for the full visual result.

## Google Sheets registration tracker

The register page can mirror Netlify form submissions into this Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1h1lG9jyI4UNB8ewzbS6B87kInl--Q8CpBWW2nVqy0Jo/edit
```

1. In the Sheet, open `Extensions -> Apps Script`.
2. Paste the code from `google-sheets-apps-script.js`.
3. Save the Apps Script project.
4. Click `Deploy -> New deployment`.
5. Choose `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Deploy and copy the Web App URL.
9. In `register.html`, paste that URL into:

```js
const googleSheetsWebAppUrl = '';
```

After Netlify redeploys, every registration will save to Netlify Forms and also append a row in the Google Sheet.
