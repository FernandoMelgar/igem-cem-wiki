import React, { useState } from "react";
import { safetyData } from "./componentData/SafetyCarouselData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const length = safetyData.length;
  console.log(length);

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? length - 1 : currentImageIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === length - 1 ? 0 : currentImageIndex + 1
    );
  };

  if (!Array.isArray(safetyData) || safetyData.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="carousel">
        <FaArrowLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowRight className="right-arrow" onClick={nextSlide} />
        {safetyData.map((item, index) => {
          return (
            <div
              className={index === currentImageIndex ? "slide-active" : "slide"}
              key={index}
            >
              {index === currentImageIndex && (
                <div>
                  <div className="carouselimg-title">{item.title}</div>
                  <img src={item.image} alt="Dummy stuff" className="image" />
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Carousel;
