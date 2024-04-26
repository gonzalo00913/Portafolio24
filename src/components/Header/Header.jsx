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
             Creo aplicaciones web modernas. Priorizo la calidad y la escalabilidad en cada proyecto. Enfocado en aprender y crecer continuamente.  
            </p>
            <div className={style.flexIconCountry}>
              <img className={style.iconSize} src={worldCountryIcon} alt="" />
              <p className={style.colorTextCountry}>
                Ensenada, Buenos Aires Argentina
              </p>
            </div>

            <div className="buttons">
                <NavLink to="/Contact">
              <button class="button danger-button"><span class="text">Contacto</span></button>
               </NavLink>
              <button class="button danger-button">
                <a
                  className={style.btnPdf}
                  href={CV}
                  download="GonzaloMasa-CV.pdf"
                >
                  <span class="text">Descargar CV</span>
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
