import React from 'react'
import Days from'./Days'
import DropDown from './DropDown'

function Name({name, days, language}) {

  

  return (
    <div>
      {name}

      <Days days={days} />

      <DropDown days={days} language={language}/>
    </div>
  )
}

export default Name
