import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="src/image/image 12.png" className="card--image" />
      <div className="card--stats">
        <img src="src/image/Star 1.png" alt="star" className="card--star" />
        <span>5.0</span>
        <span>(6)</span>
        <span>USA</span>
      </div>
      <p>Life sessons with Katie Zaferes</p>
      <p>
        <span className="bold">From 136$</span> / person
      </p>
    </div>
  );
}
