import API from "../api";

export default function Cart({ cart, setCart }) {

const placeOrder = async () => {
  console.log("Place order clicked"); // ✅ check this

  try {
    const res = await API.post("/api/orders", {
      products: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0)
    });

    setCart([]);
    console.log("Order response:", res.data); // ✅ check this
  } catch (err) {
    console.log("Order error:", err.response?.data || err.message);
  }
};


  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}

      {cart.length > 0 && (
        <button onClick={placeOrder}>Place Order</button>
      )}
    </div>
  );
}
