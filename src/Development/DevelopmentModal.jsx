import React, { useState } from "react";

function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      {images.length > 0 && (
        <img
          className="gambarPertama"
          src={images[0]}
          alt="Gambar pertama"
          onClick={() => openImage(0)}
        />
      )}

      {currentIndex !== null && (
        <div className="modulFullscreen" onClick={closeImage}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            disabled={currentIndex === 0}
            className="buttonLeft"
            style={{
              opacity: currentIndex === 0 ? 0.5 : 1,
            }}
          >
            &#8249;
          </button>

          <img
            src={images[currentIndex]}
            alt="Fullscreen"
            className="gambarFullscreen"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            disabled={currentIndex === images.length - 1}
            className="buttonRight"
            style={{ opacity: currentIndex === images.length - 1 ? 0.5 : 1 }}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
