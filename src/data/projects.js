/**
 * 📁 Project Data File
 * ====================
 * To add a new project:
 * 1. Create a folder: projects/your-project-slug/
 * 2. Add images to that folder
 * 3. Add an entry to the array below
 */

const projects = [
  {
    id: 1,
    title: "Brand Identity — Lumina",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    slug: "lumina-brand",
    thumbnail: "/projects/lumina-brand/thumbnail.svg",
    images: [
      "/projects/lumina-brand/1.svg",
      "/projects/lumina-brand/2.svg",
    ],
    description:
      "A complete brand identity system for Lumina, a premium lighting studio. Included logo design, typography selection, color palette, stationery, and brand guidelines.",
    client: "Lumina Studio",
    year: "2025",
    tags: ["Branding", "Logo Design", "Typography"],
  },
  {
    id: 2,
    title: "Urban Perspectives",
    category: "photography",
    categoryLabel: "Photography",
    slug: "urban-perspectives",
    thumbnail: "/projects/urban-perspectives/thumbnail.svg",
    images: [
      "/projects/urban-perspectives/1.svg",
      "/projects/urban-perspectives/2.svg",
    ],
    description:
      "A photography series capturing the raw architecture and street life of Colombo's urban landscape. Shot on medium format film.",
    client: "Personal Project",
    year: "2025",
    tags: ["Architecture", "Street", "Film"],
  },
  {
    id: 3,
    title: "Echo — Music Video",
    category: "video-editing",
    categoryLabel: "Video Editing",
    slug: "echo-music-video",
    thumbnail: "/projects/echo-music-video/thumbnail.svg",
    images: [
      "/projects/echo-music-video/1.svg",
      "/projects/echo-music-video/2.svg",
    ],
    description:
      "Directed and edited a cinematic music video for indie artist 'Echo Blend'. Combined live-action footage with abstract motion graphics and color grading.",
    client: "Echo Blend Records",
    year: "2024",
    tags: ["Editing", "Color Grading", "Motion Graphics"],
  },
  {
    id: 4,
    title: "FinFlow — Dashboard UI",
    category: "ui-design",
    categoryLabel: "UI Design",
    slug: "finflow-dashboard",
    thumbnail: "/projects/finflow-dashboard/thumbnail.svg",
    images: [
      "/projects/finflow-dashboard/1.svg",
      "/projects/finflow-dashboard/2.svg",
    ],
    description:
      "Designed a clean, data-rich financial dashboard for FinFlow. Focused on clarity, accessibility, and a seamless user experience across desktop and mobile.",
    client: "FinFlow Inc.",
    year: "2025",
    tags: ["UI Design", "Dashboard", "Figma"],
  },
  {
    id: 5,
    title: "Portfolio Platform",
    category: "development",
    categoryLabel: "Development",
    slug: "portfolio-platform",
    thumbnail: "/projects/portfolio-platform/thumbnail.svg",
    images: [
      "/projects/portfolio-platform/1.svg",
      "/projects/portfolio-platform/2.svg",
    ],
    description:
      "Built a custom portfolio platform for creatives using React and Node.js. Features include dynamic project management, drag-and-drop editor, and analytics.",
    client: "Personal Project",
    year: "2025",
    tags: ["React", "Node.js", "Full Stack"],
  },
  {
    id: 6,
    title: "Wanderlust — Travel App",
    category: "ui-design",
    categoryLabel: "UI Design",
    slug: "wanderlust-app",
    thumbnail: "/projects/wanderlust-app/thumbnail.svg",
    images: [
      "/projects/wanderlust-app/1.svg",
      "/projects/wanderlust-app/2.svg",
    ],
    description:
      "UI/UX design for a travel planning app. Created wireframes, prototypes, and a polished visual design system with a focus on immersive storytelling.",
    client: "Wanderlust Labs",
    year: "2024",
    tags: ["UI/UX", "Prototyping", "Mobile"],
  },
  {
    id: 7,
    title: "Concrete Forms",
    category: "photography",
    categoryLabel: "Photography",
    slug: "concrete-forms",
    thumbnail: "/projects/concrete-forms/thumbnail.svg",
    images: [
      "/projects/concrete-forms/1.svg",
      "/projects/concrete-forms/2.svg",
    ],
    description:
      "A minimalist photography study of brutalist architecture in Southeast Asia. Explores texture, shadow, and geometric abstraction.",
    client: "Architectural Digest — Feature",
    year: "2024",
    tags: ["Architecture", "Minimalist", "Editorial"],
  },
  {
    id: 8,
    title: "TaskFlow — Web App",
    category: "development",
    categoryLabel: "Development",
    slug: "taskflow-app",
    thumbnail: "/projects/taskflow-app/thumbnail.svg",
    images: [
      "/projects/taskflow-app/1.svg",
      "/projects/taskflow-app/2.svg",
    ],
    description:
      "Developed a real-time collaborative task management web app with drag-and-drop Kanban boards, team chat, and analytics dashboards.",
    client: "Internal Tool",
    year: "2025",
    tags: ["React", "Firebase", "Collaboration"],
  },
];

export default projects;
