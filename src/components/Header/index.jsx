import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Header.css";

const Header = () => {
  const container = useRef();
  gsap.registerPlugin(useGSAP);
  //const timeline = gsap.timeline();

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          duration: 1,
          opacity: 0.5,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
        }
      );
      gsap.from(".intro__text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });
      const timeline = gsap.timeline();
      timeline
        .from(".header__info__top", {
          opacity: 0,
        })
        .from(".header__title", {
          opacity: 0,
          y: -30,
        })
        .from(".header__decription", {
          opacity: 0,
        })
        .from(".btn", {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        });
    },
    { scope: container }
  );
  return (
    <header id="header" className="blur-effect" ref={container}>
      <div className="stroke__text intro__text">DEV</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Olá! Me chamo{" "}
              <span className="color__primary">Gabriel Borges</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                Desenvolvedor Frontend
              </h1>
              <p className="header__decription text__muted">
                Olá! Sou Gabriel Borges, desenvolvedor Frontend especializado em
                React, Next.js, Tailwind CSS, HTML, CSS, JavaScript e
                TypeScript. Estou sempre em busca de aprendizado e desafios para
                aprimorar minhas habilidades.
              </p>
            </div>
            <div className="header__info__bottom">
              <button className="btn">
                <a href="wa.me/5551994207862">Whatsapp</a>
              </button>
              <button className="btn">
                <a href="mailto:gabrielborgesschmidt@gmail.com">Email</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
