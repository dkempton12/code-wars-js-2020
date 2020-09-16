// subtract x-coordinate indices and y-coordinate indices, then add both results
function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

manhattanDistance([5, 4], [3, 2]);
