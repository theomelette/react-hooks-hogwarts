import React from "react";
import HogData from "./HogData.js"

function HogList({hogs}){
    const hogsArray = hogs.map((hog) => (<HogData 
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        image={hog.image}
        />)
    
    )
    return (
        <ul>{hogsArray}</ul>

    )


}







export default HogList