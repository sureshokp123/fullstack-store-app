import { useEffect, useState } from "react";
import axios from "axios";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔐 Get token
  const token = localStorage.getItem("token");

  // 📥 Fetch Orders
  const getMyOrders = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/orders/my",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Orders:", res.data);
      setOrders(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  // ❌ Cancel Order
  const cancelOrder = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/cancel/${id}`,
        {},
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        }
      );
console.log("Order cancelled:", id);
      // 🔄 Refresh orders after cancel
      getMyOrders();
    } catch (err) {
      console.error(err);
      alert("Cancel failed");
    }
  };

  // 🔁 Load on page open
  useEffect(() => {
    if (!token) {
      console.error("No token found");
      setError("Please login first");
      setLoading(false);
      return;
    }

    getMyOrders();
  }, []);

  // 🎨 UI
  if (loading) return <h3>Loading orders...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 10
            }}
          >
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Status:</strong> {order.status || "placed"}</p>

            <h4>Items:</h4>
            {order.products.map((item, index) => (
              <div key={index}>
                {item.name} - ₹{item.price}
              </div>
            ))}

            {/* Cancel button */}
            {order.status !== "cancelled" && (
              <button onClick={() => cancelOrder(order._id)}>
                Cancel Order
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import API from "../api";

// export default function MyOrders() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         console.log("Token:", localStorage.getItem("token"));

//         API.get("/api/orders/my")
//             .then(res => setOrders(res.data))
//             .catch(err => {
//                 console.log(err.response?.data);
//                 alert("Error: " + err.response?.data?.msg);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>My Orders</h2>

//             {orders.map(o => (
//                 <div key={o._id}>
//                     Total: ₹{o.total}
//                 </div>
//             ))}
//         </div>
//     );
// }
