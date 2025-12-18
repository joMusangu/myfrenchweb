# GitHub Pages Deployment Guide

## Quick Setup Steps

1. **Move files to root** (if not already done):
   - Move `public/index.html` → `index.html`
   - Move `public/styles.css` → `styles.css`
   - Move `public/script.js` → `script.js`
   - Keep `audio/` and `essays/` folders at root level

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - **Deploy from a branch**: Choose `main` or `master`
     - **Folder**: Select `/ (root)`
   - Click **Save**

3. **Wait for deployment**:
   - GitHub will build and deploy your site
   - You'll see a green checkmark when it's ready
   - Your site will be available at: `https://[your-username].github.io/[repository-name]/`

## Alternative: Using GitHub Actions (Already Configured)

If you prefer automatic deployment:
- The `.github/workflows/static.yml` file is already set up
- Just push your changes and GitHub Actions will deploy automatically
- Make sure GitHub Pages is enabled in Settings → Pages

## File Structure for GitHub Pages

```
portfolio-website/
├── index.html          (main page)
├── styles.css          (styles)
├── script.js           (JavaScript)
├── audio/              (audio files)
├── essays/             (essay files)
├── independent/         (independent stories - optional)
└── .github/
    └── workflows/
        └── static.yml  (deployment workflow)
```

## Important Notes

- **All paths are relative** (no leading `/`) to work with GitHub Pages subdirectories
- Audio files should be in the `audio/` folder
- Essay PDFs should be in the `essays/` folder (if you have any)
- Google Docs links work from anywhere (they're external)

## Troubleshooting

- If styles/scripts don't load: Check that file paths don't start with `/`
- If audio doesn't play: Ensure audio files are committed to the repository
- Deployment can take 1-2 minutes after pushing

