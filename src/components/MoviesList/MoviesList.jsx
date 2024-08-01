import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";
import picDef from "../../assets/grey.jpg";
const MoviesList = ({ items = [] }) => {
  const startLinkPic = "https://image.tmdb.org/t/p/w500/";
  const location = useLocation();
  console.log(items);
  return (
    // <div>
    //   <ul className={css.ul}>
    //     {movies.map((movie) => (
    //       <li className={css.item} key={movie.id}>
    //         {/* state={location} */}
    //         <Link to={movie.id.toString()}>
    //           <img
    //             className={css.img}
    //             src={`${startLinkPic}${movie.poster_path}`}
    //             alt={movie.title}
    //           />
    //           <p>{movie.title}</p>
    //           <p>{movie.release_date}</p>
    //         </Link>
    //       </li>

    //     ))}
    //   </ul>
    // </div>

    <ul className={css.ul}>
      {items.map((item, index) => {
        return (
          <li className={css.li} key={item.id} state={location}>
            <div className={css.wrap}>
              <img
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
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
