import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects";

const categories = [
  { value: "all", label: "All" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "photography", label: "Photography" },
  { value: "video-editing", label: "Video Editing" },
  { value: "ui-design", label: "UI Design" },
  { value: "development", label: "Development" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`portfolio section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="section__header">
          <h2 className="section__label">Portfolio</h2>
          <h3 className="section__title">Selected Work</h3>
          <p className="section__subtitle">
            A curated collection of projects across design, photography, video,
            and development.
          </p>
        </div>

        <div className="portfolio__filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`portfolio__filter ${
                activeCategory === cat.value
                  ? "portfolio__filter--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="portfolio__card"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio__card-image-wrapper">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="portfolio__card-image"
                  loading="lazy"
                />
                <div className="portfolio__card-overlay">
                  <span className="portfolio__card-view">View Project</span>
                </div>
              </div>
              <div className="portfolio__card-info">
                <span className="portfolio__card-category">
                  {project.categoryLabel}
                </span>
                <h4 className="portfolio__card-title">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="portfolio__empty">
            No projects in this category yet. Stay tuned!
          </p>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
