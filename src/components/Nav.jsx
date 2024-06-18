import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, clearToken } from "../api/userSlice";

export default function Nav() {
  const currentUser = useSelector((state) => state.user.user);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearUser());
    dispatch(clearToken());
    navigate("/sign-in");
  };

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
            <button
              className="flex items-center font-bold hover:underline mr-1"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
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
