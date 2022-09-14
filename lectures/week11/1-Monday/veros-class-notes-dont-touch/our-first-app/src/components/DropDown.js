
import React from 'react'

const DropDown = ({days, language}) => {
  return (
    <>
    
        {language}

        <select>
            {days.map(day => <option value={day}>{day}</option>)}
        </select>
    </>
  )
}

export default DropDown