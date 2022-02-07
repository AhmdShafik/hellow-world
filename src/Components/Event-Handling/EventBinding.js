import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           Message:'Hello From Event Binding'
        }
    }
    
    clickHandler=()=>{
        this.setState({
          Message: "Goodbye!!",
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.Message}</p>
                <button onClick={this.clickHandler}>Click For EventBinding</button>
            </div>
        )
    }
}

export default EventBinding
