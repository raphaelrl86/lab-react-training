import { useState } from "react";
import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/masterCard.png"

const CreditCard = (props) => {

 
    return ( 
        <div>
            <img src = {props.type === "Visa" ? visa : masterCard}/>
            <p>**** **** **** {props.number.substr(-4)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
            <p>{props.owner}</p>
        </div>


     );
}

export default CreditCard
 
