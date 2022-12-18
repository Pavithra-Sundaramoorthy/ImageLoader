import React from "react";
import Planet from './Planet.css'
function PlanetList(){
    const pnames=['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
    return(
        <div> 
            {
                pnames.map(name => <table><tr><td>{name}</td></tr></table>)
            }
        </div>
    )
    
}
export default PlanetList