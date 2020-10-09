const multiTable = (number) => {
  let table = ``;
  for (let i = 1; i <= 10; i++) {
    // reminder \n is adding a new line IF i < 10
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return table;
};

multiTable(10);
multiTable(5);
