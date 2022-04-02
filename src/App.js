import {useEffect} from 'react';
import './App.css';

//API key: 316b61d2

const API_URL = "http://www.omdbapi.com/?apikey=316b61d2";

const App = () => {

    const searchMovies = async (title) =>  {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
  
        console.log(data)
    }

  useEffect(()=>{
    searchMovies('Batman')
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
