import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Récupère les informations utilisateur depuis localStorage ou initialise à null
  token: localStorage.getItem("token") || null, // Récupère le token depuis localStorage ou initialise à null
  status: "idle", // Initialise le statut à "idle" (inactif)
  error: null, // Initialise l'erreur à null
};

// Création du slice utilisateur avec createSlice
const userSlice = createSlice({
  name: "user", // Nom du slice
  initialState, // État initial défini plus haut
  reducers: {
    // Définition des reducers (fonctions de mise à jour de l'état)

    // Reducer pour définir l'utilisateur
    setUser: (state, action) => {
      // Fusionne les informations utilisateur existantes avec celles fournies dans action.payload
      state.user = { ...state.user, ...action.payload };
      // Stocke les informations utilisateur mises à jour dans localStorage
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    // Reducer pour effacer l'utilisateur
    clearUser: (state) => {
      state.user = null; // Réinitialise l'utilisateur à null
      localStorage.removeItem("user"); // Supprime les informations utilisateur de localStorage
    },

    // Reducer pour définir le token
    setToken: (state, action) => {
      state.token = action.payload; // Met à jour le token dans l'état
      localStorage.setItem("token", action.payload); // Stocke le token dans localStorage
    },

    // Reducer pour effacer le token
    clearToken: (state) => {
      state.token = null; // Réinitialise le token à null
      localStorage.removeItem("token"); // Supprime le token de localStorage
    },

    // Reducer pour définir le statut
    setStatus: (state, action) => {
      state.status = action.payload; // Met à jour le statut dans l'état
    },

    // Reducer pour définir l'erreur
    setError: (state, action) => {
      state.error = action.payload; // Met à jour l'erreur dans l'état
    },
  },
});

export const { setUser, clearUser, setToken, clearToken, setStatus, setError } =
  userSlice.actions;

export default userSlice.reducer;
