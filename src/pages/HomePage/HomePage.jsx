import css from "./HomePage.module.css";
import React from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";

import { useState, useEffect } from "react";
import { fetchTrending } from "../../components/services/api.js";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrending();
        setItems((pref) => [...pref, ...response.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (items.length < 1 || isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h2>Home</h2>
      {items.length > 0 ? <MovieList items={items} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
