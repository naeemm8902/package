import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import './Movies.css'; // Assuming you have a CSS file named Movies.css
import axios from "axios"

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=a5e7fc39a647083acf81c810b6a97357'
        );
        // Assuming response.data is an object with a property named "results" containing the movies
        setMovies(response.data.results); //results is a key in the url which contains all the dta values
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    fetchMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(selectedMovie);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {selectedMovie ? (
          <div className="selected-movie-details">
            <div className="selected-movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.original_title}
              />
            </div>
            <div className="selected-movie-details-content">
              <h2>{selectedMovie.original_title}</h2>
              <p>{selectedMovie.overview}</p>
            </div>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleMovieClick(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  className="movie-image"
                />
                <div className="movie-details">
                  <h2 className="movie-title">{movie.original_title}</h2>
                  {/* <p className="movie-overview">{movie.overview}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
