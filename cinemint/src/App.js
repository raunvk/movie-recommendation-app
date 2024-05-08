import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getAllMovies = async () => {
    try {
      const response = await api.get(`/movie/all`);
      console.log(response.data);
      setMovies(response.data);
    }
    catch(error) {
      console.log(error);
    }
  };

  const getMoviesByKeyword = async (keyword) => {
    try {
      const response = await api.get(`/movie/all/${keyword}`);
      setMovies(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
        const response = await api.get(`/movie/id/${movieId}`);
        const singleMovie = response.data;
        setMovie(singleMovie);
        setReviews(singleMovie.reviews);
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [])

  return (
    <div className="App">
      <Header getMoviesByKeyword={getMoviesByKeyword} getAllMovies={getAllMovies} />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/:keyword" element={<Home movies={movies} />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer/>} />
          <Route path="/reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
