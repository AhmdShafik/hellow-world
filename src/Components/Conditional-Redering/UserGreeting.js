import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //--------------If/Else------------------
    //   if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             <div>Ya Welcome --- Shifoo</div>
    //     </div>
    //     )
    //   }else{
    //     return (
    //         <div>
    //             <div>Welcome Guest</div>
    //     </div>
    //     )
    //   }
    //------------Element Variable--------------
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = "Ya Welcome --- Shifoo";
    // } else {
    //   message = "Welcome Guest";
    // }
    // return <div>
    //     <div>{message}</div>
    // </div>;
    //-------------Ternary Conditional Operator-----
    // return this.state.isLoggedIn ? (
    //   <div>Ya Welcome --- Shifoo</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //-------------Short Circuit Operator-----
    return this.state.isLoggedIn && <div>Ya Welcome --- Shifoo</div>;
  }
}

export default UserGreeting;
