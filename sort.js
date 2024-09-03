const persons = ["rakib", "nokib", "sakib", "akib", "dakib"];

const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort -->
const numbers = [5, 245, 2, 56, 46, 7, 6, 3, 33];
/*
Asending --> smaller to larger
*/

/*
Desending --> larger to smaller
*/

// const numbers_asc = numbers.sort(); not working correctlly

const numbers_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
console.log(numbers_asc);

const numbers_des = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(numbers_des);

// const numbers_des = numbers.
