import React from "react";
import style from "../Footer/footer.module.css";
import Media from "../Media/Media";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contact}>
        <p className={style.info}>Email: gonzalo-masa@outlook.com</p>
        <p className={style.info}>Telefono: +54 221-561-3460</p>
      </div>
      <Media />
    </div>
  );
};

export default Footer;
