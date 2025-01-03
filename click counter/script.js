
const clickButton = document.getElementById('clickButton');
const counterElement = document.getElementById('counter');

let clickCount = 0;

clickButton.addEventListener('click', () => {
  clickCount++;
  counterElement.textContent = clickCount;
});
