import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsMovies = actors.map((actor, index) => 
  <li key={index}>{actor.movies}</li>
)

  const actorsName = actors.map((actor, index) => 
  <p key={index}>{actor.name}</p>
)

  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  <div>
{actorsName}
<ul>{actorsMovies}</ul>
  </div>
  </div>;
}

export default Actors;
