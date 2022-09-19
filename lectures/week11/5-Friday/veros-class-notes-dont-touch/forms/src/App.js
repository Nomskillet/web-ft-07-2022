import React, {useEffect} from 'react'
import Forms from './components/Forms'
import FormsClass from './components/FormsClass'

// import { Link } from 'react-router-dom'


const App = () => {

  useEffect(() => {
    
    document.title = "Home Page"
  }, [])

  return (
    <>
      {/* <Forms /> */}

      Home page


      {/* <ul>
        <li>
          <Link to="/">Home Page</Link>
          <Link to="/about">About Us</Link>
          <Link to="/forms">Forms</Link>
        </li>
      </ul> */}
    </>
  )
}

export default App