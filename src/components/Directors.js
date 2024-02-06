import React from "react";
import { directors } from "../data";

function Directors() {
const directorsName = directors.map((director, index) => 
  <p key={index}>{director.name}</p>
)

const directorsMovies = directors.map((director, index) => 
  <li key={index}>{director.movies}</li>
)

  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  <div>
    {directorsName}
    <ul>{directorsMovies}</ul>
  </div>
  </div>;
}

export default Directors;
