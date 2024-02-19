import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className='cont'>
      <h2>CardPage</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt minus vitae esse, repellendus reiciendis enim quibusdam ipsum consequuntur atque numquam nulla a sed quod! Facere assumenda dolor neque distinctio qui earum saepe, eligendi reprehenderit aspernatur. Ad perferendis ut a magnam ducimus tempore error recusandae! Similique explicabo veritatis placeat reprehenderit.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Card;
