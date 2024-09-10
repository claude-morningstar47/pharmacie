import { Button, Input, message, Spin } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users.json";
import CryptoJS from "crypto-js"; // Import de la librairie crypto-js

const secretKey = "mySecretKey"; // Clé secrète pour le cryptage

const Login = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà authentifié dans le localStorage
    const encryptedUser = localStorage.getItem("authenticatedUser");
    if (encryptedUser) {
      // Déchiffre les données utilisateur
      const decryptedUser = JSON.parse(
        CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
      );
      if (decryptedUser) {
        setAuthenticated(true);
        navigate("/");
      }
    }
  }, [setAuthenticated, navigate]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Vérifier les identifiants dans le fichier JSON
      const user = usersData.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setAuthenticated(true);
        // Chiffre les données utilisateur avant de les stocker dans le localStorage
        const encryptedUser = CryptoJS.AES.encrypt(
          JSON.stringify(user),
          secretKey
        ).toString();
        localStorage.setItem("authenticatedUser", encryptedUser);
        navigate("/");
      } else {
        message.error("Identifiants invalides");
      }
    } catch (error) {
      message.error("Erreur lors de l'authentification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Se connecter</h2>
      <Input
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <Input.Password
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <Button
        type="primary"
        onClick={handleLogin}
        loading={loading}
        className="login-button"
      >
        Se connecter
      </Button>
      {loading && <Spin className="login-spinner" />}
    </div>
  );
};

export default Login;

