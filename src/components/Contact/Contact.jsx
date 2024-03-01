import style from "../Contact/contact.module.css";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);

    const servideId = "service_97k1yxv";
    const templateId = "template_k6zej7q";
    const apiKey = "d_vq503pTgx_-I6Ol";

    emailjs
      .sendForm(servideId, templateId, formRef.current, apiKey)
      .then((result) => {
        resetForm();
        setTimeout(() => {
          alert("Mensaje enviado", result.text);
        }, 100);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsSending(false);
      });
  };

  const resetForm = () => {
    formRef.current.querySelector('[name="name"]').value = "";
    formRef.current.querySelector('[name="email"]').value = "";
    formRef.current.querySelector('[name="message"]').value = "";
  };

  return (
    <div className={style.containerForm}>
        <h2>Contacto</h2>
      <form
        className={style.contenedorEmail}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className={style.containerNeb}>
          <div className={style.containerName}>
            <label htmlFor="name"></label>
            <input
              placeholder="Nombre..."
              type="text"
              className={style.input} 
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={style.containerEmail}>
            <label htmlFor="email"></label>
            <input
              placeholder="Correo electronico..."
              type="email"
              className={style.input} 
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className={style.containerMensaje}>
            <label htmlFor="message"></label>
            <textarea
              placeholder="mensaje..."
              className={style.textarea}
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
                 <button className={style.buton} type="submit" disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar"}
          </button>
          </div>
     
       
      </form>
    </div>
  );
};

export default Contact;
