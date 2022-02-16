import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hassError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hassError: true,
    };
  }
componentDidCatch(error,errorInfo){
    console.log(error);
    console.log(errorInfo);
}
  render() {
    if (this.state.hassError) {
      return <h1>Something Wrong Happend</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
