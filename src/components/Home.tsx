import React from "react";
import { Typography, Button, Layout, Space } from "antd";
import { useNavigate } from "react-router-dom";
// import './App.css';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/step");
  };
  return (
    <Layout style={{ minHeight: "10vh", padding: "20px" }}>
      <Content
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "40px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Space direction="vertical" size="middle">
          <Title level={2}>Accueil</Title>
          <Title level={3}>Bienvenue sur le micro logiciel Skinmed Avis</Title>
          <Paragraph>
            Notre application de gestion d'avis pharmaceutiques est conçue pour
            faciliter la collecte et la gestion d'informations critiques sur les
            pharmacies et leurs services. Avec une interface utilisateur
            intuitive, elle vous guide à travers plusieurs étapes dédiées à la
            collecte d'informations spécifiques.
          </Paragraph>
          <Title level={4}>Fonctionnalités clés :</Title>
          <ul>
            <li>
              <strong>Collecte d'Informations :</strong> Saisissez le nom du
              pharmacien, les détails de la pharmacie comme le nom et l'adresse,
              puis fournissez un avis détaillé avec la possibilité de
              sélectionner le type d'avis (positif, neutre, négatif).
            </li>
            <li>
              <strong>Navigation Étape par Étape :</strong> Le système de
              formulaires multi-étapes vous guide à travers chaque section, vous
              permettant de valider vos informations avant de passer à l'étape
              suivante pour assurer une collecte complète et précise.
            </li>
            <li>
              <strong>Validation et Soumission :</strong> Après avoir rempli
              tous les formulaires, soumettez-les d'un simple clic. Les données
              saisies sont ensuite enregistrées et peuvent être consultées
              directement dans la console pour une vérification rapide.
            </li>
          </ul>
          <Paragraph>
            Explorez l application et profitez de sa simplicité pour gérer
            efficacement les avis et informations sur les pharmacies.
          </Paragraph>
          <Button type="primary" size="large" onClick={handleSubmit}>
            Commencer
          </Button>
        </Space>
      </Content>
    </Layout>
  );
}

export default Home;
