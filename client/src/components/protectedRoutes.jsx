import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-red-600 text-xl font-bold">You must login to access this page.</p>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }
  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-red-600 text-xl font-bold">
          You do not have permission to view this page.
        </p>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
