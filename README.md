# Polkadot Ecosystem Media Archive

A modern YouTube-like interface for browsing and downloading Polkadot ecosystem content including videos and images, funded by Polkadot OpenGov.

## Features

- **YouTube-like Interface**: Clean, modern grid layout with smooth navigation
- **Dual Source Support**:
  - Videos hosted on Internet Archive
  - Images stored locally in the repository
- **Light & Dark Mode**: Fully themed UI with automatic system preference detection
- **Search & Filter**: Real-time search and filtering by content type (Videos/Images/All)
- **Language Filter**: Filter videos by language (English, All Languages)
- **Sort Options**: Sort content by upload date (newest/oldest) or title (A-Z)
- **Multi-Select Download**: Select multiple videos/images and download them in batch
- **Auto Metadata**: Automatically fetches file size, duration, language, and tags from Archive.org
- **Contribution Form**: Community members can submit content via email form
- **Video Player**: Full-screen modal video player with controls
- **Image Lightbox**: High-quality image viewer with download capability
- **Collapsible Sidebar**: Toggle between full and icon-only sidebar view
- **Mobile Responsive**: Works perfectly on all screen sizes
- **GitHub Pages Ready**: Static HTML/CSS/JS - no build process required

## Live Demo

Visit: `https://yourusername.github.io/Polkadot-Ecosystem-Videos/`

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Polkadot-Ecosystem-Videos.git
cd Polkadot-Ecosystem-Videos
```

2. Start a local server (required for loading JSON):
```bash
# Python 3
python3 -m http.server 8000

# Or using Node.js
npx http-server -p 8000

# Or using PHP
php -S localhost:8000
```

3. Open your browser to `http://localhost:8000`

## Adding Content

### Adding Videos (Internet Archive)

1. Upload your video to Internet Archive
2. Note the Archive ID (from the URL: `archive.org/details/YOUR-ARCHIVE-ID`)
3. Add an entry to `content.json`:

```json
{
  "id": "unique-id",
  "type": "video",
  "title": "Your Video Title",
  "archiveId": "YOUR-ARCHIVE-ID",
  "filename": "exact-filename-on-archive.mp4",
  "description": "Video description here",
  "duration": "12:34",
  "language": "English",
  "uploadDate": "2024-01-15"
}
```

### Adding Local Images

1. Place your image in `assets/photos/`
2. Add an entry to `content.json`:

```json
{
  "id": "unique-id",
  "type": "image",
  "source": "local",
  "url": "assets/photos/your-image.jpg",
  "title": "Your Image Title",
  "filename": "your-image.jpg",
  "description": "Image description here"
}
```

## Uploading Videos to Internet Archive

1. Go to [archive.org](https://archive.org) and create an account
2. Click "Upload" in the top navigation
3. Fill in the metadata:
   - **Identifier**: Choose a unique ID (will be your archiveId)
   - **Title**: Video title
   - **Description**: Video description
   - **Subject tags**: polkadot, web3, blockchain, etc.
   - **License**: Choose appropriate license (e.g., Creative Commons)
4. Upload your video file
5. Wait for processing to complete
6. Use the identifier as `archiveId` in content.json

## Deploying to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

3. Your site will be live at: `https://yourusername.github.io/Polkadot-Ecosystem-Videos/`

## Project Structure

```
Polkadot-Ecosystem-Videos/
├── index.html              # Main HTML structure
├── styles.css              # All styling and themes
├── script.js               # JavaScript functionality
├── content.json            # Media content database
├── README.md               # This file
└── assets/
    ├── photos/             # Local image files
    └── polkadot-brand-assets/  # Logos and brand assets
        ├── light.svg
        ├── dark.svg
        └── favicon-dark.svg
```

## Technical Details

- **Pure Static**: No frameworks, no build process, no dependencies
- **Modern CSS**: Uses CSS custom properties for theming
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Semantic HTML, ARIA labels, keyboard shortcuts
- **Performance**: Lazy loading images, efficient rendering

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Content Guidelines

When adding content, ensure:
- Videos are properly uploaded to Internet Archive
- Archive IDs are correct and publicly accessible
- Local images are optimized for web (recommended < 500KB each)
- Titles and descriptions are clear and descriptive
- Content is appropriate and aligns with Polkadot OpenGov funding

## Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #E6007A;  /* Polkadot pink */
    --accent-hover: #C5006A;
    /* Add your custom colors */
}
```

### Adding More Filters

1. Add navigation link in `index.html` sidebar
2. Update filter logic in `script.js`
3. Add corresponding data attribute to content items

## License

This project is open source. Content is funded by Polkadot OpenGov.

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Support

For issues or questions, please open an issue on GitHub.

---

Built with care for the Polkadot ecosystem
