import { login } from "../api";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await login(email, password);
      console.log("Login successful:", data);
    } catch (error) {
      return null;
    }
  };
  return (
    <form className="ml-4 pt-4" onSubmit={handleSubmit}>
      <div className="pt-5">
        <label className="text-md block font-medium text-blue-900">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="text-md block font-medium text-blue-900">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="mt-4 rounded bg-blue-900 px-4 py-2 font-bold text-white hover:bg-red-500 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
