import React from "react";

const Hello=()=>{
return (
    // <div><h2>Hello Component</h2></div>
    React.createElement('div',{className:'row'},<h1>From Hello Component</h1>)
)}

export default Hello