import React from 'react'

const Days = ({days}) => {




  return (
    <ul>
        {days.map(day => <li>{day}</li>)}
    </ul>
  )
}

export default Days