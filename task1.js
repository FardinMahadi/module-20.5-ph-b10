const colors = ["red", "blue", "green", "yellow", "orange"];

let rev_colors = [];

for (let col of colors) {
  rev_colors.unshift(col);
}
console.log(rev_colors);
