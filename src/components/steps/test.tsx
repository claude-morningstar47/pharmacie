// import React, { useState, useMemo } from "react";
// import { Input, Row, Col, Typography, Table } from "antd";
// import type { ColumnsType } from "antd/es/table";

// const { Text } = Typography;

// interface DataItem {
//   key: string;
//   annee1?: number;
//   annee2_20?: number;
//   annee2_25?: number;
//   annee2_30?: number;
//   annee3_20?: number;
//   annee3_25?: number;
//   annee3_30?: number;
//   annee4_20?: number;
//   annee4_25?: number;
//   annee4_30?: number;
//   annee5_20?: number;
//   annee5_25?: number;
//   annee5_30?: number;
// }

// const initialData: DataItem[] = [
//   {
//     key: "1",
//     annee1: 2,

//     annee2_20: 3,
//     annee2_25: 0,
//     annee2_30: 9,

//     annee3_20: 3,
//     annee3_25: 5,
//     annee3_30: 9,

//     annee4_20: 3,
//     annee4_25: 0,
//     annee4_30: 9,

//     annee5_20: 3,
//     annee5_25: 4,
//     annee5_30: 9,
//   },
//   {
//     key: "2",

//     annee2_20: 3,
//     annee2_25: 2,
//     annee2_30: 4,

//     annee3_20: 3,
//     annee3_25: 4,
//     annee3_30: 9,

//     annee4_20: 3,
//     annee4_25: 9,
//     annee4_30: 9,

//     annee5_20: 3,
//     annee5_25: 6,
//     annee5_30: 9,
//   },
// ];

// const DepistageTable: React.FC = () => {
//   const [inputValues, setInputValues] = useState({
//     input1: "",
//     input2: "",
//     input3: "",
//     input4: "",
//     input5: "",
//   });

//   const handleInputChange =
//     (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValues((prev) => ({ ...prev, [key]: e.target.value }));
//     };

//   // Utilisation de useMemo pour optimiser le calcul des totaux
//   const totalRow = useMemo(
//     () => ({
//       key: "total",
//       ...Object.fromEntries(
//         Object.keys(initialData[0])
//           .filter((key) => key !== "key")
//           .map((key) => [
//             key,
//             // initialData.reduce((acc, curr) => acc + (curr[key as keyof DataItem] || 0), 0),
//             initialData.reduce(
//               (acc, curr) => acc + (Number(curr[key as keyof DataItem]) || 0),
//               0
//             ),
//           ])
//       ),
//     }),
//     []
//   );

//   // const totalDataRow = useMemo(() => {
//   //   const total20 = initialData.reduce((sum, item) => {
//   //     return (
//   //       sum +
//   //       // (item.annee1 || 0) + // Ajoute annee1
//   //       (item.annee2_20 || 0) +
//   //       (item.annee3_20 || 0) +
//   //       (item.annee4_20 || 0) +
//   //       (item.annee5_20 || 0)
//   //     );
//   //   }, 0);

//   //   const total25 = initialData.reduce((sum, item) => {
//   //     return (
//   //       sum +
//   //       // (item.annee1 || 0) + // Ajoute annee1
//   //       (item.annee2_25 || 0) +
//   //       (item.annee3_25 || 0) +
//   //       (item.annee4_25 || 0) +
//   //       (item.annee5_25 || 0)
//   //     );
//   //   }, 0);

//   //   const total30 = initialData.reduce((sum, item) => {
//   //     return (
//   //       sum +
//   //       // (item.annee1 || 0) + // Ajoute annee1
//   //       (item.annee2_30 || 0) +
//   //       (item.annee3_30 || 0) +
//   //       (item.annee4_30 || 0) +
//   //       (item.annee5_30 || 0)
//   //     );
//   //   }, 0);

//   //   const totalMois20 = total20 / 60
//   //   const totalMois25 = total25 / 60
//   //   const totalMois30 = total30 / 60

//   //   return {
//   //     key: "Mensuel",
//   //     total20,
//   //     totalMois20,
//   //     total25,
//   //     totalMois25,
//   //     total30,
//   //     totalMois30
//   //   };
//   // }, []);

//   // Mettez à jour dataTotal pour utiliser totalDataRow
//   // const dataTotal = useMemo(() => [totalDataRow], [totalDataRow]);

//   const data = useMemo(() => [...initialData, totalRow], [totalRow]);

//   // Création d'une fonction réutilisable pour les colonnes
//   const createYearColumns = (
//     year: number,
//     color: string
//   ): ColumnsType<DataItem>[number] => ({
//     title: <Text style={{ color }}>{`${year}ème année`}</Text>,
//     children: [20, 25, 30].map((percentage) => ({
//       title: `${percentage}%`,
//       dataIndex: `annee${year}_${percentage}`,
//       key: `annee${year}_${percentage}`,
//       align: "center" as const,
//       render: (text: string) => <Text style={{ color: "black" }}>{text}</Text>,
//     })),
//   });

//   const columns: ColumnsType<DataItem> = [
//     {
//       title: <Text style={{ color: "#ffa726" }}>1ère année</Text>,
//       children: [
//         {
//           title: " ",
//           dataIndex: "annee1",
//           key: "annee1",
//           align: "center",
//           render: (text: string) => <Text>{text}</Text>,
//         },
//       ],
//     },
//     ...Array.from({ length: 4 }, (_, i) => createYearColumns(i + 2, "#29b6f6")),
//   ];

//   // const columnsTotal = [
//   //   {
//   //     title: <Text style={{ color: "red" }}>Total sur 5 ans</Text>,
//   //     children: [
//   //       {
//   //         title: "20%",
//   //         dataIndex: "total20",
//   //         align: "center" as const,
//   //       },
//   //       {
//   //         title: "25%",
//   //         dataIndex: "total25",
//   //         align: "center" as const,
//   //       },
//   //       {
//   //         title: "30%",
//   //         dataIndex: "total30",
//   //         align: "center" as const,
//   //       },
//   //     ],
//   //   },
//   // ];

//   // Création d'une fonction réutilisable pour les inputs
//   const renderInput = (label: string, key: string) => (
//     <div style={{ marginBottom: 16 }}>
//       <Text strong>{label}:</Text>
//       <Input
//         value={inputValues[key as keyof typeof inputValues]}
//         // onChange={handleInputChange(key)}
//         onChange={(e) => {
//           handleInputChange(key)(e);
//           console.log(`${label}: ${e.target.value}`);
//         }}
//         style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
//       />
//     </div>
//   );

//   return (
//     <Row gutter={24}>
//       <Col span={3}>
//         {/* <Title>NOMBRE DE DEPISTAGE MENSUEL</Title> */}
//         {Array.from({ length: 5 }, (_, i) =>
//           renderInput(`Année ${i + 1}`, `input${i + 1}`)
//         )}
//       </Col>
//       <Col span={20}>
//         <Table
//           dataSource={data}
//           columns={columns}
//           pagination={false}
//           bordered
//           scroll={{ x: 1000 }}
//           // rowClassName={() => "total-row"}

//         />
//       </Col>
//       {/* <Col span={12}>
//         <Table
//           columns={columnsTotal}
//           dataSource={dataTotal}
//           pagination={false}
//           bordered
//           rowClassName={() => "total-row"}
//         />
//       </Col> */}
//     </Row>
//   );
// };

// export default DepistageTable;

import React, { useState, useMemo } from "react";
import { Input, Row, Col, Typography, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";

const { Text } = Typography;

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

const DepistageTable: React.FC = () => {
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
      Number(annee1) + Number(annee2Total_20) + Number(annee3Total_20) + Number(annee4Total_20) + Number(annee5Total_20)
    ).toFixed(2);
    const totalAnnee25 = Number(
      Number(annee1) + Number(annee2Total_25) + Number(annee3Total_25) + Number(annee4Total_25) + Number(annee5Total_25)
    ).toFixed(2);
    const totalAnnee30 = Number(
      Number(annee1) + Number(annee2Total_30) + Number(annee3Total_30) + Number(annee4Total_30) + Number(annee5Total_30)
    ).toFixed(2);

    // Mensuel

    const mesuel20 = Number(Number(totalAnnee20) / 60).toFixed(2)
    const mesuel25 = Number(Number(totalAnnee25) / 60).toFixed(2)
    const mesuel30 = Number(Number(totalAnnee30) / 60).toFixed(2)

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
        mesuel30: mesuel30
      },
     
    ];
  };

  const data = useMemo(() => calculateData(), [inputValues]);

  console.log(data);
  

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
        key: "total",
        // title: "",
        total20: data[2]?.total20,
        total25: data[2]?.total25,
        total30: data[2]?.total30,
      },
      {
        // key: 2,
        // title: "Mensuel",
        total20: data[2]?.mesuel20,
        total25: data[2]?.mesuel25,
        total30: data[2]?.mesuel30,
      },
    ];
  }, [data]);
  return (
    <div>
      <Title>SIMULATION DE DEPISTAGE</Title>
      <Row gutter={26}>
        <Col span={3}>
          <Input
            placeholder="Input 1"
            type="number"
            onChange={handleInputChange("input1")}
          />

          <Input
            placeholder="Input 2"
            type="number"
            onChange={handleInputChange("input2")}
          />

          <Input
            placeholder="Input 3"
            type="number"
            onChange={handleInputChange("input3")}
          />

          <Input
            placeholder="Input 4"
            type="number"
            onChange={handleInputChange("input4")}
          />

          <Input
            placeholder="Input 5"
            type="number"
            onChange={handleInputChange("input5")}
          />
        </Col>
        <Col span={20}>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered
            size="small"
            style={{ marginTop: 16 }}
          />
        </Col>

        <Col span={8}>
          <Table
            columns={columnsTotal}
            dataSource={dataTotal}
            pagination={false}
            bordered
            rowClassName={() => "total-row"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DepistageTable;
