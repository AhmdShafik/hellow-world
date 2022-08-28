import logo from "./logo.svg";
import "./App.css";
import "./Styles/appStyles.css";
import Greet from "./Components/Greet";
import CounterTwo from "./Hooks/Reducer/CounterTwo";
import CounterThree from "./Hooks/Reducer/CounterThree";
import ReducerComponentA from "./Hooks/Reducer/ReducerComponentA";
import React ,{useReducer} from 'react'
import ReducerComponentB from "./Hooks/Reducer/ReducerComponentB";
import ReducerComponentC from "./Hooks/Reducer/ReducerComponentC";
import DataFetchingOne from "./Hooks/Reducer/DataFetchingOne";
import MemoCounter from "./Hooks/Memo/MemoCounter";
import FocusInput from "./Hooks/Ref/FocusInput";

export const CountContext=React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hellooo Shifoo</div>
        <div>
          <Greet name="Shifoo" heroName="From React" />
          <FocusInput />
          {/* <MemoCounter /> */}
          {/* <DataFetchingOne /> */}
          {/* <CounterTwo /> */}
          {/* <CounterThree /> */}
          {/* Count : {count}
          <CountContext.Provider value={{reducerCount:count,reducerDispatch:dispatch}}>
            <ReducerComponentA />
            <ReducerComponentB />
            <ReducerComponentC />
          </CountContext.Provider> */}
        </div>
      </header>
    </div>
  );
}

export default App;
