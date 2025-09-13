// src/components/LoginPage.jsx
import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your Firebase config (replace with your real values)
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Normal login (dummy for now)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Left side: form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">Welcome</h2>
          <p className="text-gray-500 mb-6">
            Please login to your account with us
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500">Login with Others</div>

          {/* Google login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-4 py-3 border rounded-lg flex items-center justify-center hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>

          {/* Facebook placeholder */}
          <button className="w-full mt-4 py-3 border rounded-lg flex items-center justify-center hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Login with Facebook
          </button>
        </div>

        {/* Right side: image */}
        <div className="w-1/2">
          <img
            src="/login-illustration.png" // place your image in public folder
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;