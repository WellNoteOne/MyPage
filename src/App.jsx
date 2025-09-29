import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MatrixBackground from "./components/MatrixAnim";
import Game from "./components/Game/Tic";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <MatrixBackground />
        <Header />
        <Hero />
        <Game />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
