import { useEffect, useState } from "react";

const roles = [
  "Graphic Designer",
  "Photographer",
  "Video Editor",
  "UI Designer",
  "Software Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content container">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          Nisala Dineth
        </h1>
        <p className="hero__role">
          <span className="hero__role-label">I craft as a </span>
          <span className="hero__typewriter">
            {displayedText}
            <span className="hero__cursor">|</span>
          </span>
        </p>
        <p className="hero__tagline">
          Blending creative vision with technical precision —
          <br />
          delivering visual stories that leave a lasting impact.
        </p>
        <div className="hero__actions">
          <a href="#portfolio" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
