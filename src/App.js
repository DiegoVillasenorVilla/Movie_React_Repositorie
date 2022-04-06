import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


//API key: 316b61d2

const API_URL = "http://www.omdbapi.com/?apikey=316b61d2";

const movie1 = {
    Title: 'The Batman', 
    Year: '2022', 
    imdbID: 'tt1877830', 
    Type: 'movie', 
    Poster: "N/A"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>  {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

       console.log(data);
    };

  useEffect(()=>{
    searchMovies('Batman')
  }, []);

  return (
    <div className="app">
      <h1>Movie City</h1>

      <div className='search'>
        <input 
          placeholder="Search a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }
        />
        <img  
          src={SearchIcon} 
          alt="search"
          onClick={ () => searchMovies(searchTerm) }
        />
      </div>
       
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
           ))
          }
             
        </div>
        ) : (
          <div>
           <h2> No found any movie with this name</h2>
          </div>
        )
      }
        
    </div> 
       
  );
};

export default App;
