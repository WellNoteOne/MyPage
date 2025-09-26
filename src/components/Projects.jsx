import "./Projects.css";
const projects = [
  {
    title: "My API",
    link: "https://github.com/WellNoteOne",
    desc: "ASP.NET API with UI",
  },
  { title: "Frontend App", link: "#", desc: "React SPA" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h4 className="project-title">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              See all →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
