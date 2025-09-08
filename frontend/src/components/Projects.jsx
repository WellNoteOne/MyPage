const projects = [
  {
    title: "My API",
    link: "https://github.com/WellNoteOne",
    desc: "ASP.NET API с UI",
  },
  { title: "Frontend App", link: "#", desc: "React + Tailwind SPA" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Мои проекты</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <a
              href={p.link}
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Смотреть →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
