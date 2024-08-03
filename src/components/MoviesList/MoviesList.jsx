import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";
import picDef from "../../assets/grey.jpg";

const MoviesList = ({ items = [] }) => {
  const startLinkPic = "https://image.tmdb.org/t/p/w500/";
  const location = useLocation();

  return (
    <ul className={css.ul}>
      {items.map((item) => {
        return (
          <li className={css.li} key={item.id} state={location}>
            <Link to={item.id.toString()}>
              <p className={css.info}>Title:{item.title}</p>
              {/* <img
                className={css.img}
                src={
                  item.poster_path
                    ? `${startLinkPic}${item.poster_path}`
                    : picDef
                }
                alt={item.title}
              />
              <div className={css.soc}>
                <p className={css.info}>Title:{item.title}</p>

                <p className={css.info}>
                  Release date:
                  {item.release_date
                    ? ` ${item.release_date}`
                    : " not specified"}
                </p>
              </div> */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
