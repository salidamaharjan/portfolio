import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
