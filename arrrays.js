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