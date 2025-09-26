import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixAnim";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <MatrixBackground />
      </div>
    </>
  );
}

export default App;
