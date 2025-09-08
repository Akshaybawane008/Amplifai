import AuthCard from "../auth/AuthCard";
import AuthComponent from "../components/dashboard/AuthComponent";

export default function SignupPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <AuthCard mode="signup" />
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-0 m-0 bg-white">
        <AuthComponent />
      </div>
    </div>
  );
}
