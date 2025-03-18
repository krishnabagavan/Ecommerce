import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("/api/auth/signup", { name, email, password });
      navigate("/signin");
    } catch (error) {
      alert("Error signing up");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
        className="border p-2 w-full mt-4" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full mt-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        className="border p-2 w-full mt-2" />
      <button onClick={handleRegister} className="bg-green-500 text-white py-2 px-4 mt-4 w-full">
        Register
      </button>
    </div>
  );
};

export default SignUp;
