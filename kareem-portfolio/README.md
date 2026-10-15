# Kareem Hawash portfolio
- `index.html`: the portfolio (HTML, CSS, JS, no build step). `studygo/`: the separate Study Go product website, linked from the Projects and Journey sections (and back from its footer).
- Preview: open `index.html`, or run `python3 -m http.server 8000` here and visit http://localhost:8000. Internet is needed for the Google Fonts.
- Deploy: upload this whole folder (keep `studygo/` inside it) to Netlify, Vercel, GitHub Pages or Cloudflare Pages. If you host Study Go elsewhere, change the `href` of the "Explore Project" button (`id="sgLink"`) in `index.html`.
- Replace photos in `assets/` keeping the same file names. Certificates: `assets/cert-*.jpg` (the PSU one has the participant ID hidden).
