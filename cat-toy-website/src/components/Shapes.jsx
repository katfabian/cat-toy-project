import { useState } from "react";
import "./Shapes.css";

import waveTread from "../assets/wave-tread.png";
import spiralDrift from "../assets/spiral-drift.png";
import knobTouch from "../assets/knob-touch.png";
import facetEdge from "../assets/facet-edge.png";

function Shapes() {
  const [activeShape, setActiveShape] = useState("Wave Tread");

  const shapes = [
    {
      name: "Wave Tread",
      image: waveTread,
      className: "purple",
      description:
        "A wave-inspired tread pattern that creates smooth, unpredictable rolling.",
    },
    {
      name: "Spiral Drift",
      image: spiralDrift,
      className: "green",
      description:
        "Creates smooth curved paths to keep cats chasing.",
    },
    {
      name: "Knob Touch",
      image: knobTouch,
      className: "orange",
      description:
        "Small bumps add texture and make every roll unique.",
    },
    {
      name: "Facet Edge",
      image: facetEdge,
      className: "teal",
      description:
        "Angular edges create quick changes in direction.",
    },
  ];

  return (
    <section className="shapes">
      <span className="section-badge">
        4 Unique Concepts
      </span>

      <h2>
        Pick your cat's <span>favorite shape</span>
      </h2>

      <p className="section-description">
        Each rolling ring is designed to move differently,
        keeping playtime fresh and exciting.
      </p>

      <div className="shape-tabs">
        {shapes.map((shape) => (
          <button
            key={shape.name}
            className={activeShape === shape.name ? "active" : ""}
            onClick={() => setActiveShape(shape.name)}
          >
            {shape.name}
          </button>
        ))}
      </div>

      <div className="shape-grid">
        {shapes.map((shape) => (
          <div
            key={shape.name}
            className={`shape-card ${shape.className} ${
            activeShape === shape.name ? "selected" : ""
            }`}
            onClick={() => setActiveShape(shape.name)}
          >
            <img
              src={shape.image}
              alt={shape.name}
              className="shape-image"
            />

            <h3>{shape.name}</h3>

            <p>{shape.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shapes;