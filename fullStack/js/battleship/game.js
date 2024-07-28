import Player from "./player";

class Game {
  constructor() {
    this.player = new Player();
    this.computer = new Player(true);
    this.currentTurn = "player";
  }

  initialize() {
    // Initialize players' gameboards with ships
    this.player.gameboard.placeShip(5, 0, 0, true);
    this.player.gameboard.placeShip(4, 2, 2, false);

    this.computer.gameboard.placeShip(5, 1, 1, true);
    this.computer.gameboard.placeShip(4, 3, 3, false);

    this.renderBoards();
    this.addEventListeners();
  }

  renderBoards() {
    // Implement rendering logic here or render board images here
  }

  addEventListeners() {
    // Implement event listeners for player actions here
    document.querySelectorAll(".enemy-cell").forEach((cell) => {
      cell.addEventListener("click", (event) => {
        const x = parseInt(event.target.dataset.x, 10);
        const y = parseInt(event.target.dataset.y, 10);
        this.handlePlayerMove(x, y);
      });
    });
  }

  handlePlayerMove(x, y) {
    if (this.currentTurn !== "player") return;
    this.player.makeMove(x, y, this.computer.gameboard);
    this.checkGameEnd();
    this.currentTurn = "computer";
    this.handleComputerMove();
  }

  handleComputerMove() {
    setTimeout(() => {
      this.computer.makeRandomMove(this.player.gameboard);
      this.checkGameEnd();
      this.currentTurn = "player";
    }, 1000);
  }

  checkGameEnd() {
    if (this.player.gameboard.allShipsSunk()) {
      alert("Computer wins!");
      this.resetGame();
    } else if (this.computer.gameboard.allShipsSunk()) {
      alert("Player wins!");
      this.resetGame();
    }
  }

  resetGame() {
    this.player = new Player();
    this.computer = new Player(true);
    this.currentTurn = "player";
    this.initialize();
  }
}

export default Game;
