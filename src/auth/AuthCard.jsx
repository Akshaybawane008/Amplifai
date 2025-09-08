import LoginForm from "../components/dashboard/LoginForm";
import SignupForm from "../components/dashboard/SignupForm";
import { useState } from "react";

export default function AuthCard({ initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <div className="w-full max-w-md auth-card bg-white rounded-xl shadow-lg p-6">
   
      <div className="flex items-center justify-start gap-3 mb-6 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywKtfz_WFT5YNRetTSJc0D5ogtIS2y1Iro1ZmEUhLpM1KTVSA"
          alt="Auth illustration"
          className="w-10 h-10 object-cover rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold text-blue-600 leading-none">
          FlowState
        </h1>
      </div>

   
      <h2 className="text-2xl font-semibold mb-1 text-start">
        {mode === "login" ? "Login" : "Create account"}
      </h2>
      <p className="text-sm text-gray-500 mb-6 text-start">
        {mode === "login"
          ? "Enter your email below to login to your account."
          : "Enter details to create a new account."}
      </p>


      {mode === "login" ? <LoginForm /> : <SignupForm />}

     
      <p className="mt-4 text-sm text-center">
        {mode === "login" ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
}
