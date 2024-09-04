import React from "react";
import { Col, Form, Input, Row } from "antd";

const { TextArea } = Input;

const { Item: FormItem } = Form;

interface Step1Props {
  form: any;
}

const Step1: React.FC<Step1Props> = ({ form }) => {
  return (
    <>
      <h1>Conditions de partenariat</h1>
      <Row gutter={24}>
        <Col span={8}>
          <FormItem
            label="Nom de la Pharmacie"
            name="nom-pharmacie"
            rules={[
              {
                required: true,
                message: "Veuillez entrer le nom de la pharmacie!",
              },
            ]}
          >
            <Input placeholder="Nom de la pharmacie" />
          </FormItem>
        </Col>

        <Col span={8}>
          <FormItem
            label="Adresse de la Pharmacie"
            name="adresse-pharmacie"
            rules={[
              {
                required: true,
                message: "Veuillez entrer l'adresse de la pharmacie!",
              },
            ]}
          >
            <Input placeholder="Adresse de la pharmacie" />
          </FormItem>
        </Col>
      </Row>

      <FormItem
        label="Avis du Pharmacien"
        name="avis"
        rules={[{ required: true, message: "Veuillez entrer votre avis!" }]}
      >
        <TextArea rows={4} placeholder="Entrez votre avis ici" />
      </FormItem>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem
            label="Etre referent"
            name="etre-referent"
            rules={[{ required: true, message: "Veuillez entrer votre avis!" }]}
          >
            <TextArea rows={4} placeholder="Entrez votre avis ici" />
          </FormItem>
        </Col>

        <Col span={12}>
          <FormItem
            label="Disposer d'un espace privé"
            name="espace-prive"
            rules={[{ required: true, message: "Veuillez entrer votre avis!" }]}
          >
            <TextArea rows={4} placeholder="Entrez votre avis ici" />
          </FormItem>
        </Col>
      </Row>
    </>
  );
};

export default Step1;
