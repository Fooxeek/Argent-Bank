import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";

// Fonction pour connecter un utilisateur
export const loginUser = async (email, password) => {
  // Envoi d'une requête POST à l'endpoint /login avec l'email et le mot de passe de l'utilisateur
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  // Retourne la partie "body" des données de la réponse, qui contient le token et peut-être d'autres informations
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
