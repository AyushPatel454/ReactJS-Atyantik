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
        console.log(`gameBoard[${row}][${col}]: `, gameBoard[row][col]);
    }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedGameBoard = [...prevGameBoard.map(row => [...row])]; // Deep copy of the game board. // Because we should never mutate the state directly.
  //         updatedGameBoard[rowIndex][colIndex] = activePlayer;
  //         return updatedGameBoard; // Return the updated game board. // This will trigger a re-render of the component. // And the component will update the game board.
  //     });

  //     onSelectSquare(); // it's a callback function. (App.jsx: handleSelectSquare)
  // }

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
