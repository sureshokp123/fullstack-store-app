export default function Navbar({ setPage }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("cart")}>Cart</button>
      <button onClick={() => setPage("orders")}>My Orders</button>
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("signup")}>Signup</button>
    </div>
  );
}
