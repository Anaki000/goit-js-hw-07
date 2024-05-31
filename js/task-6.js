function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);



function createBoxes() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;
      fragment.appendChild(box); 
    }

    boxesDiv.innerHTML = ''; 
    boxesDiv.appendChild(fragment); 

    input.value = '';
  } else {
    alert('Будь ласка, введіть число від 1 до 100.');
  }
}


function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

