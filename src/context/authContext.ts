import { createContext } from "react";

interface AuthContext {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = createContext<AuthContext>({
  authenticated: true,
  setAuthenticated: (auth) => {},
});

export default authContext;
