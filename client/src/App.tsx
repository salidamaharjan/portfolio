import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="p-4">
    <Navbar />
    <Outlet/>
    </div>
  );
}

export default App;
