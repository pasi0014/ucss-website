import React, { createContext, useContext, useState } from "react";

interface User {
  accessToken: string;
}

interface AuthContextType {
  user: User | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (accessToken) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(() => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? { accessToken } : null;
  });

  const login = (accessToken: string) => {
    console.log("setting localstorate with accessToken", { accessToken });
    localStorage.setItem("accessToken", accessToken);
    setUser({ accessToken });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
