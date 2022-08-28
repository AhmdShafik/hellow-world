import React, { useContext } from "react";
import {CountContext} from "../../App";

function ReducerComponentA() {
  const countContext = useContext(CountContext);
  return <div>
    <h4>Component A</h4>
    <button onClick={()=>countContext.reducerDispatch('increment')}>Increment</button>
    <button onClick={()=>countContext.reducerDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.reducerDispatch('reset')}>Reset</button>
  </div>;
}

export default ReducerComponentA;
