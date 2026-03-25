import { useState } from "react";
import "./styles/work.css";

function Work() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageName) => {
    setImageErrors((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  const ImageWithFallback = ({ src, alt, imageName }) => {
    const hasError = imageErrors[imageName];

    if (hasError) {
      return (
        <div className="image-placeholder">
          <span>🖼️ Project image</span>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        onError={() => handleImageError(imageName)}
      />
    );
  };

  return (
    <section id="work">
      <h1>Work</h1>

      <div className="projects">
        <div className="card-1">
          <h2>Tic Tac Toe Game</h2>
          <div className="card-body">
            <ImageWithFallback
              src="../assets/images/tic tac toe img.jfif"
              alt="Tic Tac Toe Game"
              imageName="tictactoe"
            />
            <p>
              I developed a classic Tic Tac Toe game using Java with AI.
            </p>
          </div>
        </div>

        <div className="card-2">
          <h2>JourneyHub Railway Management System</h2>
          <div className="card-body">
            <ImageWithFallback
              src="../assets/images/screenshot jh railway login.jpg"
              alt="JourneyHub Railway"
              imageName="journeyhub"
            />
            <p>Advanced railway management platform.</p>
          </div>
        </div>

        <div className="card-3">
          <h2>Personal Website</h2>
          <div className="card-body">
            <ImageWithFallback
              src="../assets/images/Screenshot portfolio home.jpg"
              alt="Portfolio Website"
              imageName="portfolio"
            />
            <p>Portfolio showcasing my web development skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
