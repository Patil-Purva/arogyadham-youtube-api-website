const channelId = YOUTUBE_CHANNEL_ID;
const apiKey = YOUTUBE_API_KEY;
const maxResults = 12;

// Fetch channel info
fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const channel = data.items[0];
    document.getElementById('channel-profile-pic').src = channel.snippet.thumbnails.high.url;
    document.getElementById('subscriber-count').textContent = Number(channel.statistics.subscriberCount).toLocaleString();
    document.getElementById('video-count').textContent = Number(channel.statistics.videoCount).toLocaleString();
  })
  .catch(error => console.error('Error fetching channel info:', error));

// Fetch videos
fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=${maxResults}`)
  .then(res => res.json())
  .then(data => {
    if (data.items && Array.isArray(data.items)) {
      const gallery = document.getElementById('video-gallery');
      data.items.forEach(video => {
        const vid = document.createElement('div');
        vid.classList.add('video-item');
        vid.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
          <h4>${video.snippet.title}</h4>
        `;
        gallery.appendChild(vid);
      });
    } else {
      document.getElementById('video-gallery').innerHTML = `<p>No videos found or an error occurred.</p>`;
    }
  })
  .catch(error => {
    document.getElementById('video-gallery').innerHTML = `<p>Error loading videos. Please try again later.</p>`;
    console.error('YouTube API Error:', error);
  });

// Optional Like/Share functions
function likeVideo() {
  alert('Thank you for liking the video!');
}

function shareVideo() {
  const shareUrl = 'https://www.youtube.com/channel/UCR2AZ3n2nR2nriCJBvW3y3A';
  navigator.clipboard.writeText(shareUrl).then(() => {
    alert('Channel link copied to clipboard!');
  });
}
