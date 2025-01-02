import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="Header flex items-center justify-between">
      <h1 className="text-2xl">
        Hello <br /> <span className="text-2xl font-bold">{user?.fullName || 'Admin'} 👋</span>
      </h1>
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">Log Out</button>
    </div>
  );
};

export default Header;
