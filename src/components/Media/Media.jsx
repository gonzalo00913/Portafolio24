import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import style from "../Media/media.module.css";

const Media = () => {
  return (
    <div>
      <div className={style.socialMedia}>
        <a href="https://www.linkedin.com/in/gonzalo-masa/" target="_blanck">
          <img className={style.iconsMediaSize} src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/gonzalo00913" target="_blanck">
          <img className={style.iconsMediaSize} src={github} alt="GitHub" />
        </a>
        <a href="https://twitter.com/GonzaloMsa" target="_blanck">
          <img className={style.iconsMediaSize} src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Media;
