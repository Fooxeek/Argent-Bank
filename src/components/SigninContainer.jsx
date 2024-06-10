import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Pour rediriger après connexion réussie

export default function SigninContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting:", { email, password });
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );

      console.log("Response:", response.data);
      const { token, user } = response.data.body;
      console.log("Token:", token);
      console.log("User:", user);

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        // Rediriger vers /user/profile avec les données utilisateur
        navigate("/user/profile", { state: { user } });
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="bg-dark flex justify-center items-center h-[85vh]">
      <section className="box-border bg-white w-[300px] p-6 shadow-lg mt-12">
        <div className="flex justify-center mb-4">
          <FaUserCircle size={50} />
        </div>
        <h1 className="text-center text-2xl font-bold mb-6">Sign in</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-left mb-4">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 border border-black"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-left mb-4">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 border border-black"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-greenButton text-white py-2 underline"
          >
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}
