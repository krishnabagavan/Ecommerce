import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/signin", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-center">Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full mt-4" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        className="border p-2 w-full mt-2" />
      <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 mt-4 w-full">
        Login
      </button>
    </div>
  );
};

export default SignIn;
