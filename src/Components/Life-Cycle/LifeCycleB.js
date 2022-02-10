import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shifoo",
    };
    console.log("You Are in LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("You Are in LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("You Are in LifeCycleB componentDidMount");
  }

  //For Updating
shouldComponentUpdate(){
  console.log('You are in LifeCycleB shouldComponentUpdate');
  return true;
}

//For Updating
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('You are in LifeCycleB getSnapshotBeforeUpdate');
  return null;
}

//For Updating
componentDidUpdate(){
  console.log('You are in LifeCycleB componentDidUpdate');
}
  render() {
    console.log("You Are in LifeCycleB Render");
    return <div>Hellow From LifeCycleB Render</div>;
  }
}

export default LifeCycleB;
