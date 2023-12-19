import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleEditClick = () => {
    //   the below method of UPDATING THE STATE IS FINE BUT NOT PERFECT
    // bcoz when we use this method , react schedules a state update for this.
    // in result we can see delayed response here .
    // to try this setIsEditing(!isEditing) write this on another line below
    // & click on the button , Onclick nothing should happen because we changing
    // values to false = true = false  , therefore we should not be able to see input
    // box on the UI BUT THIS IS NOT THE CASE , WE CAN SEE THAT IT IS STILL WORKING FINE
    // BECAUSE OF SCHEDULING STATE UPDATE
    // setIsEditing(!isEditing); // =>schedules a state update to true
    // setIsEditing(!isEditing); // =>this also schedules a state update to true hence we can't see any changes
    // in the below method , which also recommended by react docs ,
    // react doesn't schedule a state update, instead it captures the latest snapshot
    // & immediately updates the state .
    // to try this ,  we can write setIsEditing((editing) => !editing); this in the below line.
    // you can see that nothing will happen when we click on the button .
    // because in this scenario false = true= false this works
    // this is called "UPDATING STATE BASED ON THE OLD STATE CORRECTLY"
    setIsEditing((editing) => !editing);
    // setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handelChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={activePlayer ? "active" : undefined}>
      <span className="player">
        {/* ##component instances works in isolation##  we have called this component twice
        in parent component but when we click on edit button , field is only changing for one component 
        & not for all component . */}
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onChange={handelChange} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
