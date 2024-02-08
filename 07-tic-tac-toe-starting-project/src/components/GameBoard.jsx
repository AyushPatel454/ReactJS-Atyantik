const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for(let turn of turns) {
        const {square, player} = turn; // Destructuring.
        const {row, col} = square; // Destructuring.

        
        gameBoard[row][col] = player; // update with the player symbol.
        // console.log(`gameBoard[${row}][${col}]: `, gameBoard[row][col]);
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
