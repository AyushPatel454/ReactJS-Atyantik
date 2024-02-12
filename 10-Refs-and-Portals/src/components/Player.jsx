import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // when input field is change
  function handleChange(event) {
    setSubmitted(false); // when input field is change, set submitted to false & display unknown entity.
    setEnteredPlayerName(event.target.value); // set the enteredPlayerName to the value of the input field.
  }

  // when button is clicked. make submitted true then (Display the name of the player)
  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName :"unknown entity"}</h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
