import logo from "./logo.svg";
import "./App.css";
import "./Styles/appStyles.css";
import React from 'react';
import ContextComponentC from "./Hooks/Context/ContextComponentC";
import CounterOne from "./Hooks/Reducer/CounterOne";
export const UserContext=React.createContext();
export const PasswordContext=React.createContext();
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hellooo Shifoo</div>
        <div>
          <CounterOne />
          {/* <UserContext.Provider value={'Ahmed Shafiq'}>
            <PasswordContext.Provider value={'Shifoo Password'}>
              <ContextComponentC />
            </PasswordContext.Provider>
          </UserContext.Provider> */}
        </div>
      </header>
    </div>
  );
}

export default App;
