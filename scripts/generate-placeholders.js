/**
 * Placeholder Image Generator
 * ============================
 * Generates simple SVG placeholder images for project thumbnails and galleries.
 * 
 * Usage: node scripts/generate-placeholders.js
 * 
 * Requirements: Node.js (included with the project)
 * 
 * To add real images, replace the generated SVGs with your actual project images.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.resolve(__dirname, "../projects");

const projects = [
  { slug: "lumina-brand", title: "Lumina Brand Identity" },
  { slug: "urban-perspectives", title: "Urban Perspectives" },
  { slug: "echo-music-video", title: "Echo Music Video" },
  { slug: "finflow-dashboard", title: "FinFlow Dashboard" },
  { slug: "portfolio-platform", title: "Portfolio Platform" },
  { slug: "wanderlust-app", title: "Wanderlust App" },
  { slug: "concrete-forms", title: "Concrete Forms" },
  { slug: "taskflow-app", title: "TaskFlow App" },
];

const colors = [
  ["#d4a853", "#0a0a0f"],
  ["#64ffda", "#0a0a0f"],
  ["#7c3aed", "#0a0a0f"],
  ["#f59e0b", "#0a0a0f"],
  ["#3b82f6", "#0a0a0f"],
  ["#ec4899", "#0a0a0f"],
  ["#14b8a6", "#0a0a0f"],
  ["#f97316", "#0a0a0f"],
];

function generateSVG(title, width, height, accent, bg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <rect x="0" y="0" width="${width}" height="${height}" fill="${accent}" opacity="0.1"/>
  <circle cx="${width / 2}" cy="${height / 2 - 20}" r="40" fill="${accent}" opacity="0.2"/>
  <circle cx="${width / 2}" cy="${height / 2 - 20}" r="20" fill="${accent}" opacity="0.4"/>
  <text x="${width / 2}" y="${height / 2 + 50}" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="${accent}" font-weight="bold">${title}</text>
  <text x="${width / 2}" y="${height / 2 + 75}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="${accent}" opacity="0.6">${width} × ${height}</text>
</svg>`;
}

console.log("Generating placeholder images...\n");

for (let i = 0; i < projects.length; i++) {
  const { slug, title } = projects[i];
  const [accent, bg] = colors[i % colors.length];
  const projectDir = path.join(projectsDir, slug);

  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  // Thumbnail (16:10 ratio)
  const thumbPath = path.join(projectDir, "thumbnail.jpg");
  const thumbSVG = generateSVG(title, 640, 400, accent, bg);
  fs.writeFileSync(thumbPath.replace(".jpg", ".svg"), thumbSVG);
  console.log(`  ✓ ${slug}/thumbnail.svg`);

  // Gallery images (different sizes)
  for (let j = 1; j <= 2; j++) {
    const imgPath = path.join(projectDir, `${j}.jpg`);
    const imgSVG = generateSVG(`${title} — ${j}`, 1200, 800, accent, bg);
    fs.writeFileSync(imgPath.replace(".jpg", ".svg"), imgSVG);
    console.log(`  ✓ ${slug}/${j}.svg`);
  }
}

console.log("\n✅ Done! Placeholder SVGs generated.");
console.log("   Replace the .svg files with actual .jpg/.png images when ready.");
console.log(
  "   Make sure to update the filenames from .svg to .jpg in the project files."
);
