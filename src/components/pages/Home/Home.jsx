import css from "./Home.module.css";

import React from "react";
import MoviesList from "../../MoviesList/MoviesList";

const Home = ({ items }) => {
  return (
    <div>
      <h2>Home</h2>
      <MoviesList items={items} />
    </div>
  );
};

export default Home;
