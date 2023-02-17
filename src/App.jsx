import { useState, useEffect } from 'react'
import './App.css'
import { Movie } from './Components/Movie';

function App() {
  const [movie, setMovie] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d43daf606msh5e519f4689a8d04p1863d1jsne033c52d5166',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  
  async function getMovies(){
    try {
    let data = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    let res = await data.json();
		setMovie(res)
    } catch (error) {
      console.log(error)
    }
  }
	useEffect(() => {
		getMovies();
	}, [])
	
  return (
    <div className="App">
      <h1 className='title'>🎥 Movies</h1>
			{movie?
			<Movie
				movie = {movie}
			/>:null}
    </div>
  )
}

export default App
