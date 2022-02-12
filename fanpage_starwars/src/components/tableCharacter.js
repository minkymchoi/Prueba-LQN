
import { Table, Button, Space, Card } from 'antd';
import React from 'react';

const TableCharacter = () => {

  const data = [
    {
      key: '1',
      name: 'John Brown',
      hairColor: 'Azul',
      birthYear: '10 de febrero',
      gender: 'Masculino',
      height: '160cm',
      mass: '80kg'

    },
  ];

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      responsive: ['xs', 'md'],
    },
    {
      title: 'Color de cabello',
      dataIndex: 'hairColor',
      key: 'hairColor',
      responsive: ['xs', 'md'],
    },
    {
      title: 'Fecha de cumpleaños',
      dataIndex: 'birthYear',
      key: 'birthYear',
      responsive: ['md'],
    },
    {
      title: 'Género',
      dataIndex: 'gender',
      key: 'gender',
      responsive: ['md'],
    },
    {
      title: 'Altura',
      dataIndex: 'height',
      key: 'height',
      responsive: ['md'],
    },
    {
      title: 'Peso',
      dataIndex: 'mass',
      key: 'mass',
      responsive: ['md'],
    },
    {
      title: 'Action',
      key: 'action',
      responsive: ['xs', 'md'],
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Ver detalle</Button>
        </Space>
      ),
    },
  ];
  return (
    <div className='black-background pt-5'>
      <div className='container'>
        <Table className='align-items-center'responsive columns={columns} dataSource={data}></Table>
      </div>
    </div>
  )
}
export default TableCharacter 