import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log('Regular Component is rendered');
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegularComp