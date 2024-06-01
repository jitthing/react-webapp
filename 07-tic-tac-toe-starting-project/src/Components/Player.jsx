import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEdit, setIsEdit] = useState(false);

  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEdit((editing) => !editing);
    if (isEdit) {
      onNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleNameChange}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
