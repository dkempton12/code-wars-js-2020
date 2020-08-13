function capitalize(str) {
  const even = str
    .split('')
    .map((letter, i) => (letter[i] % 2 === 0 ? letter.toUpperCase() : letter))
    .join('');
}
