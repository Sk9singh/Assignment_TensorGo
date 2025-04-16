import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="49574312704-iddnn2klr2dcm1km37m105gttv78v5fj.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
