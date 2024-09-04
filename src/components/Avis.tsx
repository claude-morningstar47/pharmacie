import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function Avis() {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <h2>Conditions de partenariat</h2>
      <Form
        name="avisPharmacien"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 900, margin: '0 auto' }}
      >
        
        <Form.Item
          label="Nom de la Pharmacie"
          name="pharmacie"
          rules={[{ required: true, message: 'Veuillez entrer le nom de la pharmacie!' }]}
        >
          <Input placeholder="Nom de la pharmacie" />
        </Form.Item>

        <Form.Item
          label="Adresse"
          name="adresse"
          rules={[{ required: true, message: 'Veuillez entrer l\'adresse!' }]}
        >
          <Input placeholder="Adresse de la pharmacie" />
        </Form.Item>

        <Form.Item
          label="Avis"
          name="avis"
          rules={[{ required: true, message: 'Veuillez entrer votre avis!' }]}
        >
          <TextArea rows={4} placeholder="Entrez votre avis ici" />
        </Form.Item>

        <Form.Item
          label="Type"
          name="typeAvis"
          rules={[{ required: true, message: 'Veuillez sélectionner un type d\'avis!' }]}
        >
          <Select placeholder="Sélectionnez un type d'avis">
            <Option value="etre-referent">Etre referent</Option>
            <Option value="disposer-d-un-espace-prive">Disposer d'un espace privé</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Soumettre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Avis;
