// ship.test.js
import Ship from "./ship";

test("ship gets hit", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("ship is sunk", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

// gameboard.test.js
import Gameboard from "./gameboard";

test("place ship", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 0, 0, true);
  expect(gameboard.board[0][0]).not.toBeNull();
});

test("receive attack", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 0, 0, true);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0].hits).toBe(1);
});

// player.test.js
import Player from "./player";

test("player can make move", () => {
  const player = new Player();
  const enemyGameboard = new Gameboard();
  player.makeMove(0, 0, enemyGameboard);
  expect(enemyGameboard.missedAttacks).toContainEqual([0, 0]);
});
