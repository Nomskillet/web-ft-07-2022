import React from 'react'

const IncrementCount = ({IncrementFunctionFromParent}) => {
  return (
    <div>
        
        <button onClick={IncrementFunctionFromParent}>Increment</button>


    </div>
  )
}

export default IncrementCount