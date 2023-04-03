function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonStart: document.querySelector('.first-button'),
  buttonStop: document.querySelector('.second-button'),
  body: document.querySelector('body'),
};

// Спосіб № 1
refs.buttonStart.addEventListener('click', onStartButtonColorChange);
refs.buttonStop.addEventListener('click', onStopButtonColorChange);
let timer = null;
// buttonStop.disabled = true;

function colorChanger() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStartButtonColorChange(event) {
  timer = setInterval(colorChanger, 1000);
  refs.buttonStart.disabled = true;
  refs.buttonStop.disabled = false;
}

function onStopButtonColorChange(event) {
  clearInterval(timer);
  refs.buttonStart.disabled = false;
  refs.buttonStop.disabled = true;
}

// Спосіб №2

// refs.buttonStart.addEventListener('click', () => {
//   timer = setInterval(() => {
//     refs.body.style.backgroundColor = getRandomHexColor();
//     refs.buttonStart.disabled = true;
//     refs.buttonStop.disabled = false;
//   }, 1000);
// });

// refs.buttonStop.addEventListener('click', () => {
//   clearInterval(timer);
//   refs.buttonStart.disabled = false;
//   refs.buttonStop.disabled = true;
// });
