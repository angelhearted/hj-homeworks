const songs = [
  'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3',
  'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3',
  'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
];

const player = new Player(songs);

function Player(songs) {
  const p = document.querySelector('.mediaplayer');
  const audio = p.querySelector('audio');
  let songNum = 0;

  // play/pause
  p.querySelector('.playstate').addEventListener('click', () => {
    p.classList.toggle('play');
    isPlaying() ? audio.pause() : audio.play();
  });

  // stop
  p.querySelector('.stop').addEventListener('click', () => {
    if (isPlaying()) {
      p.classList.remove('play');
      audio.pause();
    }
    audio.currentTime = 0;
  });

  // back
  p.querySelector('.back').addEventListener('click', () => {
    const played = isPlaying();
    const newSong = getSongByShift(-1);
    setTitle(getTitle(newSong));
    
    if (played) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.src = newSong;
    played && audio.play();
  });

  // next
  p.querySelector('.next').addEventListener('click', () => {
    const played = isPlaying();
    const newSong = getSongByShift(1);
    setTitle(getTitle(newSong));
    
    if (played) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.src = newSong;
    played && audio.play();
  });

  function isPlaying() {
    return !audio.paused;
  }

  function setTitle(url) {
    p.querySelector('.title').title = getTitle(url);
  }

  function getTitle(url) {
    return url.substr(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
  }

  function getSongByShift(shift) {
    songNum += shift;
    songNum = songNum >= songs.length
      ? 0
      : songNum < 0
      ? songs.length - 1
      : songNum;
    return songs[songNum];
  }
}