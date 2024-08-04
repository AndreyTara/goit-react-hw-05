import css from "./HomePage.module.css";
import React from "react";
import MovieList from "../../MovieList/MovieList.jsx";

import { useState, useEffect } from "react";
import { fetchNews } from "../../services/api.js";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchNews();
        setItems((pref) => [...pref, ...response.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  if (!items && isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>Home</h2>
      <MovieList items={items} />
    </div>
  );
};

export default Home;
