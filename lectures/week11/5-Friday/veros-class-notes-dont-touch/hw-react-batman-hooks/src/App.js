import React, {useState, useEffect} from 'react'
import Movies from './components/Movies'


// make your api call here
const App = () => {

  const [movieData, setMovieData] = useState([])// [{}, {}, {}]

  useEffect(() => {
    
    const getMovies = async() => {
      
      let results = await fetch('https://www.omdbapi.com/?s=batman&apikey=d772336b')
      let data = await results.json(); 

      console.log(data.Search);
      setMovieData(data.Search)
    }

    getMovies()

  }, [])

  console.log("app.js", movieData);

  return (
    <>
        <Movies data={movieData} />

    </>
  )
}

export default App
