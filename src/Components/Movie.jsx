import React from 'react'
import '../movies.css'
const Movie = ({movie}) => {
    console.log(movie)
  return (
    <>
    <div className="movies-container">
        {movie.map((m,i) => (
            <>
                <div className="movies" key={i}>
                    <h1>{m.title}</h1>
                    <h4>Rating: {m.rating}</h4>
                    <h3>{m.description}</h3>
                    <p>Genre: {m.genre[0]}</p>
                    <img src={m.image} alt="" />
                    <a href={m.trailer} target='_blank'><button>Watch trailer</button></a>
                    {/* <div className="division"></div> */}
                </div>
            </>
        ))}
    </div>
    </>
  )
}
export {Movie}
