import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  const movieTitle = movies.map((movie, index) =>
    <p key={index}>{movie.title}</p>);

  const movieTime = movies.map((movie, index) =>
    <p key={index}>{movie.time}</p>);

  const movieGenres = movies.map((movie, index) =>
    <li key={index}>{movie.genres}</li>
  );

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      <div>
        {movieTitle}
        {movieTime}
        <ul>{movieGenres}</ul>
      </div>
    </div>
    
  );
}

export default Movies;
