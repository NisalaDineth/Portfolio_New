import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Brand identities, print materials, social media graphics, and visual storytelling that captivates audiences.",
  },
  {
    icon: "📷",
    title: "Photography",
    description:
      "Professional photography across product, portrait, architecture, and editorial genres with a cinematic eye.",
  },
  {
    icon: "🎬",
    title: "Video Editing",
    description:
      "Post-production, color grading, motion graphics, and sound design for commercials, music videos, and films.",
  },
  {
    icon: "✨",
    title: "UI Design",
    description:
      "Intuitive, beautiful interfaces for web and mobile apps — wireframes to polished prototypes in Figma.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Full-stack web development using modern frameworks, APIs, and cloud infrastructure to build scalable products.",
  },
];

export default function Services() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`services section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="section__header">
          <h2 className="section__label">What I Do</h2>
          <h3 className="section__title">Creative Disciplines</h3>
          <p className="section__subtitle">
            Five areas of expertise, one unified vision — delivering quality
            across every medium.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="service-card__icon">{service.icon}</span>
              <h4 className="service-card__title">{service.title}</h4>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
