import { useState } from "react";
export default function Random (props) {
function random (min, max) {
    return Math.floor(Math.random()*(max-min) + min)

}

return (
    <div>
        <p>{random(props.min, props.max)}</p>
    </div>
)

}
