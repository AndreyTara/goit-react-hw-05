import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../MovieSearch/MovieSearch";
import { fetchSearchByQuery, fetchTrending } from "../../services/api";
import css from "./MoviesPage.module.css";
import React, { useEffect, useState } from "react";
import MovieList from "../../MovieList/MovieList";

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchSearchByQuery({ query });
        setItems(response.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const onHandleSubmit = (value) => {
    setSearchParams({ q: value });
    setIsError(false);
  };

  return (
    <>
      <MovieSearch onHandleSubmit={onHandleSubmit} />
      {isLoading && <p>Loading...</p>}
      {(items?.length < 1 || isError) && (
        <p>Empty data or error fetch... try again...</p>
      )}
      {items.length > 1 && <MovieList items={items} />}
    </>
  );
};

export default MoviesPage;
