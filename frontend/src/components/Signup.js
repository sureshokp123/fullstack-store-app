import { useState } from "react";
import API from "../api";

export default function Signup() {
  const [data, setData] = useState({});

  const signup = async () => {
    await API.post("/api/auth/signup", data);
    alert("Signup success");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e)=>setData({...data, name:e.target.value})} />
      <input placeholder="Email" onChange={(e)=>setData({...data, email:e.target.value})} />
      <input placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})} />
      <button onClick={signup}>Signup</button>
    </div>
  );
}
