import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="h1">
          Valentin <br />
          Sugai
        </h1>
        <nav className="nav">
          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
