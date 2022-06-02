import { useEffect, useState } from "react";
import { promoData } from "../data";
import { FaTimes } from "react-icons/fa";
import { useNavContext } from "../context/nav-context";

const Promobar = () => {
  const { closePromobar, isPromobarOpen } = useNavContext();
  const [promos, setPromos] = useState(promoData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = promos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, promos]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div
      className={`${
        isPromobarOpen
          ? "promotions-container show-promo"
          : "promotions-container"
      }`}
    >
      {promos.map((promo, promoIndex) => {
        let position = "nextSlide";
        if (promoIndex === index) {
          position = "activeSlide";
        }
        if (
          promoIndex === index - 1 ||
          (index === 0 && promoIndex === promos.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div key={promoIndex} className={`promotion ${position}`}>
            <h4>{promo.title}</h4>
            <a href={promo.link} target="_blank" rel="noreferrer noopener">
              learn more
            </a>
          </div>
        );
      })}
      <button className="promo-close" onClick={closePromobar}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Promobar;
