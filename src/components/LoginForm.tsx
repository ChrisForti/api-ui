import { Input } from "./Input";
import { login } from "../api";

export function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="ml-4 pt-4" onSubmit={handleSubmit}>
      <div className="pt-5">
        <Input />
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
