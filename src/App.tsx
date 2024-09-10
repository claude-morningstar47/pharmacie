import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import NavBarComponent from "./components/utils/Nav";
import FooterComponent from "./components/utils/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBarComponent />
        <main>
          <Routes />
        </main>
        <FooterComponent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
