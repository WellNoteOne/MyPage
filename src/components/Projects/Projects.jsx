import "./Projects.css";
import { useState } from "react";

const projects = [
  {
    title: "My API",
    link: "https://github.com/WellNoteOne",
    preview: "https://github.com/WellNoteOne", // для iframe превью
    desc: "ASP.NET API with UI",
  },
  {
    title: "Hobbly",
    link: "https://hobbly.azurewebsites.net",
    preview: "https://hobbly.azurewebsites.net",
    desc: "Group project",
  },
];

export default function Projects() {
  const [fullscreen, setFullscreen] = useState(null); // хранит активный проект

  return (
    <section id="projects" className="projects-section">
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div
              className="project-preview"
              onClick={() => setFullscreen(p.preview)}
            >
              <iframe
                src={p.preview}
                title={p.title}
                loading="lazy"
                frameBorder="0"
              />
            </div>
            <h4 className="project-title">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              See all →
            </a>
          </div>
        ))}
      </div>

      {/* fullscreen overlay */}
      {fullscreen && (
        <div
          className={`fullscreen-overlay ${fullscreen ? "active" : ""}`}
          onClick={() => setFullscreen(null)}
        >
          <iframe
            src={fullscreen}
            title="Fullscreen Project"
            frameBorder="0"
            loading="lazy"
          />
          <button className="close-btn" onClick={() => setFullscreen(null)}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
