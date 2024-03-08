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
          <div>
          <NavLink className={style.link} to="/" exact title="Home">
           <i className="fa-solid fa-house"></i>
          <span className={style.nameIcon}>Inicio</span>
          </NavLink>
          </div>
          <NavLink className={style.link} to="/Skills" title="Skills">
              <i className="fa-solid fa-gear"></i>
          <span className={style.nameIcon}>Tecnologías</span>
          </NavLink>

          <NavLink className={style.link} to="/Projects" title="Projects">
               <i className="fa-solid fa-sheet-plastic"></i>
          <span className={style.nameIcon}>Proyectos</span>
          </NavLink>

          <NavLink className={style.link} to="/Contact">
           <i className="fa-solid fa-phone"></i>
          <span className={style.nameIcon}>Contacto</span>
          </NavLink>

        </div>
      </nav>
    </div>
  );
};

export default Nav;
