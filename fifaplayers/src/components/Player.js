// importation de la bibliotheque react et du composant card de la bibliotheque react-bootstrap
import React from "react";
import { Card } from "react-bootstrap";

// declaration de la fonction Player avec les props passe comme parametre
const Player = ({ nom, nationnalite, age, urlImage, numeroMaillot }) => {
    return (
    <div>
        {/* utilisation du composant card */}
        <Card>

            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Card.Body style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", marginBottom:"50px", width:"40rem"}}>
                    <div >
                        <Card.Img style={{width:"20rem", borderRadius:"15px"}} src={urlImage}/>
                    </div>
                    <div style={{backgroundColor:"#FFFFFF", width:"10rem", height:"13rem", textAlign:"center", borderRadius:"15px", marginTop:"30px", fontSize:"20px", fontWeight:"bold"}}>
                        <Card.Title style={{fontStyle:"italic"}}>{nom}</Card.Title>  
                        <Card.Text>{nationnalite}</Card.Text>
                        <Card.Text>N.{numeroMaillot}</Card.Text>
                        <Card.Text>{age} Ans</Card.Text>
                    </div>
                </Card.Body> 
            </div>

        </Card>
        
    </div>)
}


// exportation du composant player
export default Player;