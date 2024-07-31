const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(fantasticFour, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= fantasticFour.length ||
    index2 < 0 ||
    index2 >= fantasticFour.length
  ) {
    console.log(
      "El índice proporcionado es más grande que el número de posiciones contenidas en el array"
    );
    return;
  }
  let aux = fantasticFour[index1];
  fantasticFour[index1] = fantasticFour[index2];
  fantasticFour[index2] = aux;
  console.log(fantasticFour);
}

swap(fantasticFour, 1, 3); // Funciona
swap(fantasticFour, 2, 4); // Fuera de rango
