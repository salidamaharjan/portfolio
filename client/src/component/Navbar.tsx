import { useNavigate } from "react-router-dom";
type NavbarProps = {
  className?: string;
};
function Navbar({ className }: NavbarProps) {
  const navigate = useNavigate();
  return (
    <nav className={`flex justify-end gap-4 ${className}`}>
      <div
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        Portfolio
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </div>
      <div
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
