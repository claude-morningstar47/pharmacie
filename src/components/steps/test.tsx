// import React, { useState } from "react";
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
//     annee3_25: 0,
//     annee3_30: 9,
//     annee4_20: 3,
//     annee4_25: 0,
//     annee4_30: 9,
//     annee5_20: 3,
//     annee5_25: 0,
//     annee5_30: 9,
//   },
//   {
//     key: "2",
//     annee2_20: 3,
//     annee2_25: 2,
//     annee2_30: 0,
//     annee3_20: 3,
//     annee3_25: 0,
//     annee3_30: 9,
//     annee4_20: 3,
//     annee4_25: 0,
//     annee4_30: 9,
//     annee5_20: 3,
//     annee5_25: 0,
//     annee5_30: 9,
//   },
// ];

// // Calculer les totaux pour chaque colonne
// const totalRow = {
//   key: "total",
//   annee2_20: initialData.reduce((acc, curr) => acc + (curr.annee2_20 || 0), 0),
//   annee2_25: initialData.reduce((acc, curr) => acc + (curr.annee2_25 || 0), 0),
//   annee2_30: initialData.reduce((acc, curr) => acc + (curr.annee2_30 || 0), 0),
//   annee3_20: initialData.reduce((acc, curr) => acc + (curr.annee3_20 || 0), 0),
//   annee3_25: initialData.reduce((acc, curr) => acc + (curr.annee3_25 || 0), 0),
//   annee3_30: initialData.reduce((acc, curr) => acc + (curr.annee3_30 || 0), 0),

//   annee4_20: initialData.reduce((acc, curr) => acc + (curr.annee4_20 || 0), 0),
//   annee4_25: initialData.reduce((acc, curr) => acc + (curr.annee4_25 || 0), 0),
//   annee4_30: initialData.reduce((acc, curr) => acc + (curr.annee4_30 || 0), 0),
//   annee5_20: initialData.reduce((acc, curr) => acc + (curr.annee5_20 || 0), 0),
//   annee5_25: initialData.reduce((acc, curr) => acc + (curr.annee5_25 || 0), 0),
//   annee5_30: initialData.reduce((acc, curr) => acc + (curr.annee5_30 || 0), 0),
// };

// const data = [...initialData, totalRow];

// const columns: ColumnsType<DataItem> = [
//   {
//     title: <Text style={{ color: "#ffa726" }}>1ère année</Text>,
//     children: [
//       {
//         title: " ",
//         dataIndex: "annee1",
//         key: "annee1",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//     ],
//   },
//   {
//     title: <Text style={{ color: "#29b6f6" }}>2ème année</Text>,
//     children: [
//       {
//         title: "20%",
//         dataIndex: "annee2_20",
//         key: "annee2_20",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "25%",
//         dataIndex: "annee2_25",
//         key: "annee2_25",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "30%",
//         dataIndex: "annee2_30",
//         key: "annee2_30",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//     ],
//   },
//   {
//     title: <Text style={{ color: "#29b6f6" }}>3ème année</Text>,
//     children: [
//       {
//         title: "20%",
//         dataIndex: "annee3_20",
//         key: "annee3_20",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "25%",
//         dataIndex: "annee3_25",
//         key: "annee3_25",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "30%",
//         dataIndex: "annee3_30",
//         key: "annee3_30",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//     ],
//   },
//   {
//     title: <Text style={{ color: "#29b6f6" }}>4ème année</Text>,
//     children: [
//       {
//         title: "20%",
//         dataIndex: "annee4_20",
//         key: "annee4_20",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "25%",
//         dataIndex: "annee4_25",
//         key: "annee4_25",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "30%",
//         dataIndex: "annee4_30",
//         key: "annee4_30",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//     ],
//   },
//   {
//     title: <Text style={{ color: "#29b6f6" }}>5ème année</Text>,
//     children: [
//       {
//         title: "20%",
//         dataIndex: "annee5_20",
//         key: "annee5_20",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "25%",
//         dataIndex: "annee5_25",
//         key: "annee5_25",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//       {
//         title: "30%",
//         dataIndex: "annee5_30",
//         key: "annee5_30",
//         align: "center",
//         render: (text: string) => <Text>{text}</Text>,
//       },
//     ],
//   },
// ];

// const CalculTable: React.FC = () => {
//   const [inputValues, setInputValues] = useState({
//     input1: "",
//     input2: "",
//     input3: "",
//     input4: "",
//     input5: "",
//   });

//   const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [key]: e.target.value,
//     }));
//   };

//   return (
//     <Row gutter={24}>
//       <Col span={3}>
//         <div style={{ marginBottom: 16 }}>
//           <Text strong>Input 1:</Text>
//           <Input
//             value={inputValues.input1}
//             onChange={handleInputChange('input1')}
//             style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
//           />
//         </div>
//         <div style={{ marginBottom: 16 }}>
//           <Text strong>Input 2:</Text>
//           <Input
//             value={inputValues.input2}
//             onChange={handleInputChange('input2')}
//             style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
//           />
//         </div>
//         <div style={{ marginBottom: 16 }}>
//           <Text strong>Input 3:</Text>
//           <Input
//             value={inputValues.input3}
//             onChange={handleInputChange('input3')}
//             style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
//           />
//         </div>
//         <div style={{ marginBottom: 16 }}>
//           <Text strong>Input 4:</Text>
//           <Input
//             value={inputValues.input4}
//             onChange={handleInputChange('input4')}
//             style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
//           />
//         </div>
//         <div style={{ marginBottom: 16 }}>
//           <Text strong>Input 5:</Text>
//           <Input
//             value={inputValues.input5}
//             onChange={handleInputChange('input5')}
//             style={{ width: "100%", textAlign: "center" }}
//           />
//         </div>
//       </Col>
//       <Col span={20}>
//         <Table
//           dataSource={data}
//           columns={columns}
//           pagination={false}
//           bordered
//           scroll={{ x: 1000 }}
//         />
//       </Col>
//     </Row>
//   );
// };

// export default CalculTable;

import React, { useState, useMemo } from "react";
import { Input, Row, Col, Typography, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Text } = Typography;

// ... Définitions des interfaces et des données initiales inchangées ...
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

const initialData: DataItem[] = [
  {
    key: "1",
    annee1: 2,

    annee2_20: 3,
    annee2_25: 0,
    annee2_30: 9,

    annee3_20: 3,
    annee3_25: 0,
    annee3_30: 9,

    annee4_20: 3,
    annee4_25: 0,
    annee4_30: 9,

    annee5_20: 3,
    annee5_25: 0,
    annee5_30: 9,
  },
  {
    key: "2",

    annee2_20: 3,
    annee2_25: 2,
    annee2_30: 0,

    annee3_20: 3,
    annee3_25: 0,
    annee3_30: 9,

    annee4_20: 3,
    annee4_25: 0,
    annee4_30: 9,

    annee5_20: 3,
    annee5_25: 0,
    annee5_30: 9,
  },
];

const CalculTable: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  // Utilisation de useMemo pour optimiser le calcul des totaux
  const totalRow = useMemo(
    () => ({
      key: "total",
      ...Object.fromEntries(
        Object.keys(initialData[0])
          .filter((key) => key !== "key")
          .map((key) => [
            key,
            // initialData.reduce((acc, curr) => acc + (curr[key as keyof DataItem] || 0), 0),
            initialData.reduce(
              (acc, curr) => acc + (Number(curr[key as keyof DataItem]) || 0),
              0
            ),
          ])
      ),
      render: (text: string) => <Text style={{ color: "red" }}>{text}</Text>,

    }),
    []
  );

  const data = useMemo(() => [...initialData, totalRow], [totalRow]);

  // Création d'une fonction réutilisable pour les colonnes
  const createYearColumns = (
    year: number,
    color: string
  ): ColumnsType<DataItem>[number] => ({
    title: <Text style={{ color }}>{`${year}ème année`}</Text>,
    children: [20, 25, 30].map((percentage) => ({
      title: `${percentage}%`,
      dataIndex: `annee${year}_${percentage}`,
      key: `annee${year}_${percentage}`,
      align: "center" as const,
      render: (text: string) => <Text style={{color: 'black'}}>{text}</Text>,
    })),
  });

  const columns: ColumnsType<DataItem> = [
    {
      title: <Text style={{ color: "#ffa726" }}>1ère année</Text>,
      children: [
        {
          title: " ",
          dataIndex: "annee1",
          key: "annee1",
          align: "center",
          render: (text: string) => <Text>{text}</Text>,
        },
      ],
    },
    ...Array.from({ length: 4 }, (_, i) => createYearColumns(i + 2, "#29b6f6")),
  ];

  const dataTotal = [
    {
      total20: 39,
      total25: 78,
      total30: 87
    }
  ]
  const columnsTotal = [
    {
      title: <Text style={{color: "red"}}>Total sur 5 ans</Text>,
      children: [
        {
          title: "20%",
          dataIndex: "total20",
          align: "center" as const
        },
        {
          title: "25%",
          dataIndex: "total25",
          align: "center" as const

        },
        {
          title: "30%",
          dataIndex: "total30",
          align: "center" as const

        },
      ],
    },
  ];

  // Création d'une fonction réutilisable pour les inputs
  const renderInput = (label: string, key: string) => (
    <div style={{ marginBottom: 16 }}>
      <Text strong>{label}:</Text>
      <Input
        value={inputValues[key as keyof typeof inputValues]}
        // onChange={handleInputChange(key)}
        onChange={(e) => {
          handleInputChange(key)(e);
          console.log(`${label}: ${e.target.value}`);
        }}
        style={{ width: "100%", textAlign: "center", marginBottom: 8 }}
      />
    </div>
  );

  return (
    <Row gutter={24}>
      <Col span={3}>
        {/* <Title>NOMBRE DE DEPISTAGE MENSUEL</Title> */}
        {Array.from({ length: 5 }, (_, i) =>
          renderInput(`Année ${i + 1}`, `input${i + 1}`)
        )}
      </Col>
      <Col span={20}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          bordered
          scroll={{ x: 1000 }}
        />
      </Col>
      <Col span={12}>
        <Table columns={columnsTotal} dataSource={dataTotal} />
      </Col>
    </Row>
  );
};

export default CalculTable;
