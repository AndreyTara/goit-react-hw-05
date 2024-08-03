import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchDetails } from "../../components/services/api.js";
import { useState, useEffect } from "react";
import { startLinkPic } from "../services/const.js";
import css from "./HomeDetails.module.css";
import picDef from "../../assets/grey.jpg";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const HomeDetails = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.itemId;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchDetails({ id });
        setItem(response);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, [id]);

  if (!item && isLoading) {
    return <h3>loading...</h3>;
  }
  return (
    <div className={css.wrap}>
      <img
        className={css.img}
        src={item.poster_path ? `${startLinkPic}${item.poster_path}` : picDef}
        alt={item.title}
      />
      <div className={css.box}>
        <h2 className={css.info}>Title:{item.title}</h2>
        <p className={css.info}>
          Release date:
          {item.release_date ? ` ${item.release_date}` : " not specified"}
        </p>
      </div>
      <div className={css.boxBtn}>
        <h2>Addition information</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="credits" className={buildLinkClass}>
              Credits
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeDetails;

// https://localhost:5173/
