const arrayWithNumbers = [];

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  arrayWithNumbers.push(randomNumber);
}

console.log(arrayWithNumbers);

arrayWithNumbers.pop();
console.log(arrayWithNumbers);

arrayWithNumbers.shift();
console.log(arrayWithNumbers);

arrayWithNumbers.unshift(1);
console.log(arrayWithNumbers);

arrayWithNumbers.push(10);
console.log(arrayWithNumbers);

console.log("Размер массива :", arrayWithNumbers.length);

let copyArrayWithNumbers = arrayWithNumbers.slice();
console.log("Копия массива:", copyArrayWithNumbers);
console.log("Оригинальный массив:", copyArrayWithNumbers);

for (let i = 0; i < arrayWithNumbers.length; i++) {
  if (i % 2 === 0) {
    console.log(arrayWithNumbers[i]);
  }
}

let accumForCount = 1;
for (let i = 0; i < arrayWithNumbers.length; i++) {
  accumForCount *= arrayWithNumbers[i];
}

console.log("Добуток:", accumForCount);

function Phone(id, brand, model, color, ram, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.ram = ram;
  this.price = price;
}

const phones = [];

const PHONES_COUNT = 30;

for (let i = 0; i < PHONES_COUNT; i++) {
  const phone = new Phone(
    i,

    Math.random() > 0.5 ? "Samsung" : "Iphone",

    `Series ${Math.trunc(Math.random() * 8)}`,
    Math.random() > 0.5 ? "white" : "black",
    1 + Math.trunc(Math.random() * 12),
    5000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

let ramCount = { 4: 0, 6: 0, 8: 0, 12: 0 };

for (let i = 0; i < phones.length; i++) {
  let ram = phones[i].ram;

  if (ram === 4 || ram === 6 || ram === 8 || ram === 12) {
    ramCount[ram]++;
  }
}
console.log(ramCount);

let totalPrice = 0;

for (let i = 0; i < phones.length; i++) {
  totalPrice += phones[i].price;
}

let averagePrice = totalPrice / phones.length;

console.log("Средняя цена:", averagePrice.toFixed(0), "грн");

const numbers = [-1, 5, 0, 9, -10];

const nonZeroNumbers = numbers.filter((num) => num !== 0);
console.log(nonZeroNumbers);

const array100 = numbers.map((num) => num / 100);
console.log(array100);

numbers.forEach((num) => {
  console.log(num ** 3);
});

// Сделано чатом по тому что я не понимал, но позже уже понял.
const arrayNumbers = [2, 5, 10, 3, -10];

const index = arrayNumbers.findIndex((num) => num ** 2 === 100); // тут мы подносим к квадрату все числа и ищем 100, должно быть 10 * 10 = 100 и если находим 100, то вернется его индекс

if (index !== -1) { // тут если индекс возвращенный не равен -1
  arrayNumbers.splice(index, 1); // если не равен то мы его удаляем 
  console.log(`Елемент видалено. Новий масив: ${arrayNumbers}`);
} else {
  console.log("Елемент, квадрат якого дорівнює 100, не знайдено");
}
