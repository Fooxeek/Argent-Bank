import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser } from "../api/userSlice";
import { updateUserProfile } from "../api/apiService";

export default function EditButton({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      const updatedUser = await updateUserProfile(token, {
        firstName,
        lastName,
      });
      dispatch(setUser(updatedUser));
      setIsEditing(false);
      toast.success("Profile edité avec succès");
    } catch (error) {
      toast.error("Echec de la mise à jour du profil");
      console.error("Failed to update user profile:", error);
    }
  };

  const handleCancel = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setIsEditing(false);
    toast("Edition annulée");
  };

  if (isEditing) {
    return (
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="p-2 border border-black mb-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          className="p-2 border border-black mb-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <div className="flex space-x-2">
          <button
            className="bg-greenButton border border-greenButton text-white p-2 shadow-custom active:shadow-customActive transition-shadow"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 border border-gray-500 text-white p-2 shadow-custom active:shadow-customActive transition-shadow"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      className="bg-greenButton border border-greenButton text-white p-2 mb-5 shadow-custom active:shadow-customActive transition-shadow"
      onClick={() => setIsEditing(true)}
    >
      Edit Name
    </button>
  );
}
