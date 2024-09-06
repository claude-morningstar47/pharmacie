

import React from 'react';
// import { Form, Input } from 'antd';
import DepistageTable from './test';

// const { Item: FormItem } = Form;
// const { TextArea } = Input;

interface Step4Props {
  form: any;
}

const Step4: React.FC<Step4Props> = ({ form }) => {
  return (
    <>
      {/* <FormItem
        label="Calcul reel"
        name="calcul-reel"
        rules={[{ required: true, message: 'Veuillez entrer votre avis!' }]}
      >
        <TextArea rows={4} placeholder="Entrez votre avis ici" />



      </FormItem> */}


      {/* <CalculReelTable/> */}
      <DepistageTable/>
      
      
    </>
  );
};

export default Step4;
