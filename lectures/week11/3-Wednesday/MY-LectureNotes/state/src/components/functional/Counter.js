import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0) 


  return (
    <div>
        
        Counter

        <h1>{count}</h1>

        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )
}

export default Counter

// const name = () =>setCount(count + 1)



//setCount(count + 1)