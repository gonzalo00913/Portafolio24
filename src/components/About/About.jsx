import style from "../About/about.module.css";

const About = () => {
  return (
    <div className={style.containerAbout}>
      <h2>Sobre mi</h2>
      <p className={style.sizeText}>
        Desarrolador Full Stack con experiencia en el desarrollo Front-End
        utilizando HTML5, CSS3, JavaScript, React, Redux. En el Back-End,
        trabaje con Node.js y Express para para crear APIs RESTful y gestionar
        la lógica del servidor. También cuento con conocimientos en el manejo de
        bases de datos como MongoDB, PostgreSQL y el uso de Sequelize(ORM)
      </p>
    </div>
  );
};

export default About;
