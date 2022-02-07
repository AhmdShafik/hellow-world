import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClassClick from './Components/Event-Handling/ClassClick';
import EventBinding from './Components/Event-Handling/EventBinding';
import ParentComponent from './Components/Passing-Data/ParentComponent';
import UserGreeting from './Components/Conditional-Redering/UserGreeting';
import NameList from './Components/List-Rendering/NameList';
import Stylesheet from './Components/Styling/Stylesheet';
import Inline from './Components/Styling/Inline';
import './Styles/appStyles.css'
import styles from './Styles/appStyles.module.css'
import Form from './Components/Forms/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hellooo Shifoo
        </p>
        <p>
          <Form />
          {/* <Inline />
          <Stylesheet primary={true}/>
          <h1 className='error'>Error</h1>
          <h1 className={styles.success}>Success</h1> */}
          {/* <NameList /> */}
          {/* <UserGreeting />
          {/* <ParentComponent /> */}
          {/* <EventBinding /> */}
     {/* <ClassClick /> */}
          {/* <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroName="SpiderMan"/>
          <Greet name="Shafiq" heroName="IronMan" />
          <Welcome name="Bruce" heroName="Batman"/>
          <Welcome name="Clark" heroName="SpiderMan"/>
          <Welcome name="Shafiq" heroName="IronMan" />
          <Message></Message>
          <Counter/> 
        <Welcome /> 
           <Hello />*/
        } 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
