import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contato</h2>
          <div className="text__muted description">
            Estou em busca de novas oportunidades para colaborar em projetos
            desafiadores e inovadores. Se você tem uma ideia, uma oportunidade
            ou simplesmente quer trocar algumas ideias sobre desenvolvimento
            front-end, ficarei feliz em ouvir você!
          </div>
        </div>

        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>gabrielborgesschmidt@gmail.com</h5>
              <a
                href="mailto:gabrielborgesschmidt@gmail.com"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Enviar mensagem
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>WhatsApp</h3>
              <h5>(51) 9 9420-7862</h5>
              <a
                href="https://wa.me/5551994207862"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Enviar mensagem
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}

        </div>
      </div>
    </section>
  );
};

export default Contact;
