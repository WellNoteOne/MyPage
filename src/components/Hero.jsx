import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <img src="/profile.jpg" alt="Profile" className="hero-profile" />
      <h2 className="hero-title">Hello, I am Valentin 👋</h2>
      <p className="hero-subtitle">Frontend / Backend Developer</p>
      <div className="hero-buttons">
        <a href="#projects" className="hero-btn primary">
          My Projects
        </a>
        <a href="#contact" className="hero-btn secondary">
          Contact
        </a>
      </div>
    </section>
  );
}
