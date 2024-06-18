import axios from "axios";

// Base URL for your API
const BASE_URL = "http://localhost:3001/api/v1/user";

// Function to log in the user
export const loginUser = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data.body;
};

// Function to fetch user profile
export const fetchUserProfile = async (token) => {
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
