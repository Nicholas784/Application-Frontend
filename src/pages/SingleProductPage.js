import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products-context";
import { products_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProducts = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {}, 3000);
  //   }
  // }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    id: sku,
    description,
    inventory,
    numOfReviews,
    averageRating,
    category,
    image,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages image={image} />
          <section className="content">
            <h2>{name}</h2>
            <Stars rating={averageRating} reviews={numOfReviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {inventory > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Category : </span>
              {category}
            </p>
            <hr />
            {inventory > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  .price {
    font-size: 1.25rem;
  }

  .price {
    color: var(--clr-primary);
  }

  .desc {
    line-height: 2;
    max-width: 45rem;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  h2 {
    letter-spacing: 0;
  }

  @media (min-width: 700px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.5rem;
    }
  }
`;

export default SingleProducts;
