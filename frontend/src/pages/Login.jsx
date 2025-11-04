import React, { useState } from "react";

export default function Login({ onBack, onAdminLogin, onUserLogin }) {
  const [role, setRole] = useState("user");
  const isAdmin = role === "admin";

  const handleSignIn = () => {
    if (isAdmin) onAdminLogin();
    else onUserLogin();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-brown-200">
        <h1 className="text-xl font-bold text-[#8B5E3C] tracking-wide">
          AGRITRACKER
        </h1>
        <button
          className="bg-[#8B5E3C] text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-[#724b2f] transition"
          onClick={onBack}
        >
          BACK TO HOME
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"
            alt="farm-field"
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Right Card */}
        <div
          className={`w-full md:w-[420px] rounded-xl shadow-md px-8 py-10 border text-center ${
            isAdmin ? "bg-[#E3C6A0]" : "bg-[#E3F0C2]"
          }`}
        >
          {/* Icon */}
          <div className="text-5xl mb-2">
            <span
              className={`material-symbols-outlined ${
                isAdmin ? "text-[#8B5E3C]" : "text-[#6B8E23]"
              }`}
            >
              person
            </span>
          </div>

          <h2
            className={`text-lg font-bold mb-1 ${
              isAdmin ? "text-[#8B5E3C]" : "text-[#6B8E23]"
            }`}
          >
            {isAdmin ? "ADMIN LOGIN" : "USER LOGIN"}
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Sign in to access your dashboard
          </p>

          {/* Smooth Toggle Buttons (no gradient) */}
          <div className="relative w-full bg-white border border-gray-300 rounded-full overflow-hidden mb-6">
            {/* Sliding indicator */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 rounded-full transform transition-transform duration-500 ease-in-out ${
                isAdmin
                  ? "translate-x-full bg-[#8B5E3C]"
                  : "translate-x-0 bg-[#6B8E23]"
              }`}
            ></div>

            {/* Buttons */}
            <div className="relative z-10 flex text-sm font-medium">
              <button
                onClick={() => setRole("user")}
                className={`w-1/2 py-2 transition-colors duration-300 ${
                  role === "user"
                    ? "text-white"
                    : "text-gray-700 hover:text-[#6B8E23]"
                }`}
              >
                User
              </button>
              <button
                onClick={() => setRole("admin")}
                className={`w-1/2 py-2 transition-colors duration-300 ${
                  role === "admin"
                    ? "text-white"
                    : "text-gray-700 hover:text-[#8B5E3C]"
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>

            <div className="mt-3 text-center">
              <p className="text-xs text-gray-600 mb-2">
                [ReCAPTCHA verification]
              </p>
            </div>

            <button
              type="button"
              onClick={handleSignIn}
              className={`w-full py-2 rounded-md text-white font-semibold transition ${
                isAdmin
                  ? "bg-[#8B5E3C] hover:bg-[#724b2f]"
                  : "bg-[#6B8E23] hover:bg-[#58731c]"
              }`}
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-5 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>
      </main>
    </div>
  );
}
