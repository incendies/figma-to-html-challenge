document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');

    playButton.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/mUGYPlAgJPw'; 
        iframe.width = '800px';
        iframe.height = '450px';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    });
});