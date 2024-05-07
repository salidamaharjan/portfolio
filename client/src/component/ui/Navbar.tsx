import { useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  className?: string;
};
function Navbar({ className }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  return (
    <nav className={`flex justify-end text-lg font-bold ${className}`}>
      {token ? (
        <div className="flex gap-4">
          <div
            className={`${
              location.pathname === "/portfolio" ? "text-green-600" : ""
            }`}
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Portfolio
          </div>
          <div
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className="flex gap-4">
          <div
            className={`${location.pathname === "/" ? "text-green-600" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </div>
          <div
            className={`${
              location.pathname === "/signup" ? "text-green-600" : ""
            }`}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
