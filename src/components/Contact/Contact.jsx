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
      <form class={style.form} ref={formRef} onSubmit={handleSubmit}>
        
        <input
          placeholder="Ingresa tu nombre aqui..."
          type="text"
          className={style.input}
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Ingresa tu correo electronico aqui..."
          type="email"
          className={style.input}
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Tu mensaje..."
          className={style.input}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className={style.buton} type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>
  </div>
  );
};

export default Contact;
