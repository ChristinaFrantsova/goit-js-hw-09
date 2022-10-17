function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

// Спосіб № 1
buttonStart.addEventListener('click', onStartButtonColorChange);
buttonStop.addEventListener('click', onStopButtonColorChange);
let timer = null;
buttonStop.disabled = true;

function colorChanger() {
  body.style.backgroundColor = getRandomHexColor();
}

function onStartButtonColorChange(event) {
  timer = setInterval(colorChanger, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function onStopButtonColorChange(event) {
  clearInterval(timer);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

// Спосіб №2

// buttonStart.addEventListener('click', () => {
//   timeBar = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//     buttonStart.disabled = true;
//     buttonStop.disabled = false;
//   }, 1000);
// });

// buttonStop.addEventListener('click', () => {
//   clearInterval(timeBar);
//   buttonStart.disabled = false;
//   buttonStop.disabled = true;
// });
