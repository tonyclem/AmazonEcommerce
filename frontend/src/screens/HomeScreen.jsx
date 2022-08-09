import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import data from "../data";

function HomeScreen() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>List Product</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.slug}>
              <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <p>{product.name}</p>
                <p>
                  <strong>{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
