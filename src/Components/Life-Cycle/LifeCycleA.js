import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shifoo",
    };
    console.log("You Are in Constructor");
  }
  changeStateHandler=()=>{
    this.setState({
      name:'Ahmed Shafik'
    })
  }
  //For Mounting and Updating
  static getDerivedStateFromProps(props, state) {
    console.log("You Are in getDerivedStateFromProps");
    return null;
  }

//For Mounting
  componentDidMount(){
    console.log("You Are in componentDidMount");
  }

  //For Updating
shouldComponentUpdate(){
  console.log('You are in shouldComponentUpdate');
  return true;
}

//For Updating
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('You are in getSnapshotBeforeUpdate');
  return null;
}

//For Updating
componentDidUpdate(){
  console.log('You are in componentDidUpdate');
}
  render() {
    console.log("You Are in Render");

    return (
      <div>
        <div>Hellow From Render</div>
        <button onClick={this.changeStateHandler}>Change State</button>
        <LifeCycleB />
      </div>
    ); 
  }
}

export default LifeCycleA;
