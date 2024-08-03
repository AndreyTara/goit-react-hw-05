import { Link, useLocation } from "react-router-dom";
import css from "./HomeList.module.css";
import React from "react";
const HomeList = ({ items }) => {
  const location = useLocation();
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li className={css.item} key={item.id} state={location}>
              <Link to={item.id.toString()}>
                <p className={css.info}>Title:{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeList;
