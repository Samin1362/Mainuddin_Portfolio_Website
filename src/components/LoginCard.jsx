import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Card Header with Gradient Background */}
      <div className="bg-linear-to-r from-blue-600 to-blue-500 py-8 px-6">
        <h1 className="text-center text-3xl font-bold text-white mb-2">
          Welcome
        </h1>
        <p className="text-center text-blue-100 text-sm">
          Login to get in touch with me
        </p>
      </div>

      {/* Card Body */}
      <div className="p-8">
        <div className="mb-6 text-center">
          <p className="text-gray-600 text-sm">
            Sign in with your Google account to continue
          </p>
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-600 rounded-lg py-3.5 px-6 text-gray-700 font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
          <FcGoogle className="text-3xl transition-transform duration-300 group-hover:rotate-12" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Secure authentication powered by Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
