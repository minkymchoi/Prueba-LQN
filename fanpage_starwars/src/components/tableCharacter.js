
import { Table, Button, Space, Input } from 'antd';
import React, { useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import CharacterModal from './modal';
import {
  useQuery
} from "@apollo/client";
import { ALL_PEOPLE } from '../getPeople'

const TableCharacter = () => {
  const [searchText, setSearchText] = React.useState('')
  const [searchedColumn, setSearchedColumn] = React.useState('')
  const [searchInput, setSearchInput] = React.useState('')
  const [isShowModal, setIsShowModal] = React.useState(false)
  const [people, setPeople] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])


  const {data, loading} = useQuery(ALL_PEOPLE)

  const parseData = () => {
    const edges = data.allPeople.edges
    let rows = []
    for (let index = 0; index < edges.length; index++) {
      const element = edges[index].node;
      let films = []
      const edgesFilms = element.filmConnection.edges
      for (let index = 0; index < edgesFilms.length; index++) {
        const element = edgesFilms[index].node;
        films.push(element.title)
      }
      let starships = []
      const edgesStarship = element.starshipConnection.edges
      for (let index = 0; index < edgesStarship.length; index++) {
        const element = edgesStarship[index].node;
        starships.push(element.name)
      }
      let vehicles = []
      const edgesVehicle = element.vehicleConnection.edges
      for (let index = 0; index < edgesVehicle.length; index++) {
        const element = edgesVehicle[index].node;
        vehicles.push(element.name)
      }
      rows.push({
        key: element.id,
        name: element.name,
        hairColor: element.hairColor,
        birthYear: element.birthYear,
        gender: element.gender,
        height: element.height,
        mass: element.mass,
        eyeColor: element.eyeColor,
        homeWorld: element.homeworld.name,
        films: films,
        starships: starships,
        vehicles: vehicles
      })
    }
    setDataTable(rows)
  }
  useEffect(() => {
    if (data && data.allPeople) {
      parseData()
    }
  }, [data])

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
          <Button type="primary" onClick={() => {
            setIsShowModal(true)
            setPeople(record)
          }}>
            Ver detalle
          </Button>
        </Space>
      ),
    },
  ];
  if (loading) {
    return (<p>loading</p>)
  }
  return (
    <div className='black-background pt-5'>
      <div className='container'>
        <Table className='align-items-center'responsive columns={columns} dataSource={dataTable}></Table>
      </div>
      <CharacterModal isShow={isShowModal} setIsShowModal={setIsShowModal} people={people} />
    </div>
  )
}
export default TableCharacter