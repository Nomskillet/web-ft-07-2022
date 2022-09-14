import React from 'react'
// import '../index.css'

const Welcome = () => {
  return (
    <>
        
        
       {/* <div style={{backgroundColor: 'blue', fontSize: '50px'}} className='div1'> Welcome to our space</div> */}
       <div style={myStyles.h1Style} className='div1'> Welcome to our space</div>
       <div style={myStyles.aNewStyle} className='div1'> Welcome to our space</div>

        
    </>
  )
}

const myStyles ={
    h1Style : {
        backgroundColor: 'orange',
        fontSize: '75px'
    },
    aNewStyle : {
        backgroundColor: 'teal',
        fontSize: '30px'
    }

}


export default Welcome