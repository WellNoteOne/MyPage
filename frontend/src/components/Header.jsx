export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full top-0 z-10">
      <h1 className="text-xl font-bold">Valentin Sugai</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-blue-500">
          About
        </a>

        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
}
