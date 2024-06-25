import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";

// Fonction pour connecter un utilisateur
export const loginUser = async (email, password) => {
  // Envoi d'une requête POST à l'endpoint /login avec l'email et le mot de passe de l'utilisateur
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data.body;
};

// Fonction pour récupérer le profil de l'utilisateur
export const fetchUserProfile = async (token) => {
  // Envoi d'une requête POST à l'endpoint /profile avec un token dans les en-têtes pour l'authentification
  const response = await axios.post(
    `${BASE_URL}/profile`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.body;
};

// Fonction asynchrone pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = async (token, user) => {
  // Envoi d'une requête PUT à l'endpoint /profile avec les nouvelles données utilisateur
  // Le token est inclus dans les en-têtes de la requête pour l'authentification
  const response = await axios.put(`${BASE_URL}/profile`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.body;
};
