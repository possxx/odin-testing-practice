function generateCipherTable(table, shiftFactor) {
  if (Math.abs(shiftFactor) > table.length) shiftFactor %= table.length;

  return table.map((_, index) => {
    if (index + shiftFactor > table.length - 1) {
      return table[shiftFactor - (table.length - index)];
    }
    if (index + shiftFactor < 0) {
      return table[table.length + (index + shiftFactor)];
    }
    return table[index + shiftFactor];
  });
}

export default function caesarCipher(string, shiftFactor) {
  const table = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const cipherTable = generateCipherTable(table, shiftFactor);

  return string
    .split("")
    .map((letter) => {
      if (table.includes(letter.toLowerCase())) {
        const letterIndex = table.findIndex((value) => {
          return letter.toLowerCase() === value;
        });

        return table.includes(letter)
          ? cipherTable[letterIndex]
          : cipherTable[letterIndex].toUpperCase();
      }
      return letter;
    })
    .join("");
}
