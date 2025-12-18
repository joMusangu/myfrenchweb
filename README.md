# Portfolio Website

A clean, blog-style portfolio website showcasing your semester accomplishments including audio projects, independent stories, and essays.

## Local Development

1. Install dependencies (optional - only needed if using the Node.js server):
```bash
npm install
```

2. Start the server (optional):
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## GitHub Pages Deployment

This website is configured to work with GitHub Pages as a static site.

### Quick Setup:

1. **Push your code to GitHub** (if not already done)

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - **Deploy from a branch**: Choose `main` or `master`
     - **Folder**: Select `/ (root)`
   - Click **Save**

3. **Wait for deployment**:
   - GitHub will build and deploy your site automatically
   - You'll see a green checkmark when it's ready
   - Your site will be available at: `https://[your-username].github.io/[repository-name]/`

### File Structure for GitHub Pages

```
portfolio-website/
├── index.html          # Main page (root level)
├── styles.css          # Styles (root level)
├── script.js           # JavaScript (root level)
├── audio/              # Audio project files
├── essays/             # Essay files (optional)
├── independent/        # Independent story files (optional)
└── .github/
    └── workflows/
        └── static.yml  # GitHub Actions deployment
```

## Features

- 🎵 Audio player for audio files
- 📚 Organized sections for different content types
- ✍️ Special highlighting for final essays
- 📱 Responsive design that works on all devices
- 🎨 Clean, blog-style UI

## Supported File Types

- **Audio**: MP3, WAV, OGG, M4A (with embedded player)
- **Essays/Stories**: Google Docs links (external)

## Important Notes

- All file paths are relative (no leading `/`) to work with GitHub Pages
- Audio files should be in the `audio/` folder
- Google Docs links work from anywhere (they're external)
- The site works as a static site - no server required for GitHub Pages

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

