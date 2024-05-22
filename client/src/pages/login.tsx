import { useNavigate } from "react-router-dom";
import Form from "../component/LoginSignupForm";
import { post } from "../lib/http";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { setUserId, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleLoginClick(username: string, password: string) {
    try {
      const data = await post("http://localhost:3001/api/login", {
        username,
        password,
      });
      // console.log("login data", data);
      localStorage.setItem("token", data.accessToken);
      setUserId?.(data.id);
      setUsername?.(data.username);
      navigate(`/u/${username}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="pt-6">
      <Form title="Login" onAction={handleLoginClick} />
    </div>
  );
}

export default Login;
