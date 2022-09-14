import React from 'react'


const Welcome = () => {
  return (
    <>
        {/* <div style={{backgroundColor: 'blue', fontSize: '30px'}} className="div1">Welcome to our space</div> */}
        <div style={myStyles.h1Style} className="div1">Welcome to our space</div>
        <div style={myStyles.aNewStyle} className="div1">Welcome to our space</div>
    </>
  )
}


const myStyles = {
    h1Style : {
        backgroundColor: 'orange', 
        fontSize: '50px'
    }, 
    aNewStyle: {
        backgroundColor: 'teal', 
        fontSize: '30px'
    }
}

export default Welcome