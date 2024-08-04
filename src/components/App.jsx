import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../components/Navigation/Navigation.jsx";
// import HomePage from "../pages/HomePage/HomePage.jsx";
// import MoviesPage from "../pages/MoviesPage/MoviesPage.jsx";
// import NotFound from "../pages/NotFound/NotFound.jsx";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "../components/MovieCast/MovieCast.jsx";
import MovieReviews from "../components/MovieReviews/MovieReviews.jsx";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);

function App() {
  return (
    <div className={css.root}>
      <Navigation />
      <Suspense fallback={<h2>Loading your components.</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

//http://localhost:5173/users/1
//http://localhost:5173/users/2
//http://localhost:5173/users/33
