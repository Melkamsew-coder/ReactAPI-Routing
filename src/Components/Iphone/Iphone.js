import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      className="iphone-container"
      style={{ marginTop: "100px", padding: "20px" }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "28px", marginBottom: "40px" , fontWeight: "bold"}}
      >
        iPhone Products
      </h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li
            key={product.product_id}
            className={`product-item ${
              index % 2 === 0 ? "left-align" : "right-align"
            }`}
          >
            <div className="product-details">
              <h2>{product.product_name}</h2>
              <p>{product.product_description || "No description available"}</p>
              <p>
                Price:{" "}
                {product.product_price
                  ? `$${product.product_price}`
                  : "Not available"}
              </p>
              <Link
                to={`/iphone/${product.product_id}`}
                className="product-link"
              >
                Learn more
              </Link>
            </div>
            <img
              src={
                product.product_image || "https://via.placeholder.com/300x300"
              }
              alt={product.product_name}
              className="product-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Iphone;
