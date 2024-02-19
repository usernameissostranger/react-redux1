import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='container'>
        <Link to="/card">
        <div className='col1'>
          <h2>Card 1</h2>
          <p>This is Card 1</p>
        </div>
      </Link>
      <Link to="/card2">
        <div className='col2'>
          <h2>Card 2</h2>
          <p>This is Card 2</p>
        </div>
      </Link>
      <Link to="/card3">
        <div className='col3'>
          <h2>Card 3</h2>
          <p>This is Card 3</p>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Home;
