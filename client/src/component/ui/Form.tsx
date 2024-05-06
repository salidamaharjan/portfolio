import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useState } from "react";
import { post } from "../../lib/http";
import { useNavigate } from "react-router-dom";

type FormProps = {
  children: string;
};

function Form({ children }: FormProps) {
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
      {children}
      <div className=" flex flex-col gap-6 border text-lg rounded-md p-8 sm:min-w-[250px] md:min-w-[350px] lg:min-w-[450px] items-center border-gray-500">
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
          onClick={children === "Login" ? handleLoginClick : handleSignupClick}
        >
          {children}
        </Button>
      </div>
    </div>
  );
}
export default Form;
