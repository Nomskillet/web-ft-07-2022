import React, {useState} from 'react'

const Firewors = () => {

  const [fire, setFire] = useState("🎆")
  return (

    
    <div>
      
      
      <h1>{fire}</h1> 


      <button onClick={()=> fire == "🎆" ? setFire("🔥") : setFire("🎆")}>toggle</button>

      <br/>

 

    </div>
  )
}

export default Firewors