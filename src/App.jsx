import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MatrixBackground from "./components/MatrixAnim";
import Game from "./components/Game/Tic";
import "./App.css";
import { useState } from "react";
import JokeButton from "./components/Joke/Joke";

function App() {
  const [showGame, setShowGame] = useState(true);

  const toggleGame = () => {
    setShowGame(!showGame);
  };

  return (
    <>
      <MatrixBackground />
      <Header />
      <Hero />
      <button className="gamebut" onClick={toggleGame}>
        {showGame ? "Hide game" : "Open game"}
      </button>
      {showGame && <Game />}
      <About />
      <Projects />
      <Contact />
      {/*<JokeButton />*/}
      <Footer />
    </>
  );
}

export default App;
