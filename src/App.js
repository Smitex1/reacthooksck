import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

class App extends Component {
  state = {
    movies: [
      {
        title: 'Extraction2',
        description: 'Description of Extraction2',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Iogl9gdBzPjuIq51L4sUCvD6B0QazqgO3d58bD8HJXz-Ais5Z5N4e6UL&s',
        rating: 4.5,
      },
      {
        title: 'John Wick',
        description: 'Description of John Wick',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqs29hmkWrAkEgFeNve7X8soVp2Gp8bLYDQb9TbfsCRKxXXAdgc4D05V9&s',
        rating: 3.8,
      },
    ],
    filteredMovies: [],
  };

  handleAddMovie = (newMovie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  };

  handleFilter = ({ title, rating }) => {
    const { movies } = this.state;

    const filteredMovies = movies.filter((movie) => {
      const matchTitle = title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchRating = rating ? movie.rating >= rating : true;

      return matchTitle && matchRating;
    });

    this.setState({
      filteredMovies,
    });
  };

  render() {
    const { movies, filteredMovies } = this.state;

    return (
      <div>
        <h1>My Movie App</h1>
        <Filter onFilter={this.handleFilter} />
        <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
        {/*   this is to add a form or input fields to add a new movie */}
      </div>
    );
  }
}

export default App;
