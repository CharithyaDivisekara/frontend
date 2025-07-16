import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  loginAsAdmin: () => {},
});

export const useAuth = () => useContext(AuthContext);