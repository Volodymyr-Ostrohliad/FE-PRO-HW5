const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
let sumPositive = 0;
let positiveCount = 0;
// Знайти суму та кількість позитивних елементів.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sumPositive += numbers[i];
    positiveCount += 1;
  }
}

//Визначити кількість негативних елементів.
let countNegative = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    countNegative += 1;
  }
}

// Знайти кількість непарних позитивних елементів.
let coutnPosUnpaired = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 != 0) {
    coutnPosUnpaired += 1;
  }
}
// Визначити кількість парних позитивних елементів.

let countPosPaired = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    countPosPaired += 1;
  }
}

//Знайти суму парних позитивних елементів.

let sumPosPaired = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    sumPosPaired += numbers[i];
  }
}

//Знайти суму непарних позитивних елементів.

let sumPosUnpaired = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 != 0) {
    sumPosUnpaired += numbers[i];
  }
}

//Знайти добуток позитивних елементів.

let productPositive = 1;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    productPositive *= numbers[i];
  }
}

//Знайти максимальний елемент масиву та його порядковий номер.

let maxElement = numbers[0];
let indexElement = 0;

for (let i = 1; i < numbers.length; i++) {
  if (maxElement < numbers[i]) {
    maxElement = numbers[i];
    indexElement = i;
  }
}

alert(`${sumPositive}
${positiveCount}
${countNegative}
${coutnPosUnpaired}
${countPosPaired}
${sumPosPaired}
${sumPosUnpaired}
${productPositive}
${maxElement}
${indexElement}`)