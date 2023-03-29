import { useState } from "react"

const IdCard = (props) => {
    return (
        <div className = 'IdCard'>
            <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth Date: {props.birth}</p>
            <p><img src={props.picture}/></p>
            </div>

    </div>
    )
    }
    export default IdCard