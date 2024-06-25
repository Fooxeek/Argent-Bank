import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser, setToken, setStatus, setError } from "../api/userSlice";
import { loginUser, fetchUserProfile } from "../api/apiService";

export default function SigninContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    dispatch(setStatus("loading")); // Met à jour le statut à "loading"
    try {
      // Appel de la fonction loginUser pour tenter de se connecter
      const { token } = await loginUser(email, password);

      if (token) {
        dispatch(setToken(token)); // Stocke le token dans le store Redux
        // Récupère le profil de l'utilisateur en utilisant le token
        const user = await fetchUserProfile(token);
        dispatch(setUser(user)); // Stocke les informations de l'utilisateur dans le store Redux
        dispatch(setStatus("succeeded")); // Met à jour le statut à "succeeded"
        // Redirige l'utilisateur vers la page de profil
        navigate("/user/profile", { state: { user } });
        toast.success("Connexion réussie !");
      }
    } catch (err) {
      // En cas d'erreur, met à jour le statut et stocke le message d'erreur
      dispatch(setError("Invalid email or password"));
      dispatch(setStatus("failed"));
      console.error("Failed to sign in:", err);
      toast.error("Echec de la connexion");
    }
  };

  return (
    <div className="bg-dark flex justify-center items-center h-[85vh]">
      <section className="box-border bg-white w-[300px] p-6 shadow-lg mt-12">
        <div className="flex justify-center mb-4">
          <FaUserCircle size={50} />
        </div>
        <h1 className="text-center text-2xl font-bold mb-6">Sign in</h1>
        {status === "failed" && (
          <p className="text-red-500 text-center">{error}</p>
        )}
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
            disabled={status === "loading"}
          >
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}
