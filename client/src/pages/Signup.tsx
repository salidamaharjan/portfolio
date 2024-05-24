import { useNavigate } from "react-router-dom";
import Form from "../component/LoginSignupForm";
import { post } from "../lib/http";

function Signup() {
  const navigate = useNavigate();

  async function handleSignupClick(username: string, password: string) {
    const data = await post("/api/signup", {
      username,
      password,
    });
    // console.log("signup data", data);
    localStorage.setItem("token", data.accessToken);
    navigate(`/u/${username}`);
    // setUsername("");
    // setPassword("");
  }
  return (
    <div className="pt-6">
      <Form title="Signup" onAction={handleSignupClick} />
    </div>
  );
}

export default Signup;
