import { useState } from "react";

function Player({ symbol, initialName}) {
    
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing]= useState(false);

   function handleEditClick() {
        setEditing((prevEditing) => !prevEditing);
   }

    function handleNameChange(event) {
        console.log(event)
        setPlayerName(event.target.value);

    }


        let editplayerName = <span className="player-name">{playerName?playerName:"PlayerName"}</span>

        if (isEditing) {
            editplayerName = <input type="text" required value={playerName}onChange={handleNameChange} />
        }
    

    return (
        <li>
            <span className="player">
                {editplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{isEditing?'Save':'Edit'}</button>
        </li>
    );
}

export default Player;