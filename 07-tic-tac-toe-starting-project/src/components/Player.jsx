import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // ---> Updating state based on the previous state.
    // setIsEditing(!isEditing); // It SCHEDULES a state to change. It doesn't change the state immediately.
    setIsEditing((editing) => !editing); // It changes the state immediately. (Best practice.)
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {playerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? "Save" : "Edit"}</button>
    </li>
  );
}
