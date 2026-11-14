import useScrollAnimation from "../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Design",
    skills: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Figma",
      "After Effects",
      "Lightroom",
    ],
  },
  {
    title: "Development",
    skills: [
      "React",
      "Node.js",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "Python",
      "Git",
    ],
  },
  {
    title: "Photography & Video",
    skills: [
      "Premiere Pro",
      "DaVinci Resolve",
      "Final Cut Pro",
      "Lightroom",
      "Capture One",
      "Cinematography",
    ],
  },
  {
    title: "Other Tools",
    skills: [
      "Notion",
      "Jira",
      "Blender",
      "Unity",
      "Webflow",
      "WordPress",
    ],
  },
];

export default function Skills() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills section ${isVisible ? "section--visible" : ""}`}
    >
      <div className="container">
        <div className="section__header">
          <h2 className="section__label">Skills & Tools</h2>
          <h3 className="section__title">My Toolkit</h3>
          <p className="section__subtitle">
            The tools and technologies I use to bring creative visions to life.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__category">
              <h4 className="skills__category-title">{cat.title}</h4>
              <div className="skills__items">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
