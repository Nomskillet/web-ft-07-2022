import React from 'react'
import Book from './Book'

const Books = ({data}) => {

    // [{}, {}, {}]
    //          |

    //ul li
  return (
    <div className="row">
    
    

        {data.map(bookObj =>{
            return <div className="col-3"> 
            
            
                <Book bookProp={bookObj} />

            </div>
        })}
    

    </div>
  )
}

export default Books