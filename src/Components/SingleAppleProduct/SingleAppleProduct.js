import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleAppleProduct = () => {
  const { id } = useParams(); // 1. Retrieves the `id` parameter from the route (e.g., /iphone/:id)
  const [product, setProduct] = useState(null); // 2. Initializes the `product` state to `null` initially.

  // 3. Fetches product data when the component mounts or when `id` changes.
  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`) // API call to fetch product data by id
      .then((response) => response.json()) // Converts the response to JSON format.
      .then((data) => setProduct(data)) // Updates the `product` state with fetched data.
      .catch((error) => console.error("Error fetching product:", error)); // Logs any error that occurs.
  }, [id]);

  // 4. Shows loading text while the data is being fetched.
  if (!product) return <p>Loading product details...</p>;

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h1>{product.product_name}</h1> {/* Displays product name */}
      <img
        src={product.product_image || "https://via.placeholder.com/600x600"} // Displays product image or a placeholder.
        alt={product.product_name}
        style={{ width: "600px", height: "auto", marginBottom: "20px" }}
      />
      <p>{product.product_description}</p> {/* Displays product description */}
      <p>Price: ${product.product_price}</p> {/* Displays product price */}
      <a
        href={product.product_url}
        style={{ color: "#0070c9", textDecoration: "none" }}
      >
        View Product on Apple Store{" "}
        {/* Link to view the product on Apple Store */}
      </a>
    </div>
  );
};

export default SingleAppleProduct;
