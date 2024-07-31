// 4.1

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(mainCharacters, text) {
  for (let i = 0; i < mainCharacters.length; i++) {
    if (mainCharacters[i] === text) {
      return i;
    }
  }
  return -1;
}

console.log(findArrayIndex(mainCharacters, "Rey"));

// 4.2

function removeItem(mainCharacters, text) {
  let numberFunction = findArrayIndex(mainCharacters, text);
  if (numberFunction !== -1) {
    mainCharacters.splice(numberFunction, 1);
    return mainCharacters;
  } else {
    return "Elemento no encontrado";
  }
}

console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Juan"));
