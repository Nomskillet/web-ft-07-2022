import React from 'react'
import Welcome from './components/Welcome.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>

    <Navbar brandLink="Hello World" brandText="July 2022" brandDescription="learn react" />

    <div className='row'>
      <div className='col-6 bg-primary'>Hello World</div>
      <div className='col-3 bg-success'>Column 3</div>
      <div className='col-3 bg-warning'>Column 3 warning</div>
    </div>
      <h1 id='h1a'>Styling in React</h1>

    <Welcome />

    </>
  )
}

export default App
