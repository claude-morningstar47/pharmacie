import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="App-footer">
      <p>© 2024 Skinmed Avis. Tous droits réservés.</p>
      <p>
        <a
          className="App-link"
          href="https://skinmed-mongo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitez notre site officiel Skinmed
        </a>
      </p>
    </Footer>
  );
};

export default FooterComponent;
