import { useState } from "react";
const BoxColor = (props) => {
   
   const divStyle = {
    border: "2px solid",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
   }

    return ( 
        <div style={divStyle}>
            <p>({props.r},{props.g},{props.b})</p>
        </div>
     )
}
 
export default BoxColor