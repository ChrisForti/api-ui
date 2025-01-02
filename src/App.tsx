import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import SnippetForm from "./components/SnippetForm";

function App() {
  // need to figure out usestate params, for snippet box
  const [setHeaderNavigation, setToHome] = useState(0);

  return (
    <div className="text-black">
      <Header setHeaderNavigation={setToHome} />
      <div>
        <SnippetForm home={setToHome} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
