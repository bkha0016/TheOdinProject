function knightMoves(start, end) {
  const boardSize = 8; // Standard chessboard size (8 x 8)
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Check if a position is within the board boundaries
  function isValid(x, y) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }

  // BFS to find the shortest path
  function bfs(start, end) {
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      let [current, path] = queue.shift();
      let [x, y] = current;

      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (let [dx, dy] of directions) {
        let newX = x + dx;
        let newY = y + dy;
        let newPos = [newX, newY];

        if (isValid(newX, newY) && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([newPos, path.concat([newPos])]);
        }
      }
    }
  }
  let path = bfs(start, end);

  console.log(`Shortest path from ${start} to ${end}:`);
  for (let position of path) {
    console.log(position);
  }
  return path;
}

// Example usage:
let start = [0, 0]; // Starting position (row, column)
let end = [5, 7];
knightMoves(start, end);
