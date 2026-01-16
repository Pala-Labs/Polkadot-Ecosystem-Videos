# Changelog

## Latest Update - Filters, Sorting & Contribution Form

### New Features

#### 1. Language Filter
- **Location**: Content header, next to title
- **Options**: All Languages, English
- **Functionality**:
  - Filter videos by language
  - Only applies to video content (images not affected)
  - Works in combination with other filters
  - Language data stored in content.json

#### 2. Sort Options
- **Location**: Content header, next to language filter
- **Options**:
  - Newest First (default) - Sort by upload date, newest first
  - Oldest First - Sort by upload date, oldest first
  - Title (A-Z) - Alphabetical sorting by title
- **Features**:
  - Applies to all content types (videos and images)
  - Works with filters and search
  - Upload dates stored in content.json

#### 3. Contribution Form
- **Trigger**: "Contribute" button in header actions area
- **Purpose**: Allow community members to submit content for the archive
- **Form Fields**:
  - Name (required)
  - Email (required)
  - Content Type dropdown (Video/Image/Both)
  - Description textarea (required)
  - Link to content (optional URL field)
- **Submission**: Opens user's email client with pre-filled message to insights@palalabs.org
- **Features**:
  - Modal overlay interface
  - Clean, accessible form design
  - Email template with all form data
  - Can close with Escape key or close button

#### 4. Updated Image Titles
- **Change**: All images renamed from "Polkadot Ecosystem Event Photo X" to "Image 1", "Image 2", etc.
- **Reason**: Simpler, cleaner naming convention
- **Applied to**: All 10 images in content.json

### How to Use New Features

#### Filter by Language:
1. Look for the "Language" dropdown in the content header
2. Select "English" to show only English videos
3. Select "All Languages" to show all content

#### Sort Content:
1. Look for the "Sort by" dropdown next to the language filter
2. Choose your preferred sorting:
   - Newest First (most recent uploads first)
   - Oldest First (oldest uploads first)
   - Title (A-Z) (alphabetical order)

#### Submit Content:
1. Click the "Contribute" button with plus icon
2. Fill out the contribution form with your details
3. Click "Send Email" to open your email client
4. Send the pre-filled email to submit your content

### Technical Details

**Files Modified**:
- `content.json`: Added language and uploadDate fields to all videos, renamed images
- `script.js`: Added filtering, sorting, and contribution form logic
- `index.html`: Added filter dropdowns and contribution modal (already implemented)
- `styles.css`: Added filter and form styling (already implemented)

**New State Variables**:
- `currentLanguage` (string) - Current language filter selection
- `currentSort` (string) - Current sort method

**New Functions**:
- `handleLanguageFilter(language)` - Updates language filter
- `handleSort(sortType)` - Updates sort method
- `sortMedia(media)` - Sorts media array based on currentSort
- `openContributeModal()` - Opens contribution form modal
- `closeContributeModal()` - Closes contribution form modal
- `handleContributeSubmit(e)` - Handles form submission via mailto

**Content.json Schema Updates**:
```json
{
  "id": "vid-X",
  "type": "video",
  "title": "...",
  "language": "English",
  "uploadDate": "2024-XX-XX",
  ...
}
```

### Browser Compatibility
- All modern browsers support mailto links
- Email client must be configured for contribution form
- All features degrade gracefully

## Previous Update - Enhanced UI & Navigation

### New Features

#### 1. Resource Count Cards
- **Location**: Next to page title in content header
- **Display**: Shows count of videos and images
- **Format**: "Videos 7" and "Images 10" in styled cards
- **Features**:
  - Icon for each resource type (video/image)
  - Hover animation (lift effect)
  - Updates automatically based on content.json
  - Responsive design (stacks on mobile)

#### 2. Collapsible Sidebar
- **Toggle Button**: Hamburger icon at top of sidebar
- **Two States**:
  - **Expanded** (default): Shows icons + text labels (240px wide)
  - **Collapsed**: Shows icons only (70px wide)
- **Features**:
  - Smooth animation transition
  - Tooltips on hover in collapsed mode (title attributes)
  - State persists in localStorage
  - Footer text hides when collapsed
  - More content viewing area when collapsed

#### 3. Improved Content Header Layout
- **Left-aligned**: Content starts from the left side
- **Better Organization**:
  - Title + Resource counts on the left
  - Action buttons (Select Multiple) on the right
  - Selection toolbar appears when items are selected
- **Responsive**:
  - Stacks vertically on mobile
  - Full-width buttons on small screens

### Previous Features (Already Implemented)

#### Multi-Select Download
- Select multiple videos/images with checkboxes
- Batch download with stagger delay
- Visual selection with pink borders
- Selection counter and toolbar

#### Automatic Metadata Fetching
- File size, duration, language, upload date
- Topic tags from Archive.org
- Loads automatically when viewing videos
- Beautiful metadata display grid

### How to Use New Features

#### Collapse/Expand Sidebar (Desktop):
1. Look for the hamburger button at the top of the sidebar
2. Click to toggle between expanded and collapsed states
3. In collapsed mode, hover over icons to see tooltips
4. Your preference is saved automatically

#### View Resource Counts:
- Automatically displayed next to the page title
- Shows: "Videos X" and "Images X"
- Updates when you filter content

### Technical Details

**Files Modified**:
- `index.html`: Added sidebar toggle button, resource count container, restructured header
- `styles.css`: Added collapsible sidebar styles, resource count card styles, responsive updates
- `script.js`: Added `toggleSidebar()`, `updateResourceCounts()`, localStorage state management

**CSS Classes Added**:
- `.sidebar.collapsed` - Collapsed sidebar state
- `.sidebar-header` - Sidebar header container
- `.sidebar-toggle` - Toggle button
- `.resource-count-card` - Individual count cards
- `.resource-count-icon/label/number` - Card components
- `.content-header-top/left/actions` - New header layout

**LocalStorage Keys**:
- `sidebarCollapsed` (boolean) - Sidebar state persistence
- `theme` (string) - Theme preference (already existed)

### Browser Compatibility
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Smooth animations with CSS transitions
- Graceful degradation on older browsers
- Mobile responsive (hamburger hidden on mobile, uses existing mobile menu)

### Future Enhancements (Potential)
- Keyboard shortcuts (e.g., Ctrl+B to toggle sidebar)
- Drag to resize sidebar
- More resource statistics in count cards
- Animation preferences
