// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { readImageAsBase64 } from "./readImageAsBase64";

// export const generatePDF = async (data: any) => {
//   const doc = new jsPDF();

//   // Convertir l'image en Base64
//   const logoBase64 = await readImageAsBase64();

//   // Ajouter le logo
//   const logoWidth = 20;
//   const logoHeight = 20;
//   doc.addImage(logoBase64, "PNG", 14, 10, logoWidth, logoHeight);

//   // En-tête
//   doc.setFontSize(18);
//   doc.text("Rapport Skinmed", 14 + logoWidth + 10, 22);

//   // Ajouter une ligne sous l'en-tête
//   doc.setLineWidth(0.5);
//   doc.line(14, 24 + logoHeight, 200, 24 + logoHeight);

//   let y = 30 + logoHeight;

//   // Étape 0: Informations Pharmacie
//   doc.setFontSize(14);
//   doc.text("Informations Pharmacie", 14, y);
//   y += 10;
//   doc.setFontSize(12);
//   const step0 = data["0"];
//   const keysStep0 = ["nom-pharmacie", "adresse-pharmacie", "avis", "espace-prive", "etre-referent"];
//   keysStep0.forEach(key => {
//     if (step0[key]) {
//       doc.text(`${key.replace(/-/g, " ")}: ${step0[key]}`, 14, y);
//       y += 8;
//     }
//   });
//   y += 10;

//   // Étape 1: Potentiel (Table)
//   doc.setFontSize(14);
//   doc.text("Potentiel de Dépistage", 14, y);
//   y += 10;
//   doc.setFontSize(12);
//   const step1 = data["1"].potentiel || [];
//   const tableColumn = ["Zone", "CA", "Euro par Client", "Débit Mensuel", "Clients Annuels"];
//   const tableData = step1.map((item: any) => [
//     item.zone || "-",
//     item.ca || "",
//     item.euroPerClient || "",
//     item.monthlyFlow || "",
//     item.yearlyClients || "",
//   ]);

//   (doc as any).autoTable({
//     startY: y,
//     head: [tableColumn],
//     body: tableData,
//     margin: { top: 10 },
//   });

//   y = (doc as any).lastAutoTable.finalY + 10;

//   // Étape 2: Calcul Potentiel (Table)
//   doc.setFontSize(14);
//   doc.text("Calcul Potentiel de Dépistage", 14, y);
//   y += 10;
//   const step2 = data["2"]["calcul-potentiel"] || {};
//   // const tableColumn2 = ["Patients", "Half Patients", "No Follow Up", "Appointments","Risk Without Follow Up", "On Year", "On Five Year"];
//   const tableColumn2 = ["Patients", "Moitié de patients", "Pas de suivi", "Rendez-vous","Risque sans suivi", "Sur un an", "Sur cinq ans"];
//   //                    "Patients",  "Half Patients", "No Follow Up","Appointments","Risk Without Follow Up","On Year", "On Five Year"
//   //                   « Patients », « Moitié de patients », « Pas de suivi », « Rendez-vous », « Risque sans suivi », « Sur un an », « Sur cinq ans »
//   const tableData2 = [
//     [
//       step2.patients || "-",
//       step2.halfPatients || "-",
//       step2.noFollowUp || "-",
//       step2.appointments || "-",
//       step2.riskWithoutFollowUp || "-",
//       step2.onYear || "-",
//       step2.onFiveYear || "-",
//     ],
//   ];

//   (doc as any).autoTable({
//     startY: y,
//     head: [tableColumn2],
//     body: tableData2,
//     margin: { top: 10 },
//   });

//   y = (doc as any).lastAutoTable.finalY + 10;

//   // Étape 3: Calcul Réel
//   doc.setFontSize(14);
//   doc.text("Calcul Réel", 14, y);
//   y += 10;
//   doc.setFontSize(12);
//   doc.text(`Calcul Réel: ${data["3"]["calcul-reel"] || ""}`, 14, y);
//   y += 10;

//   // Étape 4: Vente de Produits (Table)
//   doc.setFontSize(14);
//   doc.text("Vente Additionnelle Produits", 14, y);
//   y += 10;
//   const step4 = data["4"].ventePoducts || [];
//   const tableColumn4 = ["Pourcentage", "Total Patients", "Total", "Net", "Marge"];
//   const tableData4 = step4.map((item: any) => [
//     item.pourcentage || "-",
//     item.totalPatients || "",
//     item.total || "",
//     item.net || "",
//     item.marge || "",
//   ]);

//   (doc as any).autoTable({
//     startY: y,
//     head: [tableColumn4],
//     body: tableData4,
//     margin: { top: 10 },
//   });

//   // Sauvegarder le PDF
//   return doc.output("datauristring");
// };



import jsPDF from "jspdf";
import "jspdf-autotable";
import { readImageAsBase64 } from "./readImageAsBase64";

export const generatePDF = async (data: any) => {
  const doc = new jsPDF();

  // Convertir l'image en Base64
  const logoBase64 = await readImageAsBase64();

  // Ajouter le logo
  const logoWidth = 20;
  const logoHeight = 20;
  doc.addImage(logoBase64, "PNG", 14, 10, logoWidth, logoHeight);

  // En-tête
  doc.setFontSize(18);
  doc.text("Rapport du Formulaire", 14 + logoWidth + 10, 22); 

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

  // Étape 2: Calcul Potentiel (Table)
  doc.setFontSize(14);
  doc.text("Étape 2: Calcul Potentiel", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step2 = data["2"]["calcul-potentiel"] || {};
  const step2Columns = ["Description", "Valeur"];
  const step2Data = [
    ["Patients", step2.patients || ""],
    ["Moitié Patients", step2.halfPatients || ""],
    ["Sans Suivi", step2.noFollowUp || ""],
    ["Rendez-vous", step2.appointments || ""],
    ["Risque Sans Suivi", step2.riskWithoutFollowUp || ""],
    ["Sur 1 An", step2.onYear || ""],
    ["Sur 5 Ans", step2.onFiveYear || ""],
  ];

  // Draw table for Étape 2
  (doc as any).autoTable({
    startY: y,
    head: [step2Columns],
    body: step2Data,
    margin: { top: 10 },
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Étape 3: Calcul Réel
  doc.setFontSize(14);
  doc.text("Étape 3: Calcul Réel", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step3 = data["3"].calculReel || [];
  const step3Columns = [
    "Année 1",
    "Année 2 (20%)",
    "Année 2 (25%)",
    "Année 2 (30%)",
    "Année 3 (20%)",
    "Année 3 (25%)",
    "Année 3 (30%)",
    "Année 4 (20%)",
    "Année 4 (25%)",
    "Année 4 (30%)",
    "Année 5 (20%)",
    "Année 5 (25%)",
    "Année 5 (30%)",
  ];
  const step3Data = step3.map((item: any) => [
    item.annee1 || 0,
    item.annee2_20 || 0,
    item.annee2_25 || 0,
    item.annee2_30 || 0,
    item.annee3_20 || 0,
    item.annee3_25 || 0,
    item.annee3_30 || 0,
    item.annee4_20 || 0,
    item.annee4_25 || 0,
    item.annee4_30 || 0,
    item.annee5_20 || 0,
    item.annee5_25 || 0,
    item.annee5_30 || 0,
  ]);

  // Draw table for Étape 3 table
  (doc as any).autoTable({
    startY: y,
    head: [step3Columns],
    body: step3Data,
    margin: { top: 10 },
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Étape 4: Vente Produits
  doc.setFontSize(14);
  doc.text("Étape 4: Vente Produits", 14, y);
  y += 10;
  doc.setFontSize(12);
  const step4 = data["4"].ventePoducts || [];
  const step4Columns = ["Pourcentage", "Total Patients", "Total", "Net", "Marge"];
  const step4Data = step4.map((item: any) => [
    item.pourcentage || "",
    item.totalPatients || "",
    item.total || "",
    item.net || "",
    item.marge || "",
  ]);

  // Draw table for Étape 4
  (doc as any).autoTable({
    startY: y,
    head: [step4Columns],
    body: step4Data,
    margin: { top: 10 },
  });

  // Sauvegarder le PDF
  return doc.output("datauristring");
};
