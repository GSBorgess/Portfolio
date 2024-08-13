import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SoftSkills.css";

const SoftSkills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  //Register plugin
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".soft__head",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );

    gsap.fromTo(
      ".soft",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "-100% bottom",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={container} id="habilidades">
      <div className="section__wrapper softs__container">
        <div className="section__header center">
          <h2 className="primary__title">Soft Skills</h2>
          <h3 className="text__muted description">
            Como desenvolvedor frontend, valorizo não apenas habilidades
            técnicas, mas também as qualidades pessoais e interpessoais que
            complementam meu trabalho. Aqui estão algumas das soft skills que me
            destacam.
          </h3>
        </div>
        <div className="softs__group">
          <article className="soft">
            <div className="soft__top">
              <h3 className="title">Comunicação</h3>
            </div>
            <div className="soft__middle">
              <p className="text__muted description">
                Capacidade de expressar ideias de forma clara e concisa,
                facilitando a colaboração com colegas de equipe e clientes.
              </p>
            </div>
          </article>
          {/* END UI/UX */}

          <article className="soft" style={{ "--color-primary": "blueviolet" }}>
            <div className="soft__top">
              <h3 className="title">Trabalho em equipe</h3>
            </div>

            <div className="soft__middle">
              <p className="text__muted description">
                Habilidade de trabalhar de forma colaborativa em equipe,
                contribuindo com minhas habilidades e ideias para alcançar
                objetivos comuns.
              </p>
            </div>
          </article>
          {/* END WEB DEVELOPMENT */}

          <article className="soft" style={{ "--color-primary": "blueviolet" }}>
            <div className="soft__top">
              <h3 className="title">Adaptabilidade</h3>
            </div>

            <div className="soft__middle">
              <p className="text__muted description">
                Capacidade de me adaptar a novos desafios e ambientes de
                trabalho, lidando de forma eficaz com mudanças e imprevistos.
              </p>
            </div>
          </article>

          <article className="soft" style={{ "--color-primary": "blueviolet" }}>
            <div className="soft__top">
              <h3 className="title">Aprendizado contínuo</h3>
            </div>

            <div className="soft__middle">
              <p className="text__muted description">
                Sou apaixonado por aprendizado e amo me desenvolver. Estou
                sempre em busca de novas habilidades e tecnologias para me
                manter atualizado e aprimorar meu trabalho.
              </p>
            </div>
          </article>

          <article className="soft" style={{ "--color-primary": "blueviolet" }}>
            <div className="soft__top">
              <h3 className="title">Organização</h3>
            </div>

            <div className="soft__middle">
              <p className="text__muted description">
                Capacidade de me adaptar a novos desafios e ambientes de
                trabalho, lidando de forma eficaz com mudanças e imprevistos.
              </p>
            </div>
          </article>

          <article className="soft" style={{ "--color-primary": "blueviolet" }}>
            <div className="soft__top">
              <h3 className="title">Resiliência</h3>
            </div>

            <div className="soft__middle">
              <p className="text__muted description">
                Capacidade de enfrentar desafios e adversidades com determinação
                e otimismo, buscando aprender e crescer com as experiências.
              </p>
            </div>
          </article>
          {/* END CONTENT CREATION */}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
