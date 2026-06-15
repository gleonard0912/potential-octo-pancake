const counter = document.querySelector('#counter');
const incrementButton = document.querySelector('#increment');

let count = 0;

incrementButton.addEventListener('click', () => {
  count += 1;
  counter.textContent = count.toString();
});
