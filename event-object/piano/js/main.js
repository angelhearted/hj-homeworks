const piano = new Piano();

function Piano() {
  const states = {
    LO: 'lower',
    MI: 'middle',
    HI: 'higher'
  };
  let state = states.MI;
  const sounds = {
    [states.LO]: [
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
    ],
    [states.MI]: [
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
    ],
    [states.HI]: [
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
      'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
    ]
  };

  const audios = Array.from(document.getElementsByTagName('audio'));
  const buttons = Array.from(document.getElementsByTagName('li'));
  buttons.forEach((btn, i) => 
    btn.addEventListener('click', () => replay(audios[i]))
  );

  // init audios
  setState(state);

  document.addEventListener('keydown', event => {
    if (event.shiftKey && state !== states.LO) {
      setState(states.LO);
    } else if (event.altKey && state !== states.HI) {
      setState(states.HI);
    }
  });

  document.addEventListener('keyup', event => {
    if (state !== state.MI && !event.shiftKey && !event.altKey) {
      setState(states.MI);
    }
  });

  function setState(newState) {
    const instr = document.getElementsByClassName('set')[0];
    instr.classList.toggle(state);
    instr.classList.toggle(newState);
    state = newState;

    audios.forEach((audio, i) => {
      audio.src = sounds[state][i];
    });
  }

  function replay(audio) {
    audio.currentTime = 0;
    audio.play();
  }
}