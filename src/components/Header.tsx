import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-slate-200 p-6">
      <header className="text-center text-7xl text-blue-900">
        Express Snippet Box
        <Link to="/login" className="ml-4 text-blue-500 underline">
          Login
        </Link>
      </header>
    </div>
  );
}
