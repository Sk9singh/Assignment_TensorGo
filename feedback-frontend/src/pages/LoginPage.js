import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    navigate("/submit-feedback");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in with your Google account to continue
        </p>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => alert("❌ Login Failed")}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
