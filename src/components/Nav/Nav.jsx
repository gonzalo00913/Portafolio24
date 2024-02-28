import { NavLink } from "react-router-dom";
import "../../index.css";
import style from "../Nav/nav.module.css";
import imgLogo from "../../assets/naranja.png";

const Nav = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <NavLink to="/">
         <div className="">
          <img className={style.imgLogo} src={imgLogo} alt="logo" />
        </div>
        </NavLink>
        <div className={style.containerLinks}>
          <NavLink className={style.link} to="/" exact title="Home">
           <i className="fa-solid fa-house"></i><br />
          <span className={style.nameIcon}></span>
          </NavLink>
          <NavLink className={style.link} to="/Skills" title="Skills">
              <i className="fa-solid fa-gear"></i><br />
          <span className={style.nameIcon}></span>
          </NavLink>
          <NavLink className={style.link} to="/Projects" title="Projects">
               <i className="fa-solid fa-sheet-plastic"></i><br />
          <span className={style.nameIcon}></span>
          </NavLink>
          <NavLink className={style.link} to="/Contact">
           <i className="fa-solid fa-phone"></i><br />
          <span className={style.nameIcon}></span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
