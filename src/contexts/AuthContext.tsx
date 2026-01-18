import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_SESSION_KEY = "dev_auth_session";
const EXPECTED_PASSWORD = import.meta.env.VITE_DEV_PASSWORD || "dev123";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check if user is already authenticated in this session
    const sessionAuth = sessionStorage.getItem(AUTH_SESSION_KEY);
    return sessionAuth === "true";
  });

  useEffect(() => {
    // Sync authentication state with sessionStorage
    if (isAuthenticated) {
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
    } else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  }, [isAuthenticated]);

  const login = (password: string): boolean => {
    if (password === EXPECTED_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
