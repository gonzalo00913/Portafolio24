import React, { useState } from 'react';
import Modal from 'react-modal';
import style from "../Projects/projects.module.css";
import github from "../../assets/github.png";
import automenu from "../../assets/Projects/Video21.gif";
import granoDeOro from "../../assets/Projects/grano-de-oro2.gif";
import meddyPlus from "../../assets/Projects/meddyplus.gif";

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={style.containerAll}>
      <h2 className={style.titleProjects}>Proyectos</h2>
      <section className={style.containerProyects}>
        <div>
          <div className={style.card}>
            <div className={style.cardimage}>
              <img className={style.imgsize} src={automenu} onClick={() => openModal(automenu)} />
            </div>
            <a
              href="https://github.com/nicoflorentin/auto-menu/tree/main"
              target="_blank"
            >
              <h4 className={style.cardtitle}>Auto Menu</h4>
            </a>
            <p className={style.cardbody}>
              Permite crear fácilmente un diseño de menú para un restaurante o
              bar sin necesidad de diseñar.
            </p>
            <div className={style.containerTecno}>
              <span className={style.spanTecno}>JavaScript</span>
              <span className={style.spanTecno}>Vite</span>
              <span className={style.spanTecno}>Redux</span>
              <span className={style.spanTecno}>Express</span>
              <span className={style.spanTecno}>Node</span>
              <span className={style.spanTecno}>MongoDB</span>
            </div>
          </div>
        </div>

        <div>
          <div className={style.card}>
            <div className={style.cardimage}>
              <img className={style.imgsize} src={granoDeOro} onClick={() => openModal(granoDeOro)} />
            </div>
            <a href="https://github.com/gonzalo00913/Dashboard" target="_blank">
              <h4 className={style.cardtitle}>Grano de Oro</h4>
            </a>
            <p className={style.cardbody}>
              Pagina web dedicada a la venta de cafe. Mi rol consistió en diseñar la función de prohibir o suspender usuarios de sitio web.
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
        </div>

        <div>
          <div className={style.card}>
            <div className={style.cardimage}>
              <img className={style.imgsize} src={meddyPlus} onClick={() => openModal(meddyPlus)} />
            </div>
            <a
              href="https://github.com/gonzalo00913/MeddyPlus-Gestion-de-Historiales-Medicos"
              target="_blank"
            >
              <h4 className={style.cardtitle}>Meddy plus</h4>
            </a>
            <p className={style.cardbody}>
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
        </div>

      </section>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.overlay}>
        <button onClick={closeModal} className={style.closeButton}>X</button>
        <img src={selectedImage} className={style.modalImage} />
      </Modal>
    </div>
  );
};

export default Projects;
