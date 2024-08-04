import React, { useState, useEffect } from "react";
import { fetchReviews } from "../services/api.js";
import { useParams } from "react-router-dom";
import { startLinkPic } from "../services/const.js";
import picDef from "../../assets/grey.jpg";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = params.movieId;
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchReviews({ id });
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (reviews.length < 1 && isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className={css.wrap}>
      <h2>Reviews #{reviews.length}</h2>
      <ul className={css.list}>
        {reviews.map(
          ({ id, url, author, content, author_details: { avatar_path } }) => {
            return (
              <li className={css.item} key={id}>
                <div>
                  <img
                    className={css.img}
                    src={avatar_path ? `${startLinkPic}${avatar_path}` : picDef}
                    alt={author}
                  />
                  {!avatar_path && <h6 className={css.noPhoto}>No photo ..</h6>}
                  <div className={css.info}>
                    <h4>{author}</h4>
                    <p>{content}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      GO link
                    </a>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
