function capitalize(str) {
  const even = str
    .split('')
    .map((letter, i) => (letter[i] % 2 === 0 ? letter.toUpperCase() : letter))
    .join('');
  console.log(even);

  const odd = str
    .split('')
    .map((letter, i) => (letter[i] % 2 !== 0 ? letter.toUpperCase() : letter))
    .join('');
  console.log(odd);

  return [even, odd];
}
