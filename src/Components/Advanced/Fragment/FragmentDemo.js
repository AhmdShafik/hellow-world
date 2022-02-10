import React from 'react'
import Column from './Column';
import './FragmentDemo.css'

function FragmentDemo() {
  return (
    <React.Fragment>
      <div>FragmentDemo</div>
      <div>
      <table>
          <tbody>
          <tr>
              <Column />
          </tr>
          </tbody>
      </table>
      </div>
      
    </React.Fragment>
  );
}

export default FragmentDemo