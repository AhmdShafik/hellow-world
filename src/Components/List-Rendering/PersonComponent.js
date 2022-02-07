import React from "react";

function PersonComponent(props) {
  return (
    <h3>
     I am {props.person.name}, I am {props.person.age}, Skills :{" "}
      {props.person.skill}{" "}
    </h3>
  );
}

export default PersonComponent;
