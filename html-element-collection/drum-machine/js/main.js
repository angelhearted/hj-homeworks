const drumSelectors = [
  '.key-clap',
  '.key-hihat',
  '.key-kick',
  '.key-openhat',
  '.key-boom',
  '.key-ride',
];
const drums = document.querySelector('.drum-kit');

drumSelectors.forEach(sel => {
  drums.querySelector(sel).addEventListener('click', () => {
    const audio = drums.querySelector(sel + ' audio');
    restart(audio);
  });
});

function restart(audio) {
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
}