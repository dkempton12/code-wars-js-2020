// using replace method and a regex to check if the length of uppercase letters is greater than half the length of the total string
// if true, return all string characters to upperCase, else return to lowerCase
const solve = (str) => (str.replace(/[a-z]/g, '').length > str.length / 2 ? str.toUpperCase() : str.toLowerCase());
