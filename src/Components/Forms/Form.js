import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'React'
      }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
handleCommentChange=event=>{
    this.setState({
        comment:event.target.value
    })
}
handleTopicChange=event=>{
    this.setState({
        topic:event.target.value
    })
}
handleFormSubmit=event=>{
    alert(`Username: ${this.state.username} Comments: ${this.state.comment} Topic: ${this.state.topic}`);
    event.preventDefault();
}
  render() {
    const{username,comments,topic}=this.state;
    return <form onSubmit={this.handleFormSubmit}>
        <div>
            <label>Username: </label>
            <input type='text' value={username} onChange={this.handleUsernameChange} />
        </div>
        <br />
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentChange}>

            </textarea>
        </div>
        <br/>
        <div>
            <label>Type: </label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value='Angular'>Angular</option>
                <option value='React'>React</option>
                <option value='Vue'>Vue</option>
            </select>
        </div>
        <br/>
        <div>
            <button>Save</button>
        </div>
    </form>;
  }
}

export default Form;
