// En un nuevo archivo AuthContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

type AuthContextType = {
  user: string | null;
  role: string | null;
  login: (username: string, role: string) => void;
  logout: () => void;
};

export type UserRole = 'usuarioDirector' | 'usuarioDGEC' | 'usuarioFinanzas' | 'usuarioDireccionEstudios'

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<string | null>(null);
  const [role, setRole] = React.useState<string | null>(null);

  const login = (username: string, role: string) => {
    setUser(username);
    setRole(role);
  };

   const logout = () => {
    setUser(null);
    setRole(null);
  };

  const contextValue: AuthContextType = {
    user,
    role,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
