import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={posterURL} alt={title} />
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
