import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  userId?: number;
  username?: string;
  setUserId?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setUsername?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({});

export function UserProvider({ children }: UserProviderProps) {
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded = jwtDecode(token || "") as any;
      // console.log("decoded", decoded);
      decoded ? setUserId(decoded.id) : localStorage.removeItem("token");
      decoded
        ? setUsername(decoded.username)
        : localStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userId, username, setUserId, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
