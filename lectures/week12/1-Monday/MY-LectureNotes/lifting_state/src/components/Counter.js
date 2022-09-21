import React, {useState} from 'react'
import DecrementCount from './DecrementCount'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {

        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
     }


  return (
    <div>
        <h1>Counter</h1>


        <DisplayCount countProp={count}/>

        <br />

        <IncrementCount IncrementFunctionFromParent={handleIncrement} />
        {/* <IncrementCount IncrementFunctionFromParent={()=>setCount(count +1)} /> */}

        <br />

        <DecrementCount DecrementFunctionFromParent={handleDecrement} />


        
        </div>
  )
}

export default Counter