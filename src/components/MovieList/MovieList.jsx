import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import React from "react";
import { startLinkPic } from "../services/const.js";

const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {items.map(({ id, poster_path, title }) => {
          return (
            <li className={css.item} key={id} state={location}>
              <NavLink to={`/movies/${id.toString()}}`}>
                <img
                  className={css.img}
                  src={`${startLinkPic}${poster_path}`}
                  alt={title}
                />
                <p className={css.info}>Title:{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
