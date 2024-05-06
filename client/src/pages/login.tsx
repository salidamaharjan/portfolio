import Form from "../component/ui/Form";
import { post } from "../lib/http";

function Login() {
  return (
    <div className="pt-6">
      <Form children="Login" />
    </div>
  );
}

export default Login;
