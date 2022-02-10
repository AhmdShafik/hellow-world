import React from 'react'

function MemoComp(props) {
    console.log('Memo Component is rendered')
  return (

    <div>Memo Component {props.name}</div>
  )
}

export default React.memo(MemoComp)