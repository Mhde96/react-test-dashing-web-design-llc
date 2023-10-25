import React, { createContext, ReactNode, useState } from "react";

type User = {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  role: string | undefined;
};

type AuthContextState = {
  user: User;
};

export type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
  handleChangeUser: (user: User) => void;
};

export const initialAuthContextState: AuthContextState = {
  user: {
    id: undefined,
    username: undefined,
    password: undefined,
    role: undefined,
  },
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(initialAuthContextState.user);
  const handleChangeUser = (user: User) => setUser(user);
  return (
    <AuthContext.Provider value={{ user, setUser, handleChangeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
