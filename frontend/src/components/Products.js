import { useEffect, useState } from "react";
import API from "../api";

export default function Products({ setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p._id}>
          {p.name} - ₹{p.price}
          <button onClick={() => setCart(prev => [...prev, p])}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
