import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

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

  function handleSelectSquare(rowIndex, colIndex) {
    // update game turns.
    setGameTurns((prevTurns) => {
      // get the current player.
      const currentPlayer = deriveActivePlayer(prevTurns);

      // update the turns by adding information about the current turn.
      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
