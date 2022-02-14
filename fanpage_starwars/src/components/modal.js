import { Row, Modal, Col, Divider, Tag } from 'antd';

const CharacterModal = ({isShow, setIsShowModal, people}) => {
  const handleOk = () => {
    setIsShowModal(false)
  };

  return (
    <Modal
      title={'perfil'}
      visible={isShow}
      onOk={handleOk}
      closable={false}
      cancelText={'Cerrar'}
      onCancel={handleOk}
      width={616}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Nombre'
            value={people.name}
            disabled>
          </input>
        </div>
        </Col>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Cumpleaños
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Cumpleaños'
            value={people.birthYear}
            disabled>
          </input>
        </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="form-control-label" span={12}>
          <div className='form-group'>
            <label className='form-control-label'>
              Color de cabello
            </label>
            <input
              type='text'
              className='form-control form-control-alternative'
              placeholder='Color de cabello'
              value={people.hairColor}
              disabled>
            </input>
          </div>
        </Col>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Color de ojos
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Color de ojos'
            value={people.eyeColor}
            disabled>
          </input>
        </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Altura
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Altura'
            value={people.height}
            disabled>
          </input>
        </div>
        </Col>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Peso
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Peso'
            value={people.mass}
            disabled>
          </input>
        </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Color de piel
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Color de piel'
            value={people.skinColor}
            disabled>
          </input>
        </div>
        </Col>
        <Col className="form-control-label" span={12}>
        <div className='form-group'>
          <label className='form-control-label'>
            Planeta
          </label>
          <input
            type='text'
            className='form-control form-control-alternative'
            placeholder='Planeta'
            value={people.homeWorld}
            disabled>
          </input>
        </div>
        </Col>
      </Row>
      <Divider orientation="left">Películas</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            {people.films.map((film, index) => (
            <Tag key={index} color="red" className='h3 text-danger'>{film}</Tag>
            ))}
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Naves estelares</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            {people.starships.map((starship, index) => (
              <Tag key={index} color="volcano" className='h3 text-warning'>{starship}</Tag>
            ))}
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Vehículos</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            {people.vehicles.map((vehicles, index) => (
              <Tag key={index} color="green" className='h3 text-success'>{vehicles}</Tag>
            ))}
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default CharacterModal