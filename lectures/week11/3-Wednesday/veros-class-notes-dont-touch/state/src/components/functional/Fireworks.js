import React, {useState} from 'react'

const Fireworks = () => {       
        
  const [fire, setFire] = useState('🧨')

  return (
    <>

    <h1>{fire}</h1>

    <button onClick={()=> fire == '🧨' ? setFire('🔥' ) : setFire('🧨')}>Toggle</button>

    <br />
    </>
  )
}

export default Fireworks