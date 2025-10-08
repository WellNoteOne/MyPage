import "./Joke.css";
import { useState, useEffect } from "react";
import soundFile from "./joke.mp3";

function JokeButton() {
  const [flashing, setFlashing] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const colors = ["red", "yellow", "green", "blue", "purple", "orange"];

  const handleJoke = () => {
    if (navigator.vibrate) {
      navigator.vibrate([300, 100, 300]);
    }
    function playAsyncMultiple(times, delay) {
      for (let i = 0; i < times; i++) {
        setTimeout(() => {
          const audio = new Audio(soundFile);
          audio.play();
        }, i * delay);
      }
    }
    playAsyncMultiple(5, 100);

    setFlashing(true);
  };

  useEffect(() => {
    let interval;
    if (flashing) {
      const startTime = Date.now();
      interval = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);

        if (Date.now() - startTime > 3000) {
          clearInterval(interval);
          setFlashing(false);
          setBgColor("transparent");
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [flashing]);

  return (
    <>
      {flashing && (
        <div
          className="flash-screen"
          style={{ backgroundColor: bgColor }}
        ></div>
      )}
      <button className="joke-button" onClick={handleJoke}>
        Button
      </button>
    </>
  );
}

export default JokeButton;
