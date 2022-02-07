import React from "react";
import PersonComponent from "./PersonComponent";

function NameList() {
  const names = ["Sasa", "Ahmed", "Shafik"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "Sasa",
      age: 2,
      skill: "React",
    },
    {
      id: 2,
      name: "Ahmed",
      age: 29,
      skill: "C#",
    },
    {
      id: 3,
      name: "Hossam",
      age: 28,
      skill: "C++",
    },
    {
      id: 4,
      name: "John",
      age: 25,
      skill: "Angular",
    },
    {
      id: 5,
      name: "Sara",
      age: 22,
      skill: "Vue",
    },
  ];

  const personsList = persons.map((person) => (
    <PersonComponent key={person.id} person={person} />
  ));

  return <div>{personsList}</div>;
  //   return(
  //       <div>
  //           {nameList}
  //       </div>
  //   )
}

export default NameList;
