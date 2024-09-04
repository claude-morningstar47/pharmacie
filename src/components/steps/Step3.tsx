import React, { useState, useMemo, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  Node,
  Edge,
} from "react-flow-renderer";
import { Form, InputNumber, Row, Col, Typography } from "antd";

const { Title } = Typography;
const { Item: FormItem } = Form;

interface Step3Props {
  form: any;
}

const Step3: React.FC<Step3Props> = ({ form }) => {
  const [patients, setPatients] = useState<number>(5000);

  const calculateValues = useMemo(() => {
    const halfPatients = patients / 2;
    const noFollowUp = Math.round(halfPatients * 0.88);
    const appointments = Math.round(noFollowUp * 0.18);
    const riskWithoutFollowUp = noFollowUp - appointments;
    const onYear = parseFloat((riskWithoutFollowUp / 12).toFixed(2));
    const onFiveYear = parseFloat((onYear / 5).toFixed(2));

    return {
      patients,
      halfPatients,
      noFollowUp,
      appointments,
      riskWithoutFollowUp,
      onYear,
      onFiveYear,
    };
  }, [patients]);

  useEffect(() => {
    form.setFieldsValue({
      "calcul-potentiel": calculateValues,
    });
  }, [calculateValues, form]);

  const nodes: Node[] = [
    {
      id: "1",
      data: { label: `${patients} patients / an` },
      position: { x: 400, y: 0 },
      type: "input",
    },
    {
      id: "2",
      data: {
        label: `${calculateValues.halfPatients} devrait avoir un dépistage annuel`,
      },
      position: { x: 400, y: 80 },
    },
    {
      id: "3",
      data: {
        label: `88% n'ont pas de suivi annuel (${calculateValues.noFollowUp})`,
      },
      position: { x: 400, y: 160 },
    },
    {
      id: "4",
      data: {
        label: `18% pourront obtenir un rdv (${calculateValues.appointments})`,
      },
      position: { x: 150, y: 240 },
    },
    {
      id: "5",
      data: {
        label: `Personnes à risque sans suivi (${calculateValues.riskWithoutFollowUp})`,
      },
      position: { x: 600, y: 240 },
    },
    {
      id: "6",
      data: { label: `Sur 1 an : ${calculateValues.onYear} / mois` },
      position: { x: 200, y: 400 },
    },
    {
      id: "7",
      data: { label: `Sur 5 ans : ${calculateValues.onFiveYear} / mois` },
      position: { x: 550, y: 400 },
    },
  ];

  const edges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
    { id: "e3-5", source: "3", target: "5", type: "smoothstep" },
    { id: "e3-4", source: "3", target: "4", type: "smoothstep" },
    { id: "e5-6", source: "5", target: "6", type: "smoothstep" },
    { id: "e5-7", source: "6", target: "7", type: "smoothstep" },
  ];

  return (
    <FormItem label="Calcul Potentiel" name="calcul-potentiel">
      <div>
        <Title level={2}>CALCUL DU POTENTIEL DE DÉPISTAGE</Title>
        <div style={{ height: 550, padding: 30 }}>
          <Row style={{ marginBottom: 10 }}>
            <Col span={8}>
              <InputNumber
                // name=""
                min={0}
                value={patients}
                onChange={(value) => setPatients(value ?? 0)}
              />
              <span style={{ marginLeft: 10 }}>Patients / an</span>
            </Col>
          </Row>
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              style={{ background: "#f0f2f5" }}
              nodesDraggable={false}
              nodesConnectable={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
            >
              <Controls />
              <Background />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    </FormItem>
  );
};

export default Step3;
