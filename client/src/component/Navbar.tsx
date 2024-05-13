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
          <div className="hover:text-green-600">
            <a
              className={`${
                location.pathname === "/portfolio" ||
                location.pathname === "/portfolio/aboutme"
                  ? "text-green-600"
                  : ""
              }`}
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              <FontAwesomeIcon icon={faUserTie} /> Portfolio
            </a>
          </div>
          <a
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="text-red-500 hover:text-yellow-400"
          >
            Logout <FontAwesomeIcon icon={faRightFromBracket} />
          </a>
        </div>
      ) : (
        <div className="flex gap-4">
          <div className="hover:text-green-600">
            <a
              className={`${location.pathname === "/" ? "text-green-600" : ""}`}
              onClick={() => {
                navigate("/");
              }}
            >
              <FontAwesomeIcon icon={faRightToBracket} /> Login
            </a>
          </div>
          <div className="hover:text-green-600">
            <a
              className={`${
                location.pathname === "/signup" ? "text-green-600" : ""
              }`}
              onClick={() => {
                navigate("/signup");
              }}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Signup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
