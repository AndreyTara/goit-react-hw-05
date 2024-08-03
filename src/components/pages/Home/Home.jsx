import css from "./Home.module.css";
import React from "react";
import HomeList from "../../HomeList/HomeList";

import { useState, useEffect } from "react";
import { fetchNews } from "../../services/api.js";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchNews();
        setItems((pref) => [...pref, ...response.results]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <HomeList items={items} />
    </div>
  );
};

export default Home;
