/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ["Elon", "Bill", "Mark", "Waren"];

for (const friend of friends) {
  console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
  console.log(i);
  console.log(friends[i]);
}

const numbers = [5.325, 542, 65.43, 63, 53.75, 365, 37, 53, 65, 3775];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

let n = 0;
