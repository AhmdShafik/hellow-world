import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
        message:'Welcome From Message Component'
        }
    }

     changeMessage() {
        this.setState({
message:'Thank You For Subscribing.'
        });
    } 
    render(){
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button className="btn btn-primary" onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message