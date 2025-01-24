import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { SnippetForm } from "./components/SnippetForm";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <Router>
      {" "}
      <div className="text-black">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<SnippetForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
