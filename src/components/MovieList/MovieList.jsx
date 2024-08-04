import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import React from "react";
import { startLinkPic } from "../services/const.js";
import picDef from "../../assets/grey.jpg";

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
                  src={poster_path ? `${startLinkPic}${poster_path}` : picDef}
                  alt={title}
                />
                {!poster_path && <p className={css.imgText}>No photo.</p>}
                <p className={css.info}>{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
