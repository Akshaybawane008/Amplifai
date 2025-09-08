import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth"


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()


    if (email === "test@test.com" && password === "1234") {
      login("dummyToken123") 
      navigate("/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Business Email Address
        </label>
        <input
          className="w-full border rounded-md px-3 py-2"
          type="email"
          placeholder="username@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          className="w-full border rounded-md px-3 py-2"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
          Forgot your account?
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Logging..." : "Login"}
      </button>
    </form>
  );
}
