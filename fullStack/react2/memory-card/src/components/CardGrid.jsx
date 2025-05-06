import React from "react";
import Card from "./Card";
import "../styles/CardGrid.css";

export default function CardGrid({ cards, onCardClick }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.name}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}
