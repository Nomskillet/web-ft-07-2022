import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//  localhost:3000/about/sdfs

const AboutUs = () => {


  const navigate = useNavigate();

  const {aboutID} = useParams();


  useEffect(() => {
    
    document.title = "About Us"
  }, [])

  const handleClick = () => {
    
    navigate('/')

  }

  return (
    <>
    
      <h1>About Us</h1>


      <h2>{aboutID}</h2>

      <button onClick={handleClick}>Go home</button>
    </>
  )
}

export default AboutUs