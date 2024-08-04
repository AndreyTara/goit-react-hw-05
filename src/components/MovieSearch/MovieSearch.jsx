import css from "./MovieSearch.module.css";
import React, { useState } from "react";

const MovieSearch = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty fill the field input.");
    }
    onHandleSubmit(query);
  };
  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <input
          className={css.inputSearchForm}
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
        />
        <button className={css.btnSearchForm} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
