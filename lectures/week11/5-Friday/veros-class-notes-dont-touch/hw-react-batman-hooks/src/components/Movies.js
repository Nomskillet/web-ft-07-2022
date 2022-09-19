import React, {useState, useEffect} from 'react'
import Details from './MovieDetails'

//container component = logic and is kept and maintained
const Movies = ({data}) => {  //[{},{}]

  const [movieDetailsObj, setMovieDetailsObj] = useState(null)
  // closure
  //componentDidMount

  const displayDetails = async (e) => {
    
    e.preventDefault()

    let anchorTagID = e.target.id;
    // console.log("id of movie", anchorTagID);
    let url = `https://www.omdbapi.com/?i=${anchorTagID}&apikey=d772336b`
    let results = await fetch(url)

    let detailData  = await results.json() 

    // console.log(detailData);
    setMovieDetailsObj(detailData)

  }
  

  return (
    <>
      
      <ul>

        {data.map(movieObj => {

          return (


            <li key={movieObj.imdbID}>
              <a href="#" id={movieObj.imdbID}  onClick={displayDetails} >
              
                <img src={movieObj.Poster} id={movieObj.imdbID}  height="150px" alt="" />

                <h5 id={movieObj.imdbID}  >{movieObj.Title}</h5>
              </a>
            </li>
          )

        })}
      </ul>

      {movieDetailsObj ? <Details movieObj={movieDetailsObj}  /> : ""}
    </>
  )
}

export default Movies
