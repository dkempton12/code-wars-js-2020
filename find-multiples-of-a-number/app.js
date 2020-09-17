const findMultiples = (integer, limit) => {
  let multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
};

findMultiples(5, 25);
// findMultiples(10, 100);
