// importation des composant players et player et de la bibliotheque react
import players from "../Players";
import React from "react";
import Player from "./Player";

// declaration de la fonction playerlist avec les props
const PlayersList = ()=>{
    return(
    <div>
        {players.map( (player, index)=>{
        return  ( <Player 
            key={index}
            nom={player.nom}
            nationnalite={player.nationnalite}
            numeroMaillot={player.nomeroMaillot}
            age={player.age}
            urlImage={player.urlImage}
            />
)
        })}
    </div>)

}

// exportation du composant playerslist
export default PlayersList;