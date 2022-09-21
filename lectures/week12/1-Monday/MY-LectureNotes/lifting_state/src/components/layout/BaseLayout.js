import React from 'react'
import {Link} from 'react-router-dom'

const BaseLayout = (props) => {
  return (

    
    <div>BaseLayout

<ul>

            <li> <Link to="/"> Home Page</Link> </li>
            <li> <Link to="/counter"> counter</Link> </li>
            <li> <Link to="/project"> projects</Link> </li>
</ul>


{props.children}

<br></br>
<br></br>



    </div>
  )
}

export default BaseLayout