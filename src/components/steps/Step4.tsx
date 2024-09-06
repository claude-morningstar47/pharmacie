import React, { useState, useMemo, useEffect } from "react";
import { Input, Row, Col, Typography, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import FormItem from "antd/es/form/FormItem";

const { Text } = Typography;

interface Step4Props {
  form: any;
}
interface DataItem {
  key: string;
  annee1?: number;
  annee2_20?: number;
  annee2_25?: number;
  annee2_30?: number;
  annee3_20?: number;
  annee3_25?: number;
  annee3_30?: number;
  annee4_20?: number;
  annee4_25?: number;
  annee4_30?: number;
  annee5_20?: number;
  annee5_25?: number;
  annee5_30?: number;
}

const Step4: React.FC<Step4Props> = ({ form }) => {
  const [inputValues, setInputValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
  });

  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues((prev) => ({
        ...prev,
        [key]: Number(e.target.value) || 0,
      }));
    };

  // Calculate values based on inputs
  const calculateData = () => {
    const v = 0.8;
    const w = 0.75;
    const x = 0.7;

    // 1ère année
    const annee1 = (inputValues.input1 * 12).toFixed(2);
    // 2ème année
    const annee2Key1_20 = (Number(annee1) * v).toFixed(2);
    const annee2Key1_25 = (Number(annee1) * w).toFixed(2);
    const annee2Key1_30 = (Number(annee1) * x).toFixed(2);

    const annee2Key2_20 = (inputValues.input2 * 12).toFixed(2);
    const annee2Key2_25 = (inputValues.input2 * 12).toFixed(2);
    const annee2Key2_30 = (inputValues.input2 * 12).toFixed(2);

    const annee2Total_20 = (
      Number(annee2Key1_20) + Number(annee2Key2_20)
    ).toFixed(2);
    const annee2Total_25 = (
      Number(annee2Key1_25) + Number(annee2Key2_25)
    ).toFixed(2);
    const annee2Total_30 = (
      Number(annee2Key1_30) + Number(annee2Key2_30)
    ).toFixed(2);

    // 3ème année
    const annee3Key1_20 = (Number(annee2Total_20) * v).toFixed(2);
    const annee3Key1_25 = (Number(annee2Total_25) * w).toFixed(2);
    const annee3Key1_30 = (Number(annee2Total_30) * x).toFixed(2);

    const annee3Key2_20 = (inputValues.input3 * 12).toFixed(2);
    const annee3Key2_25 = (inputValues.input3 * 12).toFixed(2);
    const annee3Key2_30 = (inputValues.input3 * 12).toFixed(2);

    const annee3Total_20 = (
      Number(annee3Key1_20) + Number(annee3Key2_20)
    ).toFixed(2);
    const annee3Total_25 = (
      Number(annee3Key1_25) + Number(annee3Key2_25)
    ).toFixed(2);
    const annee3Total_30 = (
      Number(annee3Key1_30) + Number(annee3Key2_30)
    ).toFixed(2);

    // 4ème année
    const annee4Key1_20 = (Number(annee3Total_20) * v).toFixed(2);
    const annee4Key1_25 = (Number(annee3Total_25) * w).toFixed(2);
    const annee4Key1_30 = (Number(annee3Total_30) * x).toFixed(2);

    const annee4Key2_20 = (inputValues.input4 * 12).toFixed(2);
    const annee4Key2_25 = (inputValues.input4 * 12).toFixed(2);
    const annee4Key2_30 = (inputValues.input4 * 12).toFixed(2);

    const annee4Total_20 = (
      Number(annee4Key1_20) + Number(annee4Key2_20)
    ).toFixed(2);
    const annee4Total_25 = (
      Number(annee4Key1_25) + Number(annee4Key2_25)
    ).toFixed(2);
    const annee4Total_30 = (
      Number(annee4Key1_30) + Number(annee4Key2_30)
    ).toFixed(2);

    // 5ème année
    const annee5Key1_20 = (Number(annee4Total_20) * v).toFixed(2);
    const annee5Key1_25 = (Number(annee4Total_25) * w).toFixed(2);
    const annee5Key1_30 = (Number(annee4Total_30) * x).toFixed(2);

    const annee5Key2_20 = (inputValues.input5 * 12).toFixed(2);
    const annee5Key2_25 = (inputValues.input5 * 12).toFixed(2);
    const annee5Key2_30 = (inputValues.input5 * 12).toFixed(2);

    const annee5Total_20 = (
      Number(annee5Key1_20) + Number(annee5Key2_20)
    ).toFixed(2);
    const annee5Total_25 = (
      Number(annee5Key1_25) + Number(annee5Key2_25)
    ).toFixed(2);
    const annee5Total_30 = (
      Number(annee5Key1_30) + Number(annee5Key2_30)
    ).toFixed(2);

    // Total
    const totalAnnee20 = Number(
      Number(annee1) +
        Number(annee2Total_20) +
        Number(annee3Total_20) +
        Number(annee4Total_20) +
        Number(annee5Total_20)
    ).toFixed(2);
    const totalAnnee25 = Number(
      Number(annee1) +
        Number(annee2Total_25) +
        Number(annee3Total_25) +
        Number(annee4Total_25) +
        Number(annee5Total_25)
    ).toFixed(2);
    const totalAnnee30 = Number(
      Number(annee1) +
        Number(annee2Total_30) +
        Number(annee3Total_30) +
        Number(annee4Total_30) +
        Number(annee5Total_30)
    ).toFixed(2);

    // Mensuel
    const mesuel20 = Number(Number(totalAnnee20) / 60).toFixed(2);
    const mesuel25 = Number(Number(totalAnnee25) / 60).toFixed(2);
    const mesuel30 = Number(Number(totalAnnee30) / 60).toFixed(2);

    return [
      {
        key: "1",
        annee1: Number(annee1),
        annee2_20: Number(annee2Key1_20),
        annee2_25: Number(annee2Key1_25),
        annee2_30: Number(annee2Key1_30),

        annee3_20: Number(annee3Key1_20),
        annee3_25: Number(annee3Key1_25),
        annee3_30: Number(annee3Key1_30),

        annee4_20: Number(annee4Key1_20),
        annee4_25: Number(annee4Key1_25),
        annee4_30: Number(annee4Key1_30),

        annee5_20: Number(annee5Key1_20),
        annee5_25: Number(annee5Key1_25),
        annee5_30: Number(annee5Key1_30),
      },
      {
        key: "2",
        annee2_20: Number(annee2Key2_20),
        annee2_25: Number(annee2Key2_25),
        annee2_30: Number(annee2Key2_30),

        annee3_20: Number(annee3Key2_20),
        annee3_25: Number(annee3Key2_25),
        annee3_30: Number(annee3Key2_30),

        annee4_20: Number(annee4Key2_20),
        annee4_25: Number(annee4Key2_25),
        annee4_30: Number(annee4Key2_30),

        annee5_20: Number(annee5Key2_20),
        annee5_25: Number(annee5Key2_25),
        annee5_30: Number(annee5Key2_30),
      },
      {
        key: "total",
        annee2_20: Number(annee2Total_20),
        annee2_25: Number(annee2Total_25),
        annee2_30: Number(annee2Total_30),

        annee3_20: Number(annee3Total_20),
        annee3_25: Number(annee3Total_25),
        annee3_30: Number(annee3Total_30),

        annee4_20: Number(annee4Total_20),
        annee4_25: Number(annee4Total_25),
        annee4_30: Number(annee4Total_30),

        annee5_20: Number(annee5Total_20),
        annee5_25: Number(annee5Total_25),
        annee5_30: Number(annee5Total_30),

        total20: totalAnnee20,
        total25: totalAnnee25,
        total30: totalAnnee30,

        mesuel20: mesuel20,
        mesuel25: mesuel25,
        mesuel30: mesuel30,
      },
    ];
  };

  const data = useMemo(() => calculateData(), [inputValues]);

  // Define columns explicitly
  const columns: ColumnsType<DataItem> = [
    {
      title: <Text style={{ color: "#ffa726" }}>1ère année</Text>,
      children: [
        {
          title: " ",
          dataIndex: "annee1",
          key: "annee1",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
      ],
    },
    {
      title: <Text style={{ color: "#29b6f6" }}>2ème année</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "annee2_20",
          key: "annee2_20",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "25%",
          dataIndex: "annee2_25",
          key: "annee2_25",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "30%",
          dataIndex: "annee2_30",
          key: "annee2_30",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
      ],
    },
    {
      title: <Text style={{ color: "#29b6f6" }}>3ème année</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "annee3_20",
          key: "annee3_20",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "25%",
          dataIndex: "annee3_25",
          key: "annee3_25",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "30%",
          dataIndex: "annee3_30",
          key: "annee3_30",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
      ],
    },
    {
      title: <Text style={{ color: "#29b6f6" }}>4ème année</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "annee4_20",
          key: "annee4_20",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "25%",
          dataIndex: "annee4_25",
          key: "annee4_25",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "30%",
          dataIndex: "annee4_30",
          key: "annee4_30",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
      ],
    },
    {
      title: <Text style={{ color: "#29b6f6" }}>5ème année</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "annee5_20",
          key: "annee5_20",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "25%",
          dataIndex: "annee5_25",
          key: "annee5_25",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
        {
          title: "30%",
          dataIndex: "annee5_30",
          key: "annee5_30",
          align: "center",
          render: (text: number) => <Text>{text}</Text>,
        },
      ],
    },
  ];

  const tableData = useMemo(() => {
    return [
      {
        key: "1",
        annee1: data[0]?.annee1,
        annee2_20: data[0]?.annee2_20,
        annee2_25: data[0]?.annee2_25,
        annee2_30: data[0]?.annee2_30,
        annee3_20: data[0]?.annee3_20,
        annee3_25: data[0]?.annee3_25,
        annee3_30: data[0]?.annee3_30,
        annee4_20: data[0]?.annee4_20,
        annee4_25: data[0]?.annee4_25,
        annee4_30: data[0]?.annee4_30,
        annee5_20: data[0]?.annee5_20,
        annee5_25: data[0]?.annee5_25,
        annee5_30: data[0]?.annee5_30,
      },
      {
        key: "2",
        annee2_20: data[1]?.annee2_20,
        annee2_25: data[1]?.annee2_25,
        annee2_30: data[1]?.annee2_30,
        annee3_20: data[1]?.annee3_20,
        annee3_25: data[1]?.annee3_25,
        annee3_30: data[1]?.annee3_30,
        annee4_20: data[1]?.annee4_20,
        annee4_25: data[1]?.annee4_25,
        annee4_30: data[1]?.annee4_30,
        annee5_20: data[1]?.annee5_20,
        annee5_25: data[1]?.annee5_25,
        annee5_30: data[1]?.annee5_30,
      },
      {
        key: "total",
        annee2_20: data[2]?.annee2_20,
        annee2_25: data[2]?.annee2_25,
        annee2_30: data[2]?.annee2_30,
        annee3_20: data[2]?.annee3_20,
        annee3_25: data[2]?.annee3_25,
        annee3_30: data[2]?.annee3_30,
        annee4_20: data[2]?.annee4_20,
        annee4_25: data[2]?.annee4_25,
        annee4_30: data[2]?.annee4_30,
        annee5_20: data[2]?.annee5_20,
        annee5_25: data[2]?.annee5_25,
        annee5_30: data[2]?.annee5_30,
      },
    ];
  }, [data]);

  const columnsTotal = [
    {
      title: <Text style={{ color: "red" }}>Total sur 5 ans</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "total20",
          align: "center" as const,
        },
        {
          title: "25%",
          dataIndex: "total25",
          align: "center" as const,
        },
        {
          title: "30%",
          dataIndex: "total30",
          align: "center" as const,
        },
      ],
    },
  ];

  const dataTotal = useMemo(() => {
    return [
      {
        key: "1",
        titre: "Total",
        total20: data[2]?.total20,
        total25: data[2]?.total25,
        total30: data[2]?.total30,
      },
      {
        key: "2",
        titre: "Mensuel",
        total20: data[2]?.mesuel20,
        total25: data[2]?.mesuel25,
        total30: data[2]?.mesuel30,
      },
    ];
  }, [data]);

  useEffect(() => {
    form.setFieldsValue({
      calculReel: tableData.map((item) => ({
        // Ajoutez ici les propriétés nécessaires de item
        annee1: item.annee1,
        annee2_20: item.annee2_20,
        annee2_25: item.annee2_25,
        annee2_30: item.annee2_30,
        annee3_20: item.annee3_20,
        annee3_25: item.annee3_25,
        annee3_30: item.annee3_30,
        annee4_20: item.annee4_20,
        annee4_25: item.annee4_25,
        annee4_30: item.annee4_30,
        annee5_20: item.annee5_20,
        annee5_25: item.annee5_25,
        annee5_30: item.annee5_30,
      })),
      totatData: dataTotal.map((item) => ({
        // Ajoutez ici les propriétés nécessaires de item
        total20: item.total20,
        total25: item.total25,
        total30: item.total30,

        mensuel20: dataTotal[1]?.total20,
        mensuel25: dataTotal[1]?.total25,
        mensuel30: dataTotal[1]?.total30,
      })),
    });
  }, [calculateData, inputValues]);

  return (
    <>
      <div>
        <FormItem label="Simulation">
          <Title>SIMULATION DE DEPISTAGE</Title>
          <Row gutter={32}>
            <Col span={3}>
              <Input
                placeholder="Année 1"
                type="number"
                onChange={handleInputChange("input1")}
              />

              <Input
                placeholder="Année 2"
                type="number"
                onChange={handleInputChange("input2")}
              />

              <Input
                placeholder="Année 3"
                type="number"
                onChange={handleInputChange("input3")}
              />

              <Input
                placeholder="Année 4"
                type="number"
                onChange={handleInputChange("input4")}
              />

              <Input
                placeholder="Année 5"
                type="number"
                onChange={handleInputChange("input5")}
              />
            </Col>
            <Col span={20}>
              <FormItem label="Table 1" name="calculReel">
                <Table
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                  bordered
                  size="small"
                  style={{ marginTop: 16 }}
                />
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem label="Table 2" name="totatData">
                <Table
                  columns={columnsTotal}
                  dataSource={dataTotal}
                  pagination={false}
                  bordered
                  rowClassName={() => "total-row"}
                />
              </FormItem>
            </Col>
          </Row>
        </FormItem>
      </div>
    </>
  );
};

export default Step4;
