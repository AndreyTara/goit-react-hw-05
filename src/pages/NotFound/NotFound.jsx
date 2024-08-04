import { NavLink } from "react-router-dom";
import css from "./NotFound.module.css";
import React from "react";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const NotFound = () => {
  return (
    <div>
      <p>Page not found... </p>
      <NavLink className={buildLinkClass} to="/">
        Go to Home page..
      </NavLink>
    </div>
  );
};

export default NotFound;
