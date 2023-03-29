import { useState } from "react";
export default function Greetings(props) {

function greeting (lang) {
    switch (lang) {
        case "de": return "Hallo";
        case "es": return "Hola";
        case "fr": return "Bonjour";
        default: return "hello" 

    }
}

return(
    <div> <p>{greeting(props.lang)}{props.children}</p> </div>
)
}
