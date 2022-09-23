
import React, {useState} from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {

        setCount(count + 1)
        
    }
  return (
    <>
    <h1>Counter</h1>

    <DisplayCount countProp={count} /> 

    {/* <IncrementCount incrementFunctionFromParent={handleIncrement} /> */}
    <IncrementCount incrementFunctionFromParent={()=>setCount(count + 1)} />
    </>
  )
}

export default Counter