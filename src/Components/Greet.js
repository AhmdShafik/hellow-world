import React from "react";

// function Greet(){
//     return <h3>Hello From Greet Component</h3>
// }
const Greet = (props) => {
    const {name,heroName}=props
    return (
        <div>
            <h3>Hello {name} - {heroName}</h3>
            <p>{props.children}</p>
        </div>

    )
}
export default Greet