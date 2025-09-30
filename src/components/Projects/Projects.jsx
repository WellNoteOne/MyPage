import "./Projects.css";
const projects = [
  {
    title: "My API",
    link: "https://github.com/WellNoteOne",
    desc: "ASP.NET API with UI",
  },
  {
    title: "Hobbly",
    link: "https://hobbly.azurewebsites.net",
    desc: "Group project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <iframe>
              <h4 className="project-title">{p.title}</h4>
              <p className="project-desc">{p.desc}</p>
            </iframe>
            <a href={p.link} target="_blank" className="project-link">
              See all →
            </a>
          </div>
        ))}
      </div>
      <div class="project-window">
        <iframe
          src="https://hobbly.azurewebsites.net"
          title="Hobbly Project"
          loading="lazy"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
}
