import { Header } from "./components/Header";
import { SnippetForm } from "./components/SnippetForm";

function App() {
  return (
    <div className="text-black">
      <Header />
      <div>
        <SnippetForm />
      </div>
    </div>
  );
}

export default App;
