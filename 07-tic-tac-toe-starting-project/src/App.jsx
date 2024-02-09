import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// ---> Function to derive the active player.
function deriveActivePlayer(turns) {
  let currentPlayer = 'X';

  // If last turn was 'X', then now, it's 'O's turn.
  if(turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  let winner; // currently ---> undefined.

  // Update the game board based on the game turns. (gameTurns is an array of objects. Each object has the information about the square and the player.)
  for (let turn of gameTurns) {
    const { square, player } = turn; // Destructuring.
    const { row, col } = square; // Destructuring.

    gameBoard[row][col] = player; // update with the player symbol.
    // console.log(`gameBoard[${row}][${col}]: `, gameBoard[row][col]);
  }
  // console.log("---> Game Board: ", gameBoard);

  // Check if there's a winner. - Check after every turn.
  for(const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      // If all three squares have the same symbol, then we have a winner.
      // Make sure, the symbol is not null.
      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = firstSquareSymbol;
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner; // if there's no winner and the number of turns is 9, then it's a draw.

  // ---> When a square is selected, this function will be called.
  function handleSelectSquare(rowIndex, colIndex) {
    // update game turns.
    setGameTurns((prevTurns) => {
      // get the current player.
      const currentPlayer = deriveActivePlayer(prevTurns);

      // update the turns by adding information about the current turn.
      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      // console.log("updatedTurns: ", updatedTurns);

      return updatedTurns; // updatedTurns will be the new value of gameTurns.
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        {(winner || hasDraw) && <GameOver winner={winner} /> }
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
