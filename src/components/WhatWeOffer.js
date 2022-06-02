import { useEffect, useState } from "react";
import styled from "styled-components";
import { drinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { slidesData } from "../data";

const WhatWeOffer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = drinks.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, drinks]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Wrapper className="section services">
      <div className="section-center">
        <div className="section-title">
          <h2>
            what <span>we</span> offer
          </h2>
          <div className="underline services-underline"></div>
        </div>
        <article className="services-description">
          <p className="services-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            molestias ullam quos cum neque, nam eveniet repudiandae dolore,
            debitis facilis deleniti hic deserunt ducimus corporis iusto
            consequuntur accusamus nobis consequatur ad quidem officia animi!
            Tempora quod, laudantium quos provident, ipsam vel neque praesentium
            in nulla ex dolor officiis eos reiciendis.
          </p>
          <p className="services-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            molestias ullam quos cum neque, nam eveniet repudiandae dolore,
            debitis facilis deleniti hic deserunt ducimus corporis iusto
            consequuntur accusamus nobis consequatur ad quidem officia animi!
            Tempora quod, laudantium quos provident, ipsam vel neque praesentium
            in nulla ex dolor officiis eos reiciendis.
          </p>
        </article>
        <div className="drinks-center">
          {drinks.map((category) => {
            const { id, text, images } = category;
            return (
              <article key={id} className="category">
                {images.map((drink, drinkIndex) => {
                  const image = drink;
                  let position = "nextSlide";
                  if (drinkIndex === index) {
                    position = "activeSlide";
                  }
                  if (
                    drinkIndex === index - 1 ||
                    (index === 0 && drinkIndex === drinks.length - 1)
                  ) {
                    position = "lastSlide";
                  }
                  return (
                    <div
                      key={drinkIndex}
                      className={
                        images.length > 1
                          ? `drink-slide ${position}`
                          : "drink-slide show"
                      }
                    >
                      <img src={image} alt="drink" />
                    </div>
                  );
                })}
                <div className="overlay">{text}</div>
              </article>
            );
          })}
        </div>
        <div className="drinks-center-small">
          {drinks.map((category, categoryIndex) => {
            const { text, image, id } = category;
            let position = "nextSlide";
            if (categoryIndex === index) {
              position = "activeSlide";
            }
            if (
              categoryIndex === index - 1 ||
              (index === 0 && categoryIndex === drinks.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div key={id} className={`drinks-slide ${position}`}>
                <div className="overlay">{text}</div>
                <img src={image} alt={text} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .services-description {
    text-align: center;
    margin-bottom: 2rem;
  }

  .services-underline {
    width: 6rem;
  }

  .drinks-center {
    display: none;
  }
  .drinks-center-small {
    width: 16rem;
    height: 17rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 1rem; 
  }
  .drinks-slide {
    position: absolute;
    width: 100%;
    height: 100%; 
    overflow: hidden;    
    transition: all 0.5s ease-in-out;
    img {
      height: 100%;
      width: 100%
      object-fit: cover;      
    }
  }
  .category {
    position: relative;
    height: 16rem;
    width: 14rem;
    overflow: hidden;
    border-radius: 1rem;
  }

  .drink-slide {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    img {
      height: 100%;
      width: 100%
      object-fit: cover;
    }
  }

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    opacity: 0;
    color: var(--clr-white);
    font-size: 2rem;
    padding: 7rem 0;
    text-align: center;
    text-transform: capitalize;
  }

  .category:hover .overlay{
    opacity: 1;
    cursor: pointer;
  }

  .drinks-slide:hover .overlay {
    opacity: 1;
    cursor: pointer;
  }

  .show {
    opacity: 1;
  }

  @media screen and (min-width: 992px){
    .drinks-center {
      width: 80vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .drinks-center-small {
      display: none;
    }
  }

  @media screen and (min-width: 1050px){
    .drinks-center {
      width: 75vw;
    }
  }

  @media screen and (min-width: 1150px){
    .drinks-center {
      width: 70vw;
    }
  }  

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }

    .drinks-center {
      width: 58vw;
    }
  }
`;

export default WhatWeOffer;
