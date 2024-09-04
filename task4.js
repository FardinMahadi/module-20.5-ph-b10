const statement = "I am a hard working person";

const wordsArray = statement.split(" ");

const reversedWordsArray = wordsArray.reverse();
console.log(reversedWordsArray);

const reversedStatement = reversedWordsArray.join(" ");

console.log(reversedStatement);
