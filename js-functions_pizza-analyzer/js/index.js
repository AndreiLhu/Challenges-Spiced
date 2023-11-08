console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaDiameter1 = pizzaInput1.value;
let pizzaDiameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  pizzaDiameter1 = pizzaInput1.value;

  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
});

pizzaInput2.addEventListener("input", () => {
  pizzaDiameter2 = pizzaInput2.value;

  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (pizzaDiameter1 / 2) ** 2 * Math.PI;
  const area2 = (pizzaDiameter2 / 2) ** 2 * Math.PI;
  const pizzaGain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (pizzaElement.style.width = `${result}px`);
}

// Task 3
// define the function updateOutputColor here
//ternery statement
