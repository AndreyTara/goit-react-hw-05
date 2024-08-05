import { useLocation, useSearchParams } from "react-router-dom";
import {
  fetchSearchByQuery,
  fetchTrending,
} from "../../components/services/api";
import css from "./MoviesPage.module.css";
import React, { useEffect, useState } from "react";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      setIsError(false);
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
    if (!value) {
      return setSearchParams({});
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
    setIsError(false);
  };

  return (
    <>
      <MovieSearch onHandleSubmit={onHandleSubmit} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data... try again...</p>}
      {query?.length !== 0 && items?.length === 0 && (
        <p>No data available...</p>
      )}
      {items?.length !== 0 && <MovieList items={items} />}
    </>
  );
};

export default MoviesPage;
