import React, { Component } from 'react'
import {connect} from 'react-redux'; //HOC
import incrementCount from '../actions/incrementCount'

class CountClass extends Component {

  constructor() {
    
    super()
    
  }

  render() {
    return (
      <>
        Count with Class Based Components

        <h1>{this.props.counter}</h1>

        <button onClick={this.props.increment}>Increment</button>
      </>
    )
  }
}

// useState(state=> state.count)

let mapStateToProp = (state)=>{

  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    increment : ()=>dispatch(incrementCount(5))
  }
  
}

export default connect(mapStateToProp, mapDispatchToProps)(CountClass)
