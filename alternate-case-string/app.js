function alternateCase(str) {
  return str
    .split('')
    .map(letter => {
      letter === letter.toLowerCase() ? letter.toUpperCase() : letter;
    })
    .join('');
}
