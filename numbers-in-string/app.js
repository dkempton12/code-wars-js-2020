function solve(s) {
  // match consecutive digits
  return Math.max(...s.match(/\d+/g));
}
