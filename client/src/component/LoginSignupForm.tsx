import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post } from "../lib/http";
import { useNavigate } from "react-router-dom";

type FormProps = {
  title: string;
};

function Form({ title }: FormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLoginClick() {
    // alert(`username= ${username}, password= ${password}`);
    const data = await post("http://localhost:3001/api/login", {
      username,
      password,
    });
    // console.log("login data", data);
    localStorage.setItem("token", data.accessToken);
    navigate("/portfolio");
    setUsername("");
    setPassword("");
  }
  async function handleSignupClick() {
    const data = await post("http://localhost:3001/api/signup", {
      username,
      password,
    });
    // console.log("signup data", data);
    localStorage.setItem("token", data.accessToken);
    navigate("/portfolio");
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex flex-col text-2xl font-bold text-blue-600 gap-6 items-center">
      {" "}
      {title}
      <div className=" flex flex-col gap-6 border shadow-xl text-lg rounded-md p-8 sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] items-center border-gray-500">
        <div>
          <Label className="text-gray-800">
            {" "}
            Username:{" "}
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </Label>
        </div>
        <div>
          <Label className="text-gray-800">
            {" "}
            Password:{" "}
            <Input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Label>
        </div>
        <Button
          className="bg-blue-600 text-white"
          onClick={title === "Login" ? handleLoginClick : handleSignupClick}
        >
          {title}
        </Button>
        {title === "Login" ? (
          <div className="text-gray-800">
            Don't have an account{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
              className="underline text-blue-600 underline-offset-2 "
            >
              Signup
            </span>
          </div>
        ) : (
          <div className="text-gray-800">
            Already have an account{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="underline text-blue-600 underline-offset-2 "
            >
              Login
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Form;
