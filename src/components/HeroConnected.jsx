import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../api/userSlice";
import EditButton from "./EditButton";

export default function HeroConnected() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleSave = (updatedUser) => {
    dispatch(setUser(updatedUser));
  };

  return (
    <div className="font-semibold flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-white text-3xl pt-5">Welcome back</h1>
        <h1 className="text-white text-3xl pb-5">
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex justify-center">
          <EditButton user={user} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}
