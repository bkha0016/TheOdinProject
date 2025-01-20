// DOM for HTML, CSS interaction
document.addEventListener("DOMContentLoaded", () => {
    const playerOneName = prompt("Enter name for Player 1:", "Player 1");
    const playerTwoName = prompt("Enter name for Player 2:", "Player 2");

    let boardSizeInput = document.getElementById("boardSize");
    let boardSize = parseInt(boardSizeInput.value);

    let controller = gameController(playerOneName, playerTwoName, boardSize);

    const boardElement = document.getElementById("board");
    const currentPlayerElement = document.getElementById("currentPlayer");
    const messageElement = document.getElementById("message");

    function createBoard() {
        boardSize = parseInt(boardSizeInput.value); // Update boardSize from input

        boardElement.innerHTML = ''; // Clear the board

        boardElement.style.gridTemplateColumns = `repeat(${boardSize}, 100px)`; // Update grid columns

        const board = controller.getBoard();

        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener("click", handleCellClick);
                boardElement.appendChild(cell);
            }
        }
    }

    function handleCellClick(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;

        controller.playRound(parseInt(row), parseInt(col));

        updateBoard();
        updateStatus();
    }

    function updateBoard() {
        const board = controller.getBoard();

        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            const row = cell.dataset.row;
            const col = cell.dataset.col;
            cell.textContent = board[row][col];
        });
    }

    function updateStatus() {
        currentPlayerElement.textContent = controller.getActivePlayer();
    }

    window.restartGame = function() {
        boardSize = parseInt(boardSizeInput.value);
        controller = gameController(playerOneName, playerTwoName, boardSize);

        messageElement.textContent = '';
        createBoard();
        updateStatus();
    };

    createBoard();
    updateStatus();
});

function gameBoard(rows, columns, initialValue='') {
    // Create an array to hold the rows
    const board = [];

    // Loop through each row and create an array to hold the column for the current row
    for (let i = 0; i < rows; i++) {
        const row = [];

        // Loop through each column in the current row
        for (let j = 0; j < columns; j++) {
            // Set the initial value for each cell
            row.push(initialValue);
        }

        // Add the current row to the board
        board.push(row);
    }

    // Method to print the board (for debugging)
    function printBoard() {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join(" | "));
            if (i < board.length - 1) {
                console.log("-".repeat(board[i].join(" | ").length));
            }
        }
    }

    // Method to get the current board state
    function getBoard() {
        return board;
    }

    return {
        board,
        printBoard,
        getBoard
    };
}

function logicBoard(boardSize) {
    const { board, printBoard, getBoard } = gameBoard(boardSize, boardSize, "");

    function makeMove(row, column, player) {
        if (board[row][column] === '') {
            board[row][column] = player;
            return true;
        }
        return false;
    }

    function checkWinner() {
        // Check rows
        for (let i = 0; i < boardSize; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return { winner: board[i][0], cells: [[i, 0], [i, 1], [i, 2]] };
            }
        }

        // Check columns
        for (let i = 0; i < boardSize; i++) {
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return { winner: board[0][i], cells: [[0, i], [1, i], [2, i]] };
            }
        }

        // Check diagonals
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return { winner: board[0][0], cells: [[0, 0], [1, 1], [2, 2]] };
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return { winner: board[0][2], cells: [[0, 2], [1, 1], [2, 0]] };
        }

        return null;
    }

    function checkDraw() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        makeMove,
        printBoard,
        checkWinner,
        checkDraw,
        getBoard
    };
}

function gameController(playerOneName, playerTwoName, boardSize) {
    const game = logicBoard(boardSize);
    let activePlayer = playerOneName;
    const playerOne = playerOneName;
    const playerTwo = playerTwoName;
    let gameOver = false;

    function switchPlayer() {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    }

    function getActivePlayer() {
        return activePlayer;
    }

    function printNewRound() {
        console.clear();
        console.log(`Current player: ${activePlayer}`);
        game.printBoard();
    }

    function playRound(row, column) {
        if (gameOver) {
            console.log('Game over. Please restart to play again.');
            return;
        }

        if (game.makeMove(row, column, activePlayer)) {
            const result = game.checkWinner();
            if (result) {
                console.clear();
                console.log(`Player ${result.winner} wins!`);
                highlightWinner(result.cells);
                game.printBoard();
                document.getElementById('winnerMessage').textContent = `Player ${result.winner} wins!`;
                gameOver = true;
                return;
            }
            if (game.checkDraw()) {
                console.clear();
                console.log('The game is a draw!');
                game.printBoard();
                document.getElementById('winnerMessage').textContent = 'The game is a draw!';
                gameOver = true;
                return;
            }

            switchPlayer();
            printNewRound();
        } else {
            console.log('Invalid move. Try again.');
        }
    }

    function highlightWinner(cells) {
        cells.forEach(([row, col]) => {
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            cell.classList.add('winner');
        });
    }

    return {
        switchPlayer,
        getActivePlayer,
        printNewRound,
        playRound,
        getBoard: game.getBoard
    };
}
