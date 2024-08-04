// import { useState, useEffect } from "react";
// import { url, objData } from "./services/const.js";
// import { fetchData } from "./services/fetchData.js";

import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "./Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage.jsx";
import Credits from "./Credits/Credits.jsx";
import Reviews from "./Reviews/Reviews.jsx";

function App() {
  return (
    <div className={css.root}>
      <Navigation />
      <Routes>
        <Route path="/about" element={<h2>About my favorite site</h2>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/movies" element={<MoviesPage />} />
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
