import React, { useState, useEffect } from "react";
import "./Movies.css";
import "./MovieCard";
import MovieCard from "./MovieCard";
import axios from "./axios";

function Movies({ SelectedCategory }) {
  // Using React hooks --> useState and useEffect
  const [films, setFilms] = useState([]); //Empty Array for rendering the MovieCard componenet

  //Connecting the data from API request to our React front-end using UseEffect and async to

  useEffect(() => {
    async function getData() {
      const request = await axios.get(SelectedCategory);
      setFilms(request.data.results);
      //console.log(request); //Testing to see if I'm getting a response back
      return request;
    }

    getData();
  },[SelectedCategory]);

  return (
    <div className="movies">
      {films.map((film) => (
        <MovieCard key={film.id} film={film} /> // Mapping data to MovieCard componenet using props
      ))}
    </div>
  );
}

export default Movies;
