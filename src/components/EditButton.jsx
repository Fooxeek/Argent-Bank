import React, { useState } from "react";

export default function EditButton({ user, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSave = () => {
    onSave({ firstName, lastName });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setIsEditing(false);
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
