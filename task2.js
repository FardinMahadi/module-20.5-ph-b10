const numbers = [12, 98, 5, 41, 23, 78, 46];

let even_num = [];

for (let num of numbers) {
  if (num % 2 == 0) {
    even_num.push(num);
  }
}
console.log(even_num);
