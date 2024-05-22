import Form from "../component/LoginSignupForm";

function Signup() {
  async function handleSignupClick() {
    const data = await post("http://localhost:3001/api/signup", {
      username,
      password,
    });
    // console.log("signup data", data);
    localStorage.setItem("token", data.accessToken);
    navigate(`/u/${username}`);
    setUsername("");
    setPassword("");
  }
  return (
    <div className="pt-6">
      <Form title="Signup" onAction={} />
    </div>
  );
}

export default Signup;
