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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Login to Continue
        </h2>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => alert("Login Failed")}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
