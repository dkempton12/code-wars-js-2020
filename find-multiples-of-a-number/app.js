const findMultiples = (integer, limit) => {
  let multiples = [];
  for (let i = 0; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
};

findMultiples(5, 25);
// findMultiples(10, 100);
