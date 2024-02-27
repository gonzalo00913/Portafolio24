import style from "../Skills/skills.module.css";
import logoHtml from "../../assets/logos/html.png";
import logoCss from "../../assets/logos/css.png";
import logoJs from "../../assets/logos/js.png";
import logoReact from "../../assets/logos/react.png";
import redux from "../../assets/logos/redux.png";
import logoExpress from "../../assets/logos/express.png";
import logoGit from "../../assets/logos/git.png";
import logoNode from "../../assets/logos/nodejs.png";
import logoSQL from "../../assets/logos/sql.png";
import logoBootstrap from "../../assets/logos/bootstrap.png";
import logoPostgresql from "../../assets/logos/postgresql.png";
import sequelize from "../../assets/logos/sequelize.png";
import mongodb from "../../assets/logos/mongodb.png";
import github from "../../assets/logos/github.png";

import trello from "../../assets/logos/trello.png";
//import { NavLink } from "react-router-dom";

/* import CV from "../assets/GonzaloMasa-CV.pdf";
import "../Habilidades/styleHabilidades.css"; */

const Habilidades = () => {
  return (
    <div className={style.containerAll}>
      <h2>Skills</h2>
      <div>
        <section className={style.containerLogos}>
          <div>
            <img className={style.logoHabilidades} src={logoHtml} alt="" />
            <p className={style.PnombreTecnologia}>HTML</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={logoCss} alt="" />
            <p className={style.PnombreTecnologia}>CSS</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={logoJs} alt="" />
            <p className={style.PnombreTecnologia}>JavaScript</p>
          </div>
     
          <div>
            <img className={style.logoHabilidades} src={logoReact} alt="" />
            <p className={style.PnombreTecnologia}>React</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={redux} alt="" />
            <p className={style.PnombreTecnologia}>Redux</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={logoNode} alt="" />
            <p className={style.PnombreTecnologia}>Node.js</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={logoExpress} alt="" />
            <p className={style.PnombreTecnologia}>Express.js</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={logoSQL} alt="" />
            <p className={style.PnombreTecnologia}>SQL</p>
          </div>
          <div>
            <img
              className={style.logoHabilidades}
              src={logoPostgresql}
              alt=""
            />
            <p className={style.PnombreTecnologia}>PostgreSQL</p>
          </div>
          <div>
            <img className={style.logoHabilidades} src={mongodb} alt="" />
            <p className={style.PnombreTecnologia}>MongoDB</p>
          </div>

          <div>
            <img className={style.logoHabilidades} src={logoGit} alt="" />
            <p className={style.PnombreTecnologia}>Git</p>
          </div>
      

          <div>
            <img className={style.logoHabilidades} src={trello} alt="" />
            <p className={style.PnombreTecnologia}>Trello</p>
          </div>
        </section>
        {/*         <p className="parrafo-habilidades">
          <button className="cv-download">
            <a className="btn-pdf" href={CV} download="GonzaloMasa-CV.pdf">
              Descargar CV
            </a>
          </button>
          <NavLink to={"/certificados"}>
            <button className="cv-download">Ver Certificados</button>
          </NavLink>
        </p> */}
      </div>
    </div>
  );
};

export default Habilidades;
