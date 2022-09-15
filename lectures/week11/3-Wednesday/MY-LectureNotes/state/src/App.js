import React from 'react'
import Counter from './components/functional/Counter' //functional component
import CounterC from './components/class/Counter' // class based component
import Fireworks from './components/functional/Fireworks'
import News from './components/functional/News'

const App = () => {
  return (
    <>

      <Counter />
      <Fireworks />

      <News />
    
    </>
  )
}

export default App;
