import React from 'react';
import { Link } from 'react-router';
import './hedder.css';

const Hedder = () => {
  return (
    <div>
      <h3>This is hedder</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movielse">Movielse</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Hedder;