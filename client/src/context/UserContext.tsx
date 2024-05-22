import { createContext, ReactNode, useState } from "react";

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
  return (
    <UserContext.Provider value={{ userId, username, setUserId, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
