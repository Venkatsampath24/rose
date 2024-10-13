import React, { useState, useEffect } from "react";
import "./PoemDisplay.css";

const poemText = `ನಾನು ನಿನ್ನನ್ನು ಗಾಳಿಯು ಮುಟ್ಟಲು ಬಿಡುವುದಿಲ್ಲ 🌬️, 
ನಾನು ಆ ಚಂದ್ರನು ಮುಟ್ಟಲು ಬಿಡುವುದಿಲ್ಲ 🌕, 
ನಿನ್ನನ್ನು ಬೇರೆ ಕೈಗಳಿಗೆ ಕೊಡುವುದಿಲ್ಲ 🙅‍♂️, 
ನಾನು ಕೊಡುವುದಿಲ್ಲ, ನಾನು ಕೊಡುವುದಿಲ್ಲ ❤️, 
ರೋಜಾ 🌹. -venkat`;

const PoemDisplay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isPlaying && index < poemText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + poemText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isPlaying, index]);

  const playPoemAudio = () => {
    const audio = document.getElementById("poemAudio");
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="poem-container">
      <a href="#poem" onClick={playPoemAudio} className="poem-link">
        Click here 
      </a>

      {isPlaying && (
        <div className="poem-content">
          <h2>... 🌹</h2>
          <p className="typing-text">{displayText}</p>
        </div>
      )}

      <audio id="poemAudio" src="/assets/Nannaprema.mp3" loop/>

      {/* Floating hearts */}
      <div className="heart" style={{ top: "20%", left: "10%" }}></div>
      <div className="heart" style={{ top: "30%", left: "50%" }}></div>
      <div className="heart" style={{ top: "60%", left: "30%" }}></div>
      <div className="heart" style={{ top: "70%", left: "80%" }}></div>
    </div>
  );
};

export default PoemDisplay;
