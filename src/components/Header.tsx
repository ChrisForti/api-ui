import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-slate-200 p-4">
      <header className="text-left text-7xl text-blue-900">
        Express Snippet Box
        <div className="text-right">
          <Link to="/login" className="pl-5 text-sm text-blue-500 underline">
            Login
          </Link>
          <Link to="/" className="pl-5 text-sm text-blue-500 underline">
            Snippet
          </Link>
        </div>
      </header>
    </div>
  );
}
