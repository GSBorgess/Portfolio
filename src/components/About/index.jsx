import React, { useEffect, useRef } from "react";
import "./About.css";
import { profile } from "../../images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const container = useRef(null);
  //Register plugin
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".about__container",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section ref={container} id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h4 className="primary__title">Sobre mim</h4>
          <h1 className="title">
            Eu sou <span className="color__primary">Gabriel Borges</span>
          </h1>
          <p className="text__muted description">
            Me chamo Gabriel Borges, sou desenvolvedor front-end em busca da
            primeira oportunidade de emprego e um forte interesse em trabalhar
            em projetos inovadores e colaborativos. Tenho experiência em
            JavaScript, React , Typescript, Next.js, entre outros.
            <br />
            <br />
            Além de haver trabalhado com criação de sites utilizando Wordpress
            por mais de um ano mais de um ano, adquirindo experiencia em UX/UI
            design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
