import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Filter by title" value={title} onChange={handleTitleChange} />
      <input type="number" placeholder="Filter by rating" value={rating} onChange={handleRatingChange} />
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filter;
