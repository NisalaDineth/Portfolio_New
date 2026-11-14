import useScrollAnimation from "../hooks/useScrollAnimation";

const stats = [
  { number: "05+", label: "Years Experience" },
  { number: "50+", label: "Projects Delivered" },
  { number: "20+", label: "Happy Clients" },
  { number: "05", label: "Disciplines" },
];

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image-placeholder">
              <span>📸</span>
              <p>Your Photo Here</p>
            </div>
          </div>
          <div className="about__content">
            <h2 className="section__label">About Me</h2>
            <h3 className="section__title">
              Bridging Creativity &amp; Technology
            </h3>
            <p className="about__text">
              I'm a multidisciplinary creative professional with a passion for
              crafting compelling visual experiences. From branding and
              photography to UI design and full-stack development, I bring ideas
              to life with precision, purpose, and aesthetic excellence.
            </p>
            <p className="about__text">
              My work is driven by a simple philosophy: great design is not just
              about how something looks — it's about how it feels, how it works,
              and the story it tells. Every project is an opportunity to create
              something meaningful.
            </p>

            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
