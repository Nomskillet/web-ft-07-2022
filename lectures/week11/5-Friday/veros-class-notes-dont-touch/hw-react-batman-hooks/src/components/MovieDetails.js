import React from 'react'

//shows details of movie, and is only presentational
const MovieDetails = ({movieObj}) => {

  console.log("Movie Details", movieObj);


  return (
    <div >
        <h3>{movieObj.Title == null ? '' : movieObj.Title }</h3>
        <img src={movieObj.Poster ? movieObj.Poster: ''} alt="" height=""/> 
        <h5> Directed By: {movieObj.Director ? movieObj.Director: ""}</h5>
        <h5> Released: {movieObj.Released ? movieObj.Released: ""}</h5>
        <h5> Year: {movieObj.Year ? movieObj.Year:""}</h5>
        <p>{movieObj.Plot ? movieObj.Plot: ""}</p>
    </div>
  )
}

export default MovieDetails
