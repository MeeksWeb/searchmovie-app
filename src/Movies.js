import React from 'react'

const Movies = ({movie}) => {
  return (
      <div className="movie" key={movie.imdbID}>
         <>
         <p>{movie.Year}</p>
         </>

         <>
          <img 
          src={movie.Poster !== "N/A"? movie.Poster:"https://via.placeholder.com/400"} 
          alt={movie.Title} />
         </>

          <>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </>
        </div>
  )
}

export default Movies
