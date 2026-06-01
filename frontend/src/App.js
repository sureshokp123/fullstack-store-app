// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MyOrders from "./components/MyOrders";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then(res => setProducts(res.data));
//   }, []);

//   const token = localStorage.getItem("token");

//   const getMyOrders = async () => {
//     const res = await axios.get(
//       "http://localhost:5000/api/orders/my",
//       {
//         headers: {
//           Authorization: token
//         }
//       }
//     );

//     console.log(res.data);
//   };

//   const placeOrder = async () => {
//     const token = localStorage.getItem("token");

//     const total = cart.reduce((sum, item) => sum + item.price, 0);

//     await axios.post(
//       "http://localhost:5000/api/orders",
//       {
//         products: cart,
//         total
//       },
//       {
//         headers: {
//           Authorization: token
//         }
//       }
//     );

//     alert("Order placed successfully");
//     setCart([]);
//   };


//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Dress Shop</h1>

//       <h2>Products</h2>
//       {products.map(p => (
//         <div key={p._id} style={{ border: "1px solid gray", margin: 10 }}>
//           <h3>{p.name}</h3>
//           <p>₹{p.price}</p>
//           <button onClick={() => addToCart(p)}>Add to Cart</button>
//         </div>
//       ))}

//       <h2>Cart ({cart.length})</h2>
//       {cart.map((item, index) => (
//         <div key={index}>{item.name}</div>
//       ))}

//       {cart.length > 0 && (
//         <button onClick={placeOrder}>Place Order</button>
//       )}

//        <MyOrders />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Cart from "./components/Cart";
import MyOrders from "./components/MyOrders";

function App() {
  const [page, setPage] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "login" && <Login />}
      {page === "signup" && <Signup />}
      {page === "products" && <Products setCart={setCart} />}
      {page === "cart" && <Cart cart={cart} setCart={setCart} />}
      {page === "orders" && <MyOrders />}
    </div>
  );
}

export default App;
