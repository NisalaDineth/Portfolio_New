# Nisala Dineth — creative portfolio

A static, pre-rendered portfolio built with React and Vite. No database, API, account system, or production Node server is needed. The build writes the visible page content into HTML; The layout pairs a compact profile sidebar with one large work viewer. Design, Photo, and Video tabs switch between discipline carousels, with buttons, keyboard arrows, slide selection, and touch swiping. Related assets are composed together on each slide. There is no autoplay.

## Preview and build

- `npm install` (only when dependencies are missing)
- `npm run dev` for local development
- `npm run build` to generate the static site in [dist](./dist)
- `npm run preview` to review the production build

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm`.

Upload the contents of `dist` to any static host. Relative asset URLs also support hosting under a subdirectory. No rewrite rules are required for this single-page site.

## Add more work

Put files in the source [Portfolio folder](./Portfolio), then restart development or rebuild:

- `Portfolio/Graphic Designs/Project name/` for a design gallery.
- `Portfolio/Photo Edits/Project name/` for a photo gallery.
- `Portfolio/Video Editings/Project name/` for video work.

Each immediate project subfolder becomes one project. A file directly under a category becomes its own project. JPG, JPEG, PNG, WebP, AVIF, MP4, WebM, and PDF are supported. Files are ordered alphabetically; name a preferred cover `01-cover.jpg`. Use meaningful folder and file names because they become public labels.

[prepare-gallery.mjs](./scripts/prepare-gallery.mjs) automatically generates [gallery.json](./src/data/gallery.json) before development and builds. Do not edit the generated JSON. Friendly titles for the current projects are defined in [App.jsx](./src/App.jsx).

The supplied 14 images have optimized JPEG copies in [public/previews](./public/previews), totalling about 2.1 MB. Originals are preserved. For new or changed images, place a web-sized preview at `public/previews/<same relative path inside Portfolio>.<original extension>.jpg`, or remove that preview to use the current original on the next build. Keep the longest edge around 1600 pixels. Unsupported design-source formats are intentionally excluded.

Videos are embedded from YouTube only after a video ID is configured; no local MP4 is shipped in the site build.

Video projects are now configured for YouTube in [youtube-videos.json](./src/data/youtube-videos.json). Upload each video to YouTube, paste its video ID next to the matching title, and rebuild. Local MP4 files are intentionally excluded from the published site.

## Free deployment

The included [GitHub Pages workflow](./.github/workflows/deploy-pages.yml) builds and deploys `dist` whenever `main` is pushed. In the repository settings, enable Pages with **GitHub Actions** as the source. The site will be available at `https://<your-github-name>.github.io/Portfolio/`.

## Content and maintenance

The live page uses only the supplied work, with no sample testimonials, invented clients, experience counts, or tool proficiency claims. The contact address `hello@nisaladineth.com` was retained from the previous portfolio; confirm it is your preferred address before publishing.

The previous component files and placeholder project data remain unused for reference. The active page is [App.jsx](./src/App.jsx), styled by [App.css](./src/App.css) and [index.css](./src/index.css).

The preparation script copies new files without deleting old output media. When retiring confidential or unwanted work, also remove its corresponding copies from `public/work` and `public/previews` before rebuilding; removing its source alone removes the gallery entry, not the old public asset.


