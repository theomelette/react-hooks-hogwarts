import React from "react";

function HogDetails({specialty, greased, weight}){
    return(
        <div>
        <p>Specialty: {specialty}</p>
        <p>Greased: {greased}</p>
        <p>Weight: {weight}</p>
        </div>
    )

}






export default HogDetails