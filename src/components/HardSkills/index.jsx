import React from "react";
import "./HardSkill.css";
import HardSkillCard from "./HardSkillCard";
import { experience } from "../../data";

const HardSkill = () => {
  return (
    <section id="tecnologias">
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Hard Skills</h2>
        </div>
        <div className="hardSkill__container">
          {experience.map((list, index) => (
            <HardSkillCard {...list} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardSkill;
