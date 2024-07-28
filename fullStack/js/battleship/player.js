import Gameboard from "./gameboard";

class Player {
  constructor(isComputer = false) {
    this.Gameboard = new Gameboard();
    this.isComputer = isComputer;
  }

  makeMove(x, y, enemyGameBoard) {
    enemyGameBoard.receiveAttack(x, y);
  }

  makeRandomMove(enemyGameBoard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (enemyGameboard.board[x][y] !== null);
    this.makeMove(x, y, enemyGameboard);
  }
}

export default Player;
