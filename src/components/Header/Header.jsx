import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <h3>goit-react-hw-05</h3>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
          {/* <li>
            <NavLink className={buildLinkClass} to="/about">
              About
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
