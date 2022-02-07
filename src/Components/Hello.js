import React from "react";

const Hello=()=>{
return (
    // <div><h2>Hello Component</h2></div>
    React.createElement('div',{className:'row'}, React.createElement('h5',null,'Hello Component New'))
)}

export default Hello