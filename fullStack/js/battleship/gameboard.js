import Ship from "./ship";

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }

  placeShip(length, x, y, horizontal = true) {
    const ship = new Ship(length);
    if (horizontal) {
      for (let i = 0; i < length; i++) {
        this.board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.board[x + i][y] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const cell = this.board[x][y];
    if (cell === null) {
      this.missedAttacks.push([x, y]);
    } else {
      cell.hit();
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export default Gameboard;
