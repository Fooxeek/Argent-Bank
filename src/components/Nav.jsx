import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";

export default function Nav({ currentUser }) {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[200px]" />
      </Link>
      <div>
        {location.pathname.includes("/user/") && currentUser ? (
          <div className="flex items-center">
            <Link
              to={`/user/${currentUser.id}`}
              className="flex items-center font-bold hover:underline mr-3"
            >
              <FaUserCircle className="mr-1" />
              <span>{currentUser.firstName}</span>
            </Link>
            <Link
              className="flex items-center font-bold hover:underline mr-1"
              to="/"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <Link
            className="flex items-center font-bold hover:underline mr-1"
            to="/sign-in"
          >
            <FaUserCircle className="mr-1" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
