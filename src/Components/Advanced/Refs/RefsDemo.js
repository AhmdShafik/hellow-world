import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = React.createRef();

    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element
    };
  }

  componentDidMount() {
    //  console.log(this.inputRefs);
   // this.inputRefs.current.focus();
   if(this.cbRef){
       this.cbRef.focus()
   }
  }
  handleOnClick = () => {
    alert(`${this.inputRefs.current.value} - ${this.cbRef.value}` );
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleOnClick}>Click Me</button>
      </div>
    );
  }
}

export default RefsDemo;
