import { useFilterContext } from "../context/filter-context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}></GridView>;
};

export default ProductsList;
