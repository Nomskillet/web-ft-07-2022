import React, {useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom'


function About() {

    const navigate = useNavigate();


    const {aboutID} = useParams();

    useEffect(() =>{
        document.title = "about Us"
    }, [])


    const handleClick = () => {

        navigate('/')
     }
  return (
    <div>
       
       <h1>
        About Us
       </h1>

       <h2>{aboutID}</h2>

    <button onClick={handleClick}> Go Home</button>

    </div>
  )
}

export default About