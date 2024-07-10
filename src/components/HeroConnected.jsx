import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";

export default function HeroConnected() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="font-semibold flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-white text-3xl pt-5">Welcome back</h1>
        <h1 className="text-white text-3xl pb-5">
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex justify-center">
          <EditButton user={user} />
        </div>
      </div>
    </div>
  );
}
