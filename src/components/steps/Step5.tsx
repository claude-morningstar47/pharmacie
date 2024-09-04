import React from "react";
import { Col, Form, Row, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";

const { Text } = Typography;

const { Item: FormItem } = Form;

interface Step5Props {
  form: any;
}

const venteData = [
  {
    key: "1",
    pourcentage: "66%",
    totalPatients: "397,32",
    total: "7 549 €",
    net: "1 963 €",
  },
  {
    key: "2",
    pourcentage: "50%",
    totalPatients: "301",
    total: "5 719 €",
    net: "1 487 €",
  },
  {
    key: "3",
    pourcentage: "33%",
    totalPatients: "198,7",
    total: "3 775 €",
    net: "981 €",
  },
];

const venteColumns: ColumnsType<any> = [
  {
    title: <Text strong>POURCENTAGE</Text>,
    dataIndex: "pourcentage",
    key: "pourcentage",
    align: "center",
  },
  {
    title: <Text strong>TOTAL PATIENTS</Text>,
    dataIndex: "totalPatients",
    key: "totalPatients",
    align: "center",
  },
  {
    title: (
      <Text strong style={{ backgroundColor: "#ffee58", padding: "2px" }}>
        TOTAL
      </Text>
    ),
    dataIndex: "total",
    key: "total",
    align: "center",
  },
  {
    title: (
      <Text
        strong
        style={{ backgroundColor: "#66bb6a", color: "white", padding: "2px" }}
      >
        NET
      </Text>
    ),
    dataIndex: "net",
    key: "net",
    align: "center",
  },
];

const Step5: React.FC<Step5Props> = ({ form }) => {
  return (
    <>
      <FormItem label="test" name="test">
        <Title>VENTE ADDITIONNEL PRODUIT</Title>
        <Row gutter={24}>
          <Col span={3}>
            {/* {Array.from({ length: 5 }, (_, i) => renderInput(`Année ${i + 1}`, `input${i + 1}`))} */}
          </Col>
          <Col span={12}>
            <Table
              dataSource={venteData}
              columns={venteColumns}
              pagination={false}
              bordered
            />
          </Col>
        </Row>
      </FormItem>
    </>
  );
};

export default Step5;
