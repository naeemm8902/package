import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import './Movies.css'; // Assuming you have a CSS file named Movies.css
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import MoviesData from '../moviedetails/MoviesData';
import Moviedetails from '../moviedetails/Moviedetails';
export default function Movies() {
    const [movies, setMovies] = useState([]);
    // const [data,setData]=useEffect(False);
    
    return (
        <div>
            <Navbar />
            
            {movies.length > 0 ? <MoviesData /> : <Moviedetails />}
        </div>
    );
}
