import "./App.css";
import Sidebar from "./view/sidebar/Sidebar";
import Topbar from "./view/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;
