import { useState, useRef } from 'react';

export default function Player() {
  // ---> Refs
  // This ref is attached to an input field in the JSX returned by the component.
  // This allows us to access the properties of this input field directly.
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // When the button is clicked, the handleClick function is executed. This function reads the current value of the input field using the ref and updates the state enteredPlayerName with this value.
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
