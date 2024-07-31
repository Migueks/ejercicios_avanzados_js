function rollDice(diceFaces) {
  let diceRoll = Math.floor(Math.random() * diceFaces) + 1;
  console.log(diceRoll);
}

rollDice(7);
rollDice(20);
