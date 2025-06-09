import { createContext, useContext, ReactNode, useState } from "react";

type UserContextType = {
  username: string;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");

  const login = (name: string) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername("");
  };

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
