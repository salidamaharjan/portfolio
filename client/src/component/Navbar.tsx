import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faRightFromBracket,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  return (
    <nav
      className={`flex justify-end text-sm z-50 lg:text-lg border-b-2 px-4 py-2 font-bold sticky top-0 bg-white ${className}`}
    >
      {token ? (
        <div className="flex gap-4">
          <div className="hover:text-green-600">
            <a
              className={clsx({
                "text-green-600": location.pathname.endsWith(`${username}`),
              })}
              onClick={() => navigate("")}
            >
              <FontAwesomeIcon icon={faUserTie} /> Portfolio
            </a>
          </div>
          <a
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
              window.location.reload();
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
              className={clsx({
                "text-green-600": location.pathname === "/login",
              })}
              onClick={() => navigate("/login")}
            >
              <FontAwesomeIcon icon={faRightToBracket} /> Login
            </a>
          </div>
          <div className="hover:text-green-600">
            <a
              className={clsx({
                "text-green-600": location.pathname === "/signup",
              })}
              onClick={() => navigate("/signup")}
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
