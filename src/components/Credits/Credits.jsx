import React, { useState, useEffect } from "react";
import { fetchCredits } from "./../services/api.js";
import { useParams } from "react-router-dom";
import { startLinkPic } from "../services/const.js";
import picDef from "../../assets/grey.jpg";
import css from "./Credits.module.css";

const Credits = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const id = params.itemId;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCredits({ id });
        setActors(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className={css.wrap}>
      <h2>Cast #{actors.length}</h2>
      <ul className={css.list}>
        {actors.map(({ id, character, name, profile_path }) => {
          return (
            <li className={css.item} key={id}>
              <div>
                <img
                  className={css.img}
                  src={profile_path ? `${startLinkPic}${profile_path}` : picDef}
                  alt={name}
                />
                {!profile_path && <h6 className={css.noPhoto}>No photo ..</h6>}
                <div className={css.info}>
                  <h4>{name}</h4>
                  <p>{character}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Credits;
