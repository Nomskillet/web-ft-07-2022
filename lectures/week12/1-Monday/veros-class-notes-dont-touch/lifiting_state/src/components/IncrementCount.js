import React from 'react'

const IncrementCount = ({incrementFunctionFromParent}) => {
  return (
    <>
    
        <button onClick={incrementFunctionFromParent}>Increment</button>
    </>
  )
}

export default IncrementCount