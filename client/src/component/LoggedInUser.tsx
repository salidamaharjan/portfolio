import { post } from "../lib/http";

type LoggedInUSerProps = {
  username: string;
  password: string;
};

async function loggedInUSer({ username, password }: LoggedInUSerProps) {
  const data = await post("http://localhost:3001/api/login", {
    username,
    password,
  });
  console.log("data.id", data.id);
  return data;
}
export default loggedInUSer;
