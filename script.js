document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('video-grid');

    try {
        const response = await fetch('videos.json');
        const videos = await response.json();

        videos.forEach(video => {
            const card = createVideoCard(video);
            grid.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading videos:', error);
        grid.innerHTML = '<p style="text-align:center; color: #86868b;">Failed to load video library.</p>';
    }
});

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // Construct Archive.org URLs
    // Base: https://archive.org/download/[ID]/[FILENAME]
    const baseUrl = `https://archive.org/download/${video.archiveId}`;
    const videoUrl = `${baseUrl}/${encodeURIComponent(video.filename)}`;
    const detailsUrl = `https://archive.org/details/${video.archiveId}`;

    // Attempting to guess a thumbnail or just use the video itself
    // Standard Archive.org thumb is usually __ia_thumb.jpg but not always reliable for all types.
    // We will just use the video tag with preload which usually shows the first frame.

    card.innerHTML = `
        <div class="video-preview-container">
            <video class="video-preview" preload="metadata" controls>
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="card-content">
            <h3 class="video-title" title="${video.title}"><a href="${detailsUrl}" target="_blank" style="text-decoration:none; color:inherit;">${video.title}</a></h3>
            <div class="video-meta">
                <span class="meta-item">${video.duration || 'Video'}</span>
                <span class="meta-item">&bull;</span>
                <span class="meta-item">Archive.org</span>
            </div>
            <p class="tiny-text" style="margin-bottom: 12px; color: #666;">${video.description || ''}</p>
            <div class="card-actions">
                <a href="${detailsUrl}" target="_blank" class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    View on Archive
                </a>
                <a href="${videoUrl}" class="btn btn-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                </a>
            </div>
        </div>
    `;

    return card;
}
