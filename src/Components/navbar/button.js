import React, { useState } from 'react';
import './Button.css';

const Button = ({ text, onClick, color, backgroundColor, hover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    color: color || '#fff',
    backgroundColor: backgroundColor || 'blue',
    ...(isHovered && hover && { backgroundColor: hover }),
  };

  return (
    <button
      className="custom-button"
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
