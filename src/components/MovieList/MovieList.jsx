import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import React from "react";
import { startLinkPic } from "../services/const.js";

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li className={css.item} key={item.id} state={location}>
              <Link to={item.id.toString()}>
                <img
                  className={css.img}
                  src={`${startLinkPic}${item.poster_path}`}
                  alt={item.title}
                />
                <p className={css.info}>Title:{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
