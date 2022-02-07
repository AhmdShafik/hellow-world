import React,{Component} from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Value : " + this.state.count);
    //   }
    // );

    this.setState((prevState)=>({
        count:prevState.count+1
    }),()=>{
        console.log("Callback Value : " + this.state.count);
    });
    //console.log(this.state.count);
  }

  incrementByFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }

  render() {
    return (
      <div>
        <h3>Welcome From Counter Component</h3>

        <p>count : {this.state.count}</p>
        <button onClick={() => this.incrementByFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter