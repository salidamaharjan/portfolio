import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faRightFromBracket,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

type NavbarProps = {
  className?: string;
};
function Navbar({ className }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  return (
    <nav
      className={`flex justify-end text-sm lg:text-lg border-b-2 px-4 py-2 font-bold ${className}`}
    >
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
            <FontAwesomeIcon icon={faUserTie} /> Portfolio
          </div>
          <div
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout <FontAwesomeIcon icon={faRightFromBracket} />
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
            <FontAwesomeIcon icon={faRightToBracket} /> Login
          </div>
          <div
            className={`${
              location.pathname === "/signup" ? "text-green-600" : ""
            }`}
            onClick={() => {
              navigate("/signup");
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
