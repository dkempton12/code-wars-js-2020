const returnEvenChars = (string) =>
  string.length < 2 || string.length > 100
    ? 'invalid string'
    : string.split('').filter((x, i) => i % 2);
