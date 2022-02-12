
import { Table, Button, Space, Input } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';


const TableCharacter = () => {
  const [searchText, setSearchText] = React.useState('')
  const [searchedColumn, setSearchedColumn] = React.useState('')
  const [searchInput, setSearchInput] = React.useState('')
 
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            setSearchInput(node);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  }); 

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
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Color de cabello',
      dataIndex: 'hairColor',
      key: 'hairColor',
      responsive: ['xs', 'md'],
      ...getColumnSearchProps('hairColor'),
    },
    {
      title: 'Fecha de cumpleaños',
      dataIndex: 'birthYear',
      key: 'birthYear',
      responsive: ['md'],
      ...getColumnSearchProps('birthYear'),
    },
    {
      title: 'Género',
      dataIndex: 'gender',
      key: 'gender',
      responsive: ['md'],
      ...getColumnSearchProps('gender'),
    },
    {
      title: 'Altura',
      dataIndex: 'height',
      key: 'height',
      responsive: ['md'],
      ...getColumnSearchProps('height'),
    },
    {
      title: 'Peso',
      dataIndex: 'mass',
      key: 'mass',
      responsive: ['md'],
      ...getColumnSearchProps('mass'),
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