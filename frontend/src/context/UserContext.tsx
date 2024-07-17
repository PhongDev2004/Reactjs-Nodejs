import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "src/interfaces/User";

type UserContextType = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  isLoggedIn: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn: !user }}>
      {children}
    </UserContext.Provider>
  );
};
