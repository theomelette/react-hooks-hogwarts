import React, {useState} from "react";
import HogDetails from "./HogDetails"


function HogData({name, specialty, greased, weight, image}){
    const [isDisplayed, setDisplay] = useState(false)
    function show(){

        setDisplay(!isDisplayed)

    }


    return(
        <div> 
            <h1 className="pigTile" onClick={show}>
            <p>Name: {name}</p>
            <img src={image} alt={name}></img>
            {isDisplayed && <HogDetails specialty={specialty} greased={greased.toString()} weight={weight}/> }
            </h1>
       </div>
       

    )

}





export default HogData