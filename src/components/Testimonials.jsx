import { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    quote:
      "Nisala's design work is nothing short of exceptional. He transformed our brand identity with a level of creativity and professionalism that exceeded all expectations.",
    author: "Sarah Chen",
    role: "CEO, Lumina Studio",
  },
  {
    id: 2,
    quote:
      "Working with Nisala on our music video was a dream. His eye for color grading and visual storytelling brought our artistic vision to life in ways we never imagined.",
    author: "Marcus Rivera",
    role: "Founder, Echo Blend Records",
  },
  {
    id: 3,
    quote:
      "The dashboard UI Nisala designed for us is simply beautiful. Our users love it, and we've seen a 40% increase in engagement since launch. Highly recommend.",
    author: "Priya Patel",
    role: "Product Lead, FinFlow Inc.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`testimonials section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="section__header">
          <h2 className="section__label">Testimonials</h2>
          <h3 className="section__title">What People Say</h3>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__quote-mark">"</div>
          <p className="testimonials__quote">
            {testimonials[current].quote}
          </p>
          <div className="testimonials__author">
            <strong>{testimonials[current].author}</strong>
            <span>{testimonials[current].role}</span>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${
                  i === current ? "testimonials__dot--active" : ""
                }`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
