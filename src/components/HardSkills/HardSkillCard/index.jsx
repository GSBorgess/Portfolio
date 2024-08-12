import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./HardSkillCard.css";

const HardSkillCard = ({ title, data }) => {
  return (
    <div className="hardSkill__card">
      <h3>{title}</h3>
      <div className="hardSkill__content">
        {data.map((list, index) => (
          <article className="hardSkill__details" key={index}>
            <BsPatchCheckFill className="hardSkill__icon" />
            <div>
              <h4 className="hardSkill__name">{list.skill}</h4>
              <small className="text__muted hardSkill__level">
                {list.level}
              </small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HardSkillCard;
