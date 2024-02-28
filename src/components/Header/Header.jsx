import style from "../Header/header.module.css";
import img from "../../assets/me.png";
import worldCountryIcon from "../../assets/world-country.png";
import CV from "../../assets/GonzaloMasa-CV.pdf";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.containerHeader}>
      <header className={style.containerInfo}>
        <div>
          <h1 className={style.title}>Gonzalo Masa</h1>
          <div>
            <p className={style.sizeText}>
              Programador web, enfocado en aprender y crecer continuamente.
              Apasionado por el trabajo en equipo
            </p>
            <div className={style.flexIconCountry}>
              <img className={style.iconSize} src={worldCountryIcon} alt="" />
              <p className={style.colorTextCountry}>
                Ensenada, Buenos Aires, Argentina
              </p>
            </div>

            <div className="buttons">
                <NavLink to="/Contact">
              <button className={style.abuotBtn}>Contacto</button>
               </NavLink>
              <button className={style.cvBtn}>
                <a
                  className={style.btnPdf}
                  href={CV}
                  download="GonzaloMasa-CV.pdf"
                >
                  Descargar CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className={style.imgSize} src={img} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
