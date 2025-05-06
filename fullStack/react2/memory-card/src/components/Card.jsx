import React from "react";
import "../styles/Card.css";

export default function Card({ id, image, title, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
