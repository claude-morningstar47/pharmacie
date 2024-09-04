// generatePDF.ts
import jsPDF from "jspdf";
import "jspdf-autotable";
import { readImageAsBase64 } from "./readImageAsBase64";

export const generatePDF = async (data: any) => {
  const doc = new jsPDF();

  // Convertir l'image en Base64
  const logoBase64 = await readImageAsBase64();

  // Ajouter le logo
  const logoWidth = 20; // Largeur de votre logo
  const logoHeight = 20; // Hauteur de votre logo
  doc.addImage(logoBase64, "PNG", 14, 10, logoWidth, logoHeight);

  // En-tête
  doc.setFontSize(18);
  doc.text("Rapport du Formulaire", 14 + logoWidth + 10, 22); // Décalez le texte à droite du logo

  // Ajouter une ligne sous l'en-tête
  doc.setLineWidth(0.5);
  doc.line(14, 24 + logoHeight, 200, 24 + logoHeight);

  let y = 30 + logoHeight;

  // Étape 0: Informations Pharmacie
  doc.setFontSize(14);
  doc.text("Étape 0: Informations Pharmacie", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step0 = data["0"];
  for (const [key, value] of Object.entries(step0)) {
    doc.text(`${key.replace(/-/g, " ")}: ${value}`, 14, y);
    y += 8;
  }
  y += 10;

  // Étape 1: Potentiel (Table)
  doc.setFontSize(14);
  doc.text("Étape 1: Potentiel", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step1 = data["1"].potentiel || [];

  // Table headers
  const tableColumn = [
    "Zone",
    "CA",
    "Euro par Client",
    "Débit Mensuel",
    "Clients Annuels",
  ];
  const tableData = step1.map((item: any) => [
    item.zone || "-",
    item.ca || "",
    item.euroPerClient || "",
    item.monthlyFlow || "",
    item.yearlyClients || "",
  ]);

  // Draw table
  (doc as any).autoTable({
    startY: y,
    head: [tableColumn],
    body: tableData,
    margin: { top: 10 },
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Étape 2: Calcul Potentiel
  doc.setFontSize(14);
  doc.text("Étape 2: Calcul Potentiel", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step2 = data["2"]["calcul-potentiel"] || {};
  for (const [key, value] of Object.entries(step2)) {
    doc.text(`${key.replace(/-/g, " ")}: ${value}`, 14, y);
    y += 8;
  }
  y += 10;

  // Étape 3: Calcul Réel
  doc.setFontSize(14);
  doc.text("Étape 3: Calcul Réel", 14, y);
  y += 10;
  doc.setFontSize(12);
  doc.text(`Calcul Réel: ${data["3"]["calcul-reel"] || ""}`, 14, y);
  y += 10;

  // Sauvegarder le PDF
  return doc.output("datauristring");
};
