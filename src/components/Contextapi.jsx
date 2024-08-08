import React, { createContext, useState, useContext } from 'react';

const Contextapi = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Contextapi.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Contextapi.Provider>
  );
};

export const useAuth = () => useContext(Contextapi);