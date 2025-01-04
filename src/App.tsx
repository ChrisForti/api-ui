import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
// import SnippetForm from "./components/SnippetForm";

function App() {
  return (
    <div className="text-black">
      <Header />
      <div>
        {/* <SnippetForm /> */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
