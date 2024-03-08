import style from "../Projects/projects.module.css";
import github from "../../assets/github.png";

const Projects = () => {
  return (
    <div className={style.containerAll}>
      <h2 className={style.titleProjects}>Proyectos</h2>
      <section className={style.containerProyects}>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a href="https://granodeoro.vercel.app/" target="_blanck">
              <h4>Grano de Oro</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/Dashboard"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            Contribuí al desarrollo front-end de una pagina web dedicada a la
            venta de café.
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>JavaScript</span>
            <span className={style.spanTecno}>Vite</span>
            <span className={style.spanTecno}>Redux</span>
            <span className={style.spanTecno}>Sequelize</span>
            <span className={style.spanTecno}>Express</span>
            <span className={style.spanTecno}>Node</span>
            <span className={style.spanTecno}>PostgreSQL</span>
          </div>
        </div>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a href="https://meddyplus.netlify.app/" target="_blanck">
              <h4>Meddy plus</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/MeddyPlus-Gestion-de-Historiales-Medicos"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            Contribuí al desarrollo back-end de una pagina web dedicada a la
            gestión de historiales clínicos.
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>TypeScript</span>
            <span className={style.spanTecno}>TypeORM</span>
            <span className={style.spanTecno}>Vite</span>
            <span className={style.spanTecno}>Node</span>
            <span className={style.spanTecno}>PostgreSQL</span>
          </div>
        </div>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a
              href="https://food-app-gonzalo-masa.netlify.app/"
              target="_blanck"
            >
              <h4>Food App</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/Homemade-delights-Recetas-de-comida"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            Permite buscar, filtrar y crear recetas, y utiliza Redux para la
            gestión del estado de la aplicación
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>JavaScript</span>
            <span className={style.spanTecno}>React</span>
            <span className={style.spanTecno}>Redux</span>
            <span className={style.spanTecno}>Sequelize.js</span>
            <span className={style.spanTecno}>Express.js</span>
            <span className={style.spanTecno}>Node.js</span>
            <span className={style.spanTecno}>PostgreSQL</span>
          </div>
        </div>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a
              href="https://gonzalo00913.github.io/Project--Three-Project-Calculator/"
              target="_blanck"
            >
              <h4>Calculator</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/Project--Three-Project-Calculator"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            Utilicé JavaScript para manipular el DOM y crear la lógica de la
            calculadora.
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>JavaScript</span>
            <span className={style.spanTecno}>CSS</span>
            <span className={style.spanTecno}>Html</span>
          </div>
        </div>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a
              href="https://gonzalo00913.github.io/Project-Rock-Paper-Scissors/"
              target="_blanck"
            >
              <h4>Rock-Paper-Scissors</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/Project-Rock-Paper-Scissors"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            En mis primeros pasos, realicé un proyecto utilizando JavaScript
            Vanilla para manipular el DOM.
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>JavaScript</span>
            <span className={style.spanTecno}>CSS</span>
            <span className={style.spanTecno}>Html</span>
          </div>
        </div>
        <div className={style.projects}>
          <div className={style.titleGh}>
            <a
              href="https://gonzalo00913.github.io/Etch-A-Sketch/"
              target="_blanck"
            >
              <h4>Etch-A-Sketch</h4>
            </a>
            <a
              href="https://github.com/gonzalo00913/Etch-A-Sketch"
              target="_blanck"
            >
              <img className={style.iconsMediaSize} src={github} alt="GitHub" />
            </a>
          </div>
          <p className={style.desProjects}>
            Implementé eventos del mouse para capturar los movimientos del
            cursor y dibujar líneas en el lienzo
          </p>
          <div className={style.containerTecno}>
            <span className={style.spanTecno}>JavaScript</span>
            <span className={style.spanTecno}>CSS</span>
            <span className={style.spanTecno}>Html</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
