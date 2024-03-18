import {useState, useEffect } from "react";
import './index.css'
import SearchIcon from './search.svg'
import Movies from "./Movies";



const API_URL ="http://www.omdbapi.com?apikey=c68df3e";



const App = () => {
  const [movies, setMovies] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    setMovies(data.Search)
    setIsPending(false)
  }

  useEffect(() => {
    searchMovies("")
  }, [])
  return (
    <div className="app">
      <h1>MeeksMovieLand</h1>
      <div className="search">
        <input 
        type="search" 
        placeholder="Search for movies/series" 
        value={searchTerm} 
        onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={()=>{searchMovies(searchTerm) }}/>
      </div>

      {
        isPending && <div><h1>Loading...</h1></div>
      }

      {
          movies?.length > 0
          ? (
            <div className="container">
            {
              movies.map((movie) => (
                <Movies movie={movie}/>
              ))
            }
          </div>
          ) :(
            <div className="empty">
              <h2>No movies/series yet!</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
