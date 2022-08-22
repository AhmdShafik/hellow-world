import React, { useState } from "react";

function HookCounterThree() {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setname({ ...name, firstName: e.target.value })}
        />

        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setname({ ...name, lastName: e.target.value })}
        />
        <br />
        <h1>FirstName : {name.firstName}</h1>
        <h1>LastName : {name.lastName}</h1>
      </form>
    </div>
  );
}

export default HookCounterThree;
