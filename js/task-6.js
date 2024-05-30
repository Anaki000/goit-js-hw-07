function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput  = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createMarkup)
btnDestroy.addEventListener("click", boxDestroy)

const step = 10;

function createMarkup() {
  if (amountInput.value < 1 || amountInput.value > 100) {
    alert('Будь ласка, введіть число від 1 до 100.')
    return
  }
  createBox(amountInput.value)
}


function createBox(amount) {
  boxDestroy();
  for (let i = 0; i < amount; i++) {
    const size = 30 + step * i;
    let box = document.createElement("div");
    box.style.height = `${size}px`;
    box.style.maxWidth = `${size}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`
    boxes.append(box)
  }
  amountInput.value = "";
}

function boxDestroy() {
  boxes.innerHTML = "";
}


