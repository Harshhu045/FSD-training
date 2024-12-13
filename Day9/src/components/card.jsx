import React from "react";

const Card = ({ title, image, language, cost }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-component">
        <h3 className="card-title">{title}</h3>
        <p className="card-language">Language: {language}</p>
        <p className="card-cost">Cost: {cost}</p>
      </div>
    </div>
  );
};

export default Card;
