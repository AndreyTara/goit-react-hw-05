import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { url, objData } from "./services/const.js";
import fetchData from "./services/fetchData.js";
import css from "./App.module.css";
import Header from "./Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("star");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData({ url, query, page });
        setItems((pref) => [...pref, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, [page, query, url]);
  return (
    <div className={css.root}>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
