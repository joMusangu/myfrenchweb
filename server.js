const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Serve audio files with proper MIME types
app.use('/audio', express.static('audio', {
    setHeaders: (res, filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        if (ext === '.m4a') {
            res.setHeader('Content-Type', 'audio/mp4');
        } else if (ext === '.mp3') {
            res.setHeader('Content-Type', 'audio/mpeg');
        } else if (ext === '.wav') {
            res.setHeader('Content-Type', 'audio/wav');
        } else if (ext === '.ogg') {
            res.setHeader('Content-Type', 'audio/ogg');
        }
    }
}));

// Serve essays
app.use('/essays', express.static('essays'));

// Serve independent stories
app.use('/independent', express.static('independent'));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get file listings
app.get('/api/files', (req, res) => {
  const audioFiles = fs.existsSync('audio') ? fs.readdirSync('audio').filter(f => !f.startsWith('.')) : [];
  const essayFiles = fs.existsSync('essays') ? fs.readdirSync('essays').filter(f => !f.startsWith('.')) : [];
  const independentFiles = fs.existsSync('independent') ? fs.readdirSync('independent').filter(f => !f.startsWith('.')) : [];
  
  res.json({
    audio: audioFiles,
    essays: essayFiles,
    independent: independentFiles
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio website is running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

