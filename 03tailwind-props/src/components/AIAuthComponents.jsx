import React, { useState, useEffect, useRef } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  CheckCircle,
  Bot,
  Zap,
  Mic,
  MicOff,
} from "lucide-react";

const AIAuthComponents = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentView, setCurrentView] = useState("signin"); // toggle signin/signup
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Voice recognition setup
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        alert(`Voice Input: ${transcript}`);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleVoice = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  // ---------------- Sign In Form ----------------
  const SignInForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-transparent to-cyan-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center">
            <Bot className="h-12 w-12 text-cyan-400 animate-bounce" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Welcome back! Secure access powered by AI.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6 relative z-10">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Voice Input */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={toggleVoice}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                listening
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {listening ? (
                <>
                  <Mic className="h-4 w-4 animate-pulse" /> Listening...
                </>
              ) : (
                <>
                  <MicOff className="h-4 w-4" /> Voice Input
                </>
              )}
            </button>

            <button
               type="button"
               onClick={() => alert("Forgot password clicked")}
               className="text-sm text-cyan-400 hover:text-cyan-300"
            >
             Forgot password?
             </button>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all transform hover:scale-[1.02]"
          >
            Sign In <ArrowRight className="h-5 w-5" />
          </button>

          {/* OAuth buttons */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => alert("Google Sign In triggered")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-gray-900 font-semibold border hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => alert("Apple Sign In triggered")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-black text-white font-semibold border hover:bg-gray-800 transition"
            >
              <img
                src="https://www.svgrepo.com/show/303128/apple-logo.svg"
                alt="Apple"
                className="h-5 w-5"
              />
              Continue with Apple
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-400">
            New here?{" "}
            <button
              type="button"
              onClick={() => setCurrentView("signup")}
              className="text-purple-400 hover:text-purple-300"
            >
              Create an account
            </button>
          </p>
        </form>
      </div>
    </div>
  );

  // ---------------- Sign Up Form ----------------
  const SignUpForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700/20 via-transparent to-purple-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center">
            <Zap className="h-12 w-12 text-purple-400 animate-spin-slow" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            AI Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join us and unlock AI-powered experiences.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6 relative z-10">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all transform hover:scale-[1.02]"
          >
            Sign Up <CheckCircle className="h-5 w-5" />
          </button>

          {/* OAuth buttons */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => alert("Google Sign Up triggered")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-gray-900 font-semibold border hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => alert("Apple Sign Up triggered")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-black text-white font-semibold border hover:bg-gray-800 transition"
            >
              <img
                src="https://www.svgrepo.com/show/303128/apple-logo.svg"
                alt="Apple"
                className="h-5 w-5"
              />
              Continue with Apple
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setCurrentView("signin")}
              className="text-cyan-400 hover:text-cyan-300"
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );

  return currentView === "signin" ? <SignInForm /> : <SignUpForm />;
};

export default AIAuthComponents;