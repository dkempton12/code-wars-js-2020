function returnEvenChars(string) {
  const evenChars = string
    .split('')
    .map((letter, index) => letter[index] % 2 !== 0);
  return evenChars;
}
