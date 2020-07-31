const solve = (str) => (str.replace(/[a-z]/g, '').length > str.length / 2 ? str.toUpperCase() : str.toLowerCase());
