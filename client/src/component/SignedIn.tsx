import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function SignedIn(props: {children: React.ReactNode}) {
  const { username } = useContext(UserContext);
  return username && <>{props.children}</>;
}
export default SignedIn;
