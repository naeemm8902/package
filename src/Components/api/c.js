import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import './Movies.css'; // Assuming you have a CSS file named Movies.css
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=a5e7fc39a647083acf81c810b6a97357',
        );
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="movie-grid">
          {movies.map((movie) => (
            <Link key={movie.id} to="/Moviesdetails" className="movie-link">
              <div className="movie-card">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
