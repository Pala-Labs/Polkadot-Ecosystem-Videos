# New Features

## 1. Multi-Select Download

Users can now select multiple videos and images to download at once:

### How to Use:
1. Click the **"Select Multiple"** button in the content header
2. Checkboxes appear on all media cards
3. Click on cards or checkboxes to select items
4. Selected items are highlighted with a pink border
5. A toolbar appears showing the count of selected items
6. Click **"Download Selected"** to download all selected files
7. Click **"Clear"** to deselect all items
8. Click **"Cancel Selection"** to exit selection mode

### Features:
- Visual selection with checkboxes and pink borders
- Selection counter in toolbar
- Batch download with 500ms stagger between files (prevents browser blocking)
- Works for both videos (Archive.org) and images (local)
- ESC key exits selection mode
- Persistent selection across filter/search changes

## 2. Automatic Metadata Fetching

When you click on a video from Archive.org, the site automatically fetches and displays metadata:

### Displayed Information:
- **File Size**: Automatically detected from Archive.org (in MB)
- **Duration**: Extracted from video file metadata (formatted as MM:SS or HH:MM:SS)
- **Language**: Language of the content
- **Upload Date**: When the video was uploaded to Archive.org
- **Topics/Tags**: Subject tags as colorful badges (e.g., Polkadot, Blockchain, JAM)

### How It Works:
1. Click any Archive.org video to open the modal
2. Metadata section appears below the description
3. Initial "Loading..." state while fetching data
4. Archive.org API is queried: `https://archive.org/metadata/{archiveId}`
5. Data is parsed and displayed in a clean, organized grid
6. Topic tags appear as pink badges below the metadata grid

### API Integration:
- Uses Archive.org's public metadata API
- No authentication required
- Fetches from: `https://archive.org/metadata/{archiveId}`
- Extracts data from JSON response:
  - `files[]` array for file size and duration
  - `metadata.language` for language
  - `metadata.publicdate` or `metadata.addeddate` for upload date
  - `metadata.subject` for topic tags (can be string or array)

### Benefits:
- No manual data entry needed
- Always up-to-date information
- Professional presentation
- Users see comprehensive details about each video
- Helps users make informed decisions before downloading

## Technical Implementation

### Files Modified:
- **index.html**: Added metadata display section and selection toolbar
- **styles.css**: Added styles for checkboxes, selection toolbar, and metadata display
- **script.js**:
  - Added `fetchArchiveMetadata()` function for API calls
  - Added `toggleSelectMode()`, `toggleSelection()`, and `downloadSelected()` functions
  - Enhanced video modal to show metadata
  - Added checkbox rendering in media cards

### Performance:
- Metadata fetched asynchronously (doesn't block UI)
- Downloads are staggered to prevent browser blocking
- Selection state managed efficiently with JavaScript Set

### Browser Compatibility:
- Works in all modern browsers
- Graceful fallback if metadata fetch fails
- Cross-origin requests allowed by Archive.org CORS policy
