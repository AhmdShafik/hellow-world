import React,{Component} from "react";

 class Welcome extends Component {
   render() {
       const {name,heroName}=this.props
       return (
         <div>
           <h2>
             Welcome {name} - {heroName}
           </h2>
         </div>
       );
     
       
   }
 }

export default Welcome