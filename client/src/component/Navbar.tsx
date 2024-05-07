import { useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  className?: string;
};
function Navbar({ className }: NavbarProps) {
  // const [loginStyle, setLoginStyle] = useState("");
  // const [signupStyle, setSignupStyle] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className={`flex justify-end font-bold gap-4 ${className}`}>
      <div
        className={`${
          location.pathname === "/portfolio" ? "text-blue-600" : ""
        }`}
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        Portfolio
      </div>
      <div
        className={`${location.pathname === "/" ? "text-blue-600" : ""}`}
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </div>
      <div
        className={`${location.pathname === "/signup" ? "text-blue-600" : ""}`}
        onClick={() => {
          navigate("/signup");
        }}
      >
        Signup
      </div>
      <div onClick={() => {}}>Logout</div>
    </nav>
  );
}
export default Navbar;
