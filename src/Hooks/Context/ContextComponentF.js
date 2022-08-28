import React from 'react'
import { UserContext, PasswordContext } from '../../App';

function ContextComponentF() {
  return (
    <div>
      <h2>Hello From Component F</h2>
      <UserContext.Consumer>
      {
         user=>
         {
           return( 
            <PasswordContext.Consumer>
             {
               password=> <h4>Hello {user} your password is {password}</h4>
              }
            </PasswordContext.Consumer>
         )
        }
      }
      </UserContext.Consumer>
    </div>
  )
}

export default ContextComponentF
