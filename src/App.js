import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style by Sass Partials
import "./styles/main.css";

// Pages by React BrowserRouter
import Home from "./pages/Home";
import Signin from "./pages/Sign-in";
import User from "./pages/User";
import Error404 from "./pages/Error404";

// Components Header && Footer
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// Component Toaster
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Toaster position="top-center" />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/user/profile" element={<User />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
