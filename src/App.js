import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import ClassClick from "./Components/Event-Handling/ClassClick";
import EventBinding from "./Components/Event-Handling/EventBinding";
import ParentComponentPassingData from "./Components/Passing-Data/ParentComponent";
import UserGreeting from "./Components/Conditional-Redering/UserGreeting";
import NameList from "./Components/List-Rendering/NameList";
import Stylesheet from "./Components/Styling/Stylesheet";
import Inline from "./Components/Styling/Inline";
import "./Styles/appStyles.css";
import styles from "./Styles/appStyles.module.css";
import Form from "./Components/Forms/Form";
import LifeCycleA from "./Components/Life-Cycle/LifeCycleA";
import FragmentDemo from "./Components/Advanced/Fragment/FragmentDemo";
import PureComp from "./Components/Advanced/Pure-Component/PureComp";
import ParentComponent from "./Components/Advanced/Pure-Component/ParentComponent";
import RefsDemo from "./Components/Advanced/Refs/RefsDemo";
import ForwardRefParentInput from "./Components/Advanced/Refs/ForwardRefParentInput";
import PortalDemo from "./Components/Advanced/Portal/PortalDemo";
import Hero from "./Components/Advanced/Error-Boundaries/Hero";
import ErrorBoundary from "./Components/Advanced/Error-Boundaries/ErrorBoundary";
import ClickCounter from "./Components/Advanced/Higher-Order-Components/ClickCounter";
import HoverCounter from "./Components/Advanced/Higher-Order-Components/HoverCounter";
import ClickCounterTwo from "./Components/Advanced/Render-Props/ClickCounterTwo";
import HoverCounterTwo from "./Components/Advanced/Render-Props/HoverCounterTwo";
import User from "./Components/Advanced/Render-Props/User";
import ConterComponent from "./Components/Advanced/Render-Props/Counter";
import ClassCounter from "./Hooks/State/ClassCounter";
import HookCounter from "./Hooks/State/HookCounter";
import HookCounterTwo from "./Hooks/State/HookCounterTwo";
import HookCounterThree from "./Hooks/State/HookCounterThree";
import HookCounterFour from "./Hooks/State/HookCounterFour";
import ClassCounterOne from "./Hooks/Effect/ClassCounterOne";
import HookCounterOne from "./Hooks/Effect/HookCounterOne";
import ClassMouse from "./Hooks/Effect/ClassMouse";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hellooo Shifoo</div>
        <div>
          <HookCounterOne />
          {/* <Greet name="Shifoo" heroName="From React" />
          <Hello />
          <ClassMouse /> 
          <HookCounterOne />
          <ClassCounterOne /> 
          <HookCounterFour /> */}
          {/* <HookCounterThree /> */}
          {/* <HookCounterTwo /> */}
          {/* <HookCounter /> */}
          {/* <ClassCounter />
          {/* <ConterComponent
            render={(count, incrementCount) => (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
          />

          <ConterComponent
            render={(count, incrementCount) => (
              <HoverCounterTwo count={count} incrementCount={incrementCount} />
            )}
          /> */}
          {/* <ClickCounterTwo />
          <HoverCounterTwo />
          <User name={(isLoggedIn) => (isLoggedIn ? "Shifoo" : "Shafik")} /> */}
          {/* <HoverCounter />
          <ClickCounter /> */}
          {/* <ErrorBoundary>
            <Hero heroName="Batman" />
          </ErrorBoundary>

          <ErrorBoundary>
            <Hero heroName="SupperMan" />
          </ErrorBoundary>

          <ErrorBoundary>
            <Hero heroName="Joker" />
          </ErrorBoundary> */}
          {/* <PortalDemo /> */}
          {/* <ForwardRefParentInput /> */}
          {/* <RefsDemo /> */}
          {/* <ParentComponent /> */}
          {/* <PureComp /> */}
          {/* <FragmentDemo /> */}
          {/* <LifeCycleA /> */}
          {/* <Form />
          <Inline />
          <Stylesheet primary={true} />
          <h1 className="error">Error</h1>
          <h1 className={styles.success}>Success</h1>
          <NameList />
          <UserGreeting />
          <ParentComponent />
          <EventBinding />
          <ClassClick />
          <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroName="SpiderMan" />
          <Greet name="Shafiq" heroName="IronMan" />
          <Welcome name="Bruce" heroName="Batman" />
          <Welcome name="Clark" heroName="SpiderMan" />
          <Welcome name="Shafiq" heroName="IronMan" />
          <Message></Message>
          <Counter />
          <Welcome />
          <Hello /> */}
        </div>
        {/* <br></br>
        <br></br>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
