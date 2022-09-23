import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import incrementCount from '../actions/incrementCount'

const CountHooks = () => {

  const count = useSelector(state => state.count) // count is mapped from global state
  const dispatch = useDispatch()   //store.dispatch(fun)
  
  return (
    <>
      
      <h2>{count}</h2>

      <button onClick={()=>dispatch(incrementCount(3))}>Increment</button>
    </>
  )
}

export default CountHooks
