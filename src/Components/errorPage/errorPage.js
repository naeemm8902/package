// src/components/ErrorPage.js

import React from 'react';
import './ErrorPage.css'; // Import the CSS file for styling
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-content">
        <div className='error-image'>
          <img src='./images/error.gif' alt='error 404' />
        </div>
        <div className='error-message'>
          <h1><span>Oops!</span> Something went wrong</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
