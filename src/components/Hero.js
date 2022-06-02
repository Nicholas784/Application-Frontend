import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slidesData } from "../data";
import { useNavContext } from "../context/nav-context";
import styled from "styled-components";

const Hero = () => {
  const { isPromobarOpen } = useNavContext();
  const [slides, setSlides] = useState(slidesData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Wrapper
      className={isPromobarOpen ? "slider-container" : "slider-container grow"}
    >
      {slides.map((slide, slideIndex) => {
        const { id, url, name } = slide;
        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div key={id} className={`slide ${position}`}>
            <img src={url} alt={name} />
          </div>
        );
      })}
      <div className="overlay"></div>
      {/* <div className="slide"></div>
      <div className="slide"></div>
      <div className="slide"></div> */}
      <div className="banner-text">
        <h1>Hairoun - Hold Your Own</h1>
        <Link to="/products" className="btn shop-btn">
          shop now
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  position: relative;
  overflow: hidden;
`;

export default Hero;
