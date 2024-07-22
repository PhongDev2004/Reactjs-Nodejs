import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IUser } from 'src/interfaces/User';
import { isAuthenticated } from 'src/service/auth';

type UserContextType = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuthenticated());

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setUser(JSON.parse(localStorage.getItem('user') as string));
  //   }
  // }, []);

  return <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>{children}</UserContext.Provider>;
};
