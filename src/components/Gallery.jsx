import { useState } from "react";
import "./styles/gallery.css";

function Gallery() {
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
          <span>📷 Image not available</span>
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
    <section id="gallery">
      <h1>Gallery</h1>

      <div className="gallery-item1">
        <h2>AI Arts 🤖</h2>
        <ImageWithFallback
          src="../assets/images/tiger closeup AI.jpg"
          alt="Tiger AI Art"
          imageName="tiger"
        />
      </div>

      <div className="gallery-item2">
        <h2>Mobile Photography 📸</h2>
        <ImageWithFallback
          src="../assets/images/epicia 20230704_181639.jpg"
          alt="Mobile Photography"
          imageName="epicia"
        />
      </div>
    </section>
  );
}

export default Gallery;
