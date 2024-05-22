import { useNavigate } from "react-router-dom";
import Form from "../component/LoginSignupForm";
import { post } from "../lib/http";

function Login() {
  const navigate = useNavigate();

  async function handleLoginClick(username: string, password: string) {
    const data = await post("http://localhost:3001/api/login", {
      username,
      password,
    });
    console.log("login data", data);
    localStorage.setItem("token", data.accessToken);
    navigate(`/u/${username}`);

  }
  return (
    <div className="pt-6">
      <Form title="Login" onAction={handleLoginClick} />
    </div>
  );
}

export default Login;
