import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

// Configuration du store Redux en utilisant configureStore
const store = configureStore({
  // Définition des reducers pour le store
  reducer: {
    // Le slice utilisateur (user) est géré par userReducer
    user: userReducer,
  },
});

export default store;
