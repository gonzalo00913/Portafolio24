import style from "../Header/header.module.css";
import img from "../../assets/me.png";
import worldCountryIcon from "../../assets/world-country.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import CV from "../../assets/GonzaloMasa-CV.pdf";

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
{/*                <div className={style.socialMedia}>
        <a href="https://www.linkedin.com/in/gonzalo-masa/" target="_blanck">
          <img className={style.iconsMediaSize} src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/gonzalo00913" target="_blanck">
          <img className={style.iconsMediaSize} src={github} alt="GitHub" />
        </a>
        <a href="https://twitter.com/GonzaloMsa" target="_blanck">
          <img className={style.iconsMediaSize} src={twitter} alt="Twitter" />
        </a>
      </div> */}

<div className="buttons">
          {/*   <NavLink to="/contact"> */}
              <button className={style.abuotBtn}>Contacto</button>
           {/*  </NavLink> */}
            <button className={style.cvBtn}>
              <a className={style.btnPdf} href={CV} download="GonzaloMasa-CV.pdf">
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
