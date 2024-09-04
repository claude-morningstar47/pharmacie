import React from 'react';
import { Table, Typography } from 'antd';

const { Title, Text } = Typography;

interface DataType {
  key: string;
  ca: string;
  zone?: string
  euroPerClient: string;
  monthlyFlow: string;
  yearlyClients: string;
}

const columns = [
  {
    title: 'Zone',
    dataIndex: 'zone',
    key: 'zone',
    render: (zone: string) => ({
      children: <Text style={{ fontWeight: 'bold', color: zone === 'ZONE RURALE' ? '#009688' : '#FF9800' }}>{zone}</Text>,
      props: {
        colSpan: zone === '' ? 0 : 1,
      },
    }),
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#E0F7FA', // Light Cyan for "Zone" column header
        color: '#006064', // Dark Cyan text
        fontWeight: 'bold',
      },
    }),
  },
  {
    title: 'CA',
    dataIndex: 'ca',
    key: 'ca',
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#FFECB3', // Light Yellow for "CA" column header
        color: '#FF6F00', // Dark Amber text
        fontWeight: 'bold',
      },
    }),
  },
  {
    title: '€ par client',
    dataIndex: 'euroPerClient',
    key: 'euroPerClient',
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#FFECB3', // Light Yellow for "€ par client" column header
        color: '#FF6F00', // Dark Amber text
        fontWeight: 'bold',
      },
    }),
  },
  {
    title: 'Affluence mensuelle',
    dataIndex: 'monthlyFlow',
    key: 'monthlyFlow',
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#FFECB3', // Light Yellow for "Affluence mensuelle" column header
        color: '#FF6F00', // Dark Amber text
        fontWeight: 'bold',
      },
    }),
  },
  {
    title: 'Clients / an',
    dataIndex: 'yearlyClients',
    key: 'yearlyClients',
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#FFECB3', // Light Yellow for "Clients / an" column header
        color: '#FF6F00', // Dark Amber text
        fontWeight: 'bold',
      },
    }),
  },
];

const data: DataType[] = [
  {
    key: '1',
    zone: 'ZONE RURALE',
    ca: '≤ 1,3 M€',
    euroPerClient: '37,69 €',
    monthlyFlow: '1.832',
    yearlyClients: '2.930 à 3.850',
  },
  {
    key: '2',
    // zone: '',
    ca: '1,3- à 2,6 M€',
    euroPerClient: '53,55 €',
    monthlyFlow: '3.507',
    yearlyClients: '5.610 à 7.364',
  },
  {
    key: '3',
    // zone: '',
    ca: '2,6 à 3,9 M€',
    euroPerClient: '50,41 €',
    monthlyFlow: '6.662',
    yearlyClients: '10.660 à 13.990',
  },
  {
    key: '4',
    // zone: '',
    ca: '≥ 3,9 M€',
    euroPerClient: '-',
    monthlyFlow: '-',
    yearlyClients: '-',
  },
  {
    key: '5',
    zone: 'ZONE URBAINE',
    ca: '≤ 1,3 M€',
    euroPerClient: '43,33 €',
    monthlyFlow: '2.030',
    yearlyClients: '3.248 à 4.260',
  },
  {
    key: '6',
    // zone: '',
    ca: '1,3 à 2,6 M€',
    euroPerClient: '45,95 €',
    monthlyFlow: '3.363',
    yearlyClients: '5.380 à 7.060',
  },
  {
    key: '7',
    // zone: '',
    ca: '2,6 à 3,9 M€',
    euroPerClient: '39,50 €',
    monthlyFlow: '5.718',
    yearlyClients: '9.150 à 12.000',
  },
  {
    key: '8',
    // zone: '',
    ca: '≥ 3,9 M€',
    euroPerClient: '34,46 €',
    monthlyFlow: '12.620',
    yearlyClients: '20.190 à 26.500',
  },
];

const PharmacyPotentialTable: React.FC = () => {
  return (
    <div>
      <Title level={2}>POTENTIEL DE DÉPISTAGE D’UNE PHARMACIE</Title>
      <Text italic>*source pharm’exco - 2020</Text>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        rowClassName={(record, index) =>
          index === 3 || index === 7 ? 'highlight-row' : ''
        }
      />
    </div>
  );
};

export default PharmacyPotentialTable;
