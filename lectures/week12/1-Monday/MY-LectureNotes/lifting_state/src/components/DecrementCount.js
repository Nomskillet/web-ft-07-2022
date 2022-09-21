import React from 'react'

const DecrementCount = ({DecrementFunctionFromParent}) => {
  return (
    <div>
        
        
        <button onClick={DecrementFunctionFromParent}>Decrement</button>
        
        
        </div>
  )
}

export default DecrementCount