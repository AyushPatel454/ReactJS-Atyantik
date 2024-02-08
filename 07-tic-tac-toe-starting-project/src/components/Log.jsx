export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected Row:{turn.square.row + 1}, Col:
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
