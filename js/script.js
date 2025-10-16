// Page navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Audio toggle for video
const video = document.getElementById('heroVideo');
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');

let isMuted = true;
video.muted = true;

audioToggle.addEventListener('click', function() {
    isMuted = !isMuted;
    video.muted = isMuted;
    audioIcon.textContent = isMuted ? '🔊' : '🔇';
});

// Auto-play video with user interaction
video.play().catch(function(error) {
    console.log('Autoplay prevented:', error);
});