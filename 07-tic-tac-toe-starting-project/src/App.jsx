import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// ---> Function to derive the active player.
function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  // If last turn was 'X', then now, it's 'O's turn.
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

// ---> Function to derive the game board. (gameTurns is an array of objects.)
function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // Create a deep copy of the initialGameBoard. // why ? ---> Because, we don't want to mutate the initialGameBoard.

  
  // Update the game board based on the game turns. (gameTurns is an array of objects. Each object has the information about the square and the player.)
  for (let turn of gameTurns) {
    const { square, player } = turn; // Destructuring.
    const { row, col } = square; // Destructuring.
    
    gameBoard[row][col] = player; // update with the player symbol.
    // console.log(`gameBoard[${row}][${col}]: `, gameBoard[row][col]);
  }
  // console.log("---> Game Board: ", gameBoard);

  return gameBoard;
}

// ---> Function to derive the winner.
function deriveWinner(gameBoard, players) {
  let winner; // currently ---> undefined.
  // Check if there's a winner. - Check after every turn.
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // If all three squares have the same symbol, then we have a winner.
    // Make sure, the symbol is not null.
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns); // derive the active player.
  const gameBoard = deriveGameBoard(gameTurns);  // derive the game board.
  const winner = deriveWinner(gameBoard, players);  // derive the winner.
  const hasDraw = gameTurns.length === 9 && !winner; // if there's no winner and the number of turns is 9, then it's a draw.

  // ---> When a square is selected, this function will be called.
  function handleSelectSquare(rowIndex, colIndex) {
    // update game turns.
    setGameTurns((prevTurns) => {
      // get the current player.
      const currentPlayer = deriveActivePlayer(prevTurns);

      // update the turns by adding information about the current turn.
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      // console.log("updatedTurns: ", updatedTurns);

      return updatedTurns; // updatedTurns will be the new value of gameTurns.
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName }; // update the player name. // overwrite the name of the player with the given symbol.
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestartGame} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
