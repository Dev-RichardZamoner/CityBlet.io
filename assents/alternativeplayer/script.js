const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pausar';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Tocar';
  }
});
