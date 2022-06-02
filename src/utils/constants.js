import image1 from "../images/Hairoun-image-1.jpg";
import image2 from "../images/Hairoun-image-2.jpg";
import image3 from "../images/Hairoun-image-3.jpg";
import image4 from "../images/Hairoun-image-1.jpg";
import image5 from "../images/Hairoun-image-2.jpg";
import image6 from "../images/Hairoun-image-3.jpg";
import image7 from "../images/Hairoun-image-1.jpg";
import image8 from "../images/Hairoun-image-2.jpg";
import image9 from "../images/Hairoun-image-3.jpg";
import { useProductsContext } from "../context/products-context";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/products",
    text: "shop",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const drinks = [
  {
    id: 1,
    text: "beer",
    images: [image1, image2, image3],
    image: image1,
  },
  {
    id: 2,
    text: "stout",
    images: [image1],
    image: image2,
  },
  {
    id: 3,
    text: "soft",
    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    ],
    image: image3,
  },
];

export const products_url = "http://localhost:5000/api/v1/products/";

export const single_product_url = `http://localhost:5000/api/v1/products?id=`;
