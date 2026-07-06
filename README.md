# Piranha Bar Clone

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
