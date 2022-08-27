import React , {useContext} from 'react'
import ContextComponentF from './ContextComponentF';
import { UserContext, PasswordContext } from '../../App';

function ContextComponentE() {
  const user= useContext(UserContext);
  const password = useContext(PasswordContext);
  return (
    <div>
      <h2>Hello From Component E</h2>
      <h4>Hello {user} - {password}</h4>
      {/* <ContextComponentF /> */}
    </div>
  )
}

export default ContextComponentE
