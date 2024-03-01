import style from "../Cerifications/certifications.module.css";
import henryfs from "../../assets/certifications/henry-fsd.png";
import henryta from "../../assets/certifications/henry-ta.png";
import itMasterAcademy from "../../assets/certifications/it-master-academy-python.png";
import PotenciarArgentina from "../../assets/certifications/potenciar-arg-certificado.png";


const Certifications = () => {
  return (
    <div className={style.containerAll}>
        <h2>Certificados</h2>
        <div className={style.flexCertification}>
            <img className={style.imgCertifiactions} src={henryta} alt="" />
            <img className={style.imgCertifiactions} src={henryfs} alt="" />
            <img className={style.imgCertifiactions} src={PotenciarArgentina} alt="" />
            <img className={style.imgCertifiactions} src={itMasterAcademy} alt="" />
        </div>
    </div>
  )
}

export default Certifications