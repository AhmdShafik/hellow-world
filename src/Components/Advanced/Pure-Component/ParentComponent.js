import React, { Component } from 'react'
import MemoComp from '../Memo/MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ahmed Shafik",
         userArray:[1,2,3,4,5,6]
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Ahmed Shafik',
                userArray:[...this.state.userArray,6]
            })
        }, 3000);
    }
  render() {
    console.log('******* Parent Component is rendered *********');
   
    return (
      <React.Fragment>
        <div>Parent Component</div>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name} userArray={this.state.userArray}></PureComp> */}
        <MemoComp name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default ParentComponent