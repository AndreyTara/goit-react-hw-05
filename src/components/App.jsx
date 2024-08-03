// import { useState, useEffect } from "react";
// import { url, objData } from "./services/const.js";
// import { fetchData } from "./services/fetchData.js";

import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Header from "./Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Credits from "./Credits/Credits.jsx";
import Reviews from "./Reviews/Reviews.jsx";

// import MovieDetails from "./MovieDetails/MovieDetails.jsx";
import HomeDetails from "./HomeDetails/HomeDetails.jsx";
function App() {
  return (
    <div className={css.root}>
      <Header />
      <Routes>
        <Route path="/about" element={<h2>About my favorit site</h2>} />
        <Route path="/" element={<Home />} />
        <Route path="/:itemId" element={<HomeDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

//http://localhost:5173/users/1
//http://localhost:5173/users/2
//http://localhost:5173/users/33
