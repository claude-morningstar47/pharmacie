import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  logout: () => void; // Ajoute la fonction logout
};

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
  logout: () => {}, // Initialise une fonction vide pour logout
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticatedState] = useState(
    initialValue.authenticated
  );

  const navigate = useNavigate();

  const handleSetAuthenticated = (newState: boolean) => {
    setAuthenticatedState(newState);
    if (newState) {
      navigate("/"); // Redirection après authentification
    }
  };

  const logout = () => {
    localStorage.removeItem("authenticatedUser"); // Stocke l'utilisateur dans le localStorage
    setAuthenticatedState(false);
    navigate("/login"); // Redirection vers la page de login après déconnexion
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated: handleSetAuthenticated, logout }} // Passe la fonction logout dans le Provider
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
