import React, { useRef, useState } from "react";
import { Form, Button, Steps, message, Modal } from "antd";
import { generatePDF } from "../../utils/generatePDF";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const { Step } = Steps;

const MultiStepForm: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [form] = Form.useForm();
  const [stepValues, setStepValues] = useState<{ [key: number]: any }>({});
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null);
  const pdfRef = useRef<HTMLIFrameElement>(null);

  // Étapes du formulaire
  const steps = [
    { title: "Avis", component: <Step1 form={form} /> },
    { title: "Potentiel", component: <Step2 form={form} /> },
    { title: "Calcul Potentiel", component: <Step3 form={form} /> },
    { title: "Simulation", component: <Step4 form={form} /> },
    { title: "Simulation Crème", component: <Step5 form={form} /> },
  ];

  // Avancer à l'étape suivante
  const next = async () => {
    try {
      const values = await form.validateFields();
      setStepValues((prev) => ({ ...prev, [current]: values }));
      setCurrent((prev) => prev + 1);
      form.resetFields();
    } catch (error) {
      console.log("Validation Failed:", error);
    }
  };

  // Revenir à l'étape précédente
  const prev = () => {
    setCurrent((prev) => prev - 1);
    form.setFieldsValue(stepValues[current - 1]);
  };

  // Gérer la soumission du formulaire à la dernière étape
  const onFinish = async (values: any) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simuler un délai

    const allStepValues = { ...stepValues, [current]: values };
    const allStepsFilled = steps.every((_, index) => allStepValues.hasOwnProperty(index));

    if (current === steps.length - 1) {
      if (allStepsFilled) {
        setFormData(allStepValues);
        setModalVisible(true);
      } else {
        message.error("Veuillez remplir toutes les étapes du formulaire.");
      }
    } else {
      setStepValues((prev) => ({ ...prev, [current]: values }));
      next();
    }

    setLoading(false);
  };

  // Gérer la génération du PDF
  const handleOk = async () => {
    if (formData) {
      // console.log(JSON.stringify(formData));
      
      try {
        const generatedPdf = await generatePDF(formData);
        setPdfDataUrl(generatedPdf);
        message.success("PDF généré avec succès !");
      } catch (error) {
        message.error("Erreur lors de la génération du PDF.");
      }
    }
  };

  // Télécharger le PDF généré
  const handleDownloadPDF = () => {
    if (pdfDataUrl) {
      const link = document.createElement("a");
      link.href = pdfDataUrl;
      link.download = "formulaire-skinmed.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      message.success("PDF téléchargé avec succès !");
      resetForm();
    } else {
      message.error("Le PDF n'est pas disponible pour le téléchargement.");
    }
  };

  // Réinitialiser le formulaire après téléchargement
  const resetForm = () => {
    form.resetFields();
    setStepValues({});
    setCurrent(0);
    setModalVisible(false);
    setPdfDataUrl(null);
  };

  return (
    <div>
      <Steps current={current} style={{ marginBottom: 20 }}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: "90%", margin: "20px auto" }}
      >
        {steps[current].component}

        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Précédent
            </Button>
          )}
          <Button type="primary" htmlType="submit" loading={loading}>
            {current === steps.length - 1 ? "Soumettre" : "Suivant"}
          </Button>
        </div>
      </Form>

      <Modal
        title="Aperçu du PDF"
        open={modalVisible}
        onCancel={resetForm}
        footer={[
          <Button key="back" onClick={resetForm}>
            Annuler
          </Button>,
          <Button
            key="generate"
            type="primary"
            onClick={handleOk}
            disabled={!!pdfDataUrl}
          >
            Générer PDF
          </Button>,
          <Button
            key="download"
            type="primary"
            onClick={handleDownloadPDF}
            disabled={!pdfDataUrl}
          >
            Télécharger PDF
          </Button>,
        ]}
        width={900}
      >
        {pdfDataUrl ? (
          <iframe
            ref={pdfRef}
            src={pdfDataUrl}
            width="100%"
            height="500px"
            title="Aperçu du PDF"
          />
        ) : (
          <p>Êtes-vous sûr de vouloir générer un PDF avec les données du formulaire ?</p>
        )}
      </Modal>
    </div>
  );
};

export default MultiStepForm;
