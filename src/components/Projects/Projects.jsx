import "./Projects.css";
import { useState } from "react";

const projects = [
  {
    title: "Countries App",
    link: "https://wellnoteone.github.io/Countries/",
    preview: "https://wellnoteone.github.io/Countries/",
    desc: "You can check information about any country",
  },
  {
    title: "Hobbly",
    link: "https://hobbly.azurewebsites.net",
    preview: "https://hobbly.azurewebsites.net/",
    desc: "Group project, which showing to you actual events in Helsinki ",
  },
];

export default function Projects() {
  const [fullscreen, setFullscreen] = useState(null); // хранит активный проект
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h3 className="projects-title">My Projects</h3>
      </div>{" "}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div
              className="project-preview"
              onClick={() => setFullscreen(p.preview)}
            >
              <iframe src={p.preview} title={p.title} loading="lazy" />
            </div>
            <h4 className="project-title">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              Open →
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
          <iframe src={fullscreen} title="Fullscreen Project" loading="lazy" />
          <button className="close-btn" onClick={() => setFullscreen(null)}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
