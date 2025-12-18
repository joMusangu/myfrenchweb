# Portfolio Website

A beautiful portfolio website showcasing your semester accomplishments including audio projects, independent stories, and essays.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your files to the appropriate directories:
   - **Audio files**: Place in the `/audio` directory
   - **Independent stories**: Place in the `/independent` directory
   - **Essays**: Place in the `/essays` directory
     - The final essay "Pourquoi le français?" will be automatically featured if found

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## File Structure

```
portfolio-website/
├── audio/              # Audio project files
├── essays/             # Essay files (including final essay)
├── independent/        # Independent story files
├── public/            # Website files
│   ├── index.html     # Main page
│   ├── styles.css     # Styling
│   └── script.js      # JavaScript functionality
├── server.js          # Node.js server
├── package.json       # Project configuration
└── README.md          # This file
```

## Features

- 🎵 Audio player for audio files
- 📚 Organized sections for different content types
- ✍️ Special highlighting for the final essay "Pourquoi le français?"
- 📱 Responsive design that works on all devices
- 🎨 Modern, beautiful UI with gradient effects

## Supported File Types

- **Audio**: MP3, WAV, OGG, M4A (with embedded player)
- **Essays/Stories**: PDF, DOCX, TXT, and other document formats

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

