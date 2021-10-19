import "./App.css";
import { Sidebar } from "./view/sidebar";
import { Topbar } from "./view/topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;
