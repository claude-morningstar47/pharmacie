import React, { useEffect, useState } from "react";
import { Col, Form, InputNumber, Row, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";

const { Text } = Typography;
const { Item: FormItem } = Form;

interface Step5Props {
  form: any;
}

const Step5: React.FC<Step5Props> = ({ form }) => {
  // État pour stocker les valeurs dynamiques
  const [depistage, setDepistage] = useState(602); // Valeur par défaut
  const [prixCreme, setPrixCreme] = useState(19); // Valeur par défaut
  const marge = (prixCreme * 0.26).toFixed(); // Marge 26%

  // Calcul dynamique des données de vente
  const venteData = [
    {
      key: "1",
      pourcentage: "2P/3 - 66%",
      totalPatients: (depistage * 0.66).toFixed(2), // Total patients 66%
      total: ((depistage * 0.66) * prixCreme).toFixed() + " €", // CA = total patients * prix crème
      net: ((depistage * 0.66) * prixCreme * 0.26).toFixed() + " €", // Net = total patients * marge
    },
    {
      key: "2",
      pourcentage: "1P/2 - 50%",
      totalPatients: (depistage * 0.50).toFixed(2), // Total patients 50%
      total: ((depistage * 0.50) * prixCreme).toFixed() + " €", // CA = total patients * prix crème
      net: ((depistage * 0.50) * prixCreme * 0.26).toFixed() + " €", // Net = total patients * marge
    },
    {
      key: "3",
      pourcentage: "1P/3 - 33%",
      totalPatients: (depistage * 0.33).toFixed(2), // Total patients 33%
      total: ((depistage * 0.33) * prixCreme).toFixed() + " €", // CA = total patients * prix crème
      net: ((depistage * 0.33) * prixCreme * 0.26).toFixed() + " €", // Net = total patients * marge
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

  useEffect(() => {
    // Met à jour les valeurs du formulaire avec les données de vente
    form.setFieldsValue({
      ventePoducts: venteData.map((item) => ({
        pourcentage: item.pourcentage,
        totalPatients: item.totalPatients,
        total: item.total,
        net: item.net,
        marge: marge
      }))
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depistage, prixCreme]); 

  return (
    <>
      <FormItem label="Vente Produit" name="ventePoducts">
        <Title>VENTE ADDITIONNELLE PRODUIT</Title>
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="Nombre de dépistage sur 5 ans">
              <InputNumber
              
                value={depistage}
                onChange={(value) => setDepistage(value || 0)}
                min={0}
                style={{ width: "100%" }}
              />
            </FormItem>
            <FormItem label="Prix de la crème">
              <InputNumber
                value={prixCreme}
                onChange={(value) => setPrixCreme(value || 0)}
                min={0}
                style={{ width: "100%" }}
                formatter={(value) => `€ ${value}`}
                // parser={(value) => value?.replace('€', '')}
              />
            </FormItem>
          </Col>

          <Col span={16}>
            <Table
              dataSource={venteData}
              columns={venteColumns}
              pagination={false}
              bordered
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>
                    <Text strong>Marge 26% : </Text> {marge} €
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />
          </Col>
        </Row>
      </FormItem>
    </>
  );
};

export default Step5;
