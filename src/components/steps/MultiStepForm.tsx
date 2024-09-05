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

  const steps = [
    {
      title: "Avis",
      key: 1,
      content: <Step1 form={form} />,
    },
    {
      title: "Potentiel",
      key: 2,
      content: <Step2 form={form} />,
    },
    {
      title: "Calcul Potentiel",
      key: 3,
      content: <Step3 form={form} />,
    },
    {
      title: "Simulation",
      key: 4,
      content: <Step4 form={form} />,
    },
    {
      title: "Simulation Crème",
      key: 5,
      content: <Step5 form={form} />,
    },
  ];

  // eslint-disable-next-line
  const next = () => {
    form
      .validateFields()
      .then((values) => {
        setStepValues((prev) => ({ ...prev, [current]: values }));
        setCurrent(current + 1);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
    form.setFieldsValue(stepValues[current - 1]);
  };

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), time);
    });
  };

  // const onFinish = async (values: any) => {
  //   setLoading(true);
  //   await waitTime(1000);

  //   if (current === steps.length - 1) {
  //     const allStepValues = { ...stepValues, [current]: values };

  //     // Check that each step has data
  //     const allStepsFilled = steps.every(step => allStepValues.hasOwnProperty(step.key - 1));

  //     if (allStepsFilled) {
  //       setFormData(allStepValues);
  //       console.log(allStepValues);

  //       setModalVisible(true); // Show confirmation modal
  //     } else {
  //       message.error("Veuillez remplir toutes les étapes du formulaire.");
  //     }
  //   } else {
  //     setStepValues((prev) => ({ ...prev, [current]: values }));
  //     setCurrent(current + 1);
  //     // next()
  //     form.resetFields();
  //   }

  //   setLoading(false);
  // };

  const onFinish = async (values: any) => {
    setLoading(true);
    await waitTime(1000);

    const allStepValues = { ...stepValues, [current]: values };

    // Vérification que chaque étape a des données
    const allStepsFilled = steps.every((step) =>
      allStepValues.hasOwnProperty(step.key - 1)
    );

    if (current === steps.length - 1) {
      if (allStepsFilled) {
        setFormData(allStepValues);
        console.log(allStepValues);
        setModalVisible(true); // Afficher la modal de confirmation
      } else {
        message.error("Veuillez remplir toutes les étapes du formulaire.");
      }
    } else {
      setStepValues((prev) => ({ ...prev, [current]: values }));
      setCurrent(current + 1);
      form.resetFields();
    }

    setLoading(false);
  };


const handleOk = async () => {
  if (formData) {      
    try {
      const pdfDataUrl = await generatePDF(formData);
      setPdfDataUrl(pdfDataUrl);
      message.success("PDF généré avec succès !");
      
      // Réinitialisation du formulaire après génération du PDF
      form.resetFields();
      // setStepValues({});
      // setCurrent(0);
      // setModalVisible(false);
      // setPdfDataUrl(null);
      // 
    } catch (error) {
      message.error("Échec de la génération du PDF.");
      console.error("PDF Generation Error:", error);
    }
  }
};

  const handleDownloadPDF = () => {
    if (pdfDataUrl) {
      const link = document.createElement("a");
      link.href = pdfDataUrl;
      link.download = "formulaire-skinmed.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      message.success("PDF téléchargé avec succès !");
      form.resetFields();
      setStepValues({});
      setCurrent(0);
      setModalVisible(false);
      setPdfDataUrl(null);
    } else {
      message.error("Le PDF n'est pas disponible pour le téléchargement.");
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setStepValues({});
    setModalVisible(false);
    setCurrent(0);
  };

  return (
    <div>
      <Steps current={current} style={{ marginBottom: 20 }}>
        {steps.map((item) => (
          <Step key={item.key} title={item.title} />
        ))}
      </Steps>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: "90%", margin: "20px auto" }}
      >
        {steps[current].content}
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={prev}>
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
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
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
          <p>
            Êtes-vous sûr de vouloir générer un PDF avec les données du
            formulaire ?
          </p>
        )}
      </Modal>
    </div>
  );
};

export default MultiStepForm;
