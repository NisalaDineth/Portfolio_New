import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal__gallery">
          {project.images.map((img, i) => (
            <div key={i} className="modal__image-wrapper">
              <img
                src={img}
                alt={`${project.title} — ${i + 1}`}
                className="modal__image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="modal__details">
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__description">{project.description}</p>

          <div className="modal__meta">
            {project.client && (
              <div className="modal__meta-item">
                <span className="modal__meta-label">Client</span>
                <span className="modal__meta-value">{project.client}</span>
              </div>
            )}
            {project.year && (
              <div className="modal__meta-item">
                <span className="modal__meta-label">Year</span>
                <span className="modal__meta-value">{project.year}</span>
              </div>
            )}
          </div>

          <div className="modal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
