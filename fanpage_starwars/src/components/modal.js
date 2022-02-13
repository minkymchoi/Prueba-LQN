import { Row, Modal, Col, Divider, Tag } from 'antd';

const CharacterModal = ({isShow, setIsShowModal}) => {
  const handleOk = () => {
    setIsShowModal(false)
  };

  return (
    <Modal
      title="Perfil"
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
            disabled>
          </input>
        </div>
        </Col>
      </Row>
      <Divider orientation="left">Películas</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            <Tag color="red" className='h3 text-danger'>red</Tag>
            <Tag color="volcano" className='h3 text-warning'>volcano</Tag>
            <Tag color="lime" className='h3 text-yellow'>lime</Tag>
            <Tag color="green" className='h3 text-success'>green</Tag>
            <Tag color="cyan" className='h3 text-info'>cyan</Tag>
            <Tag color="blue" className='h3 text-primary'>blue</Tag>
            <Tag color="geekblue" className='h3 text-purple'>geekblue</Tag>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Especies</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            <Tag color="red" className='h3 text-danger'>red</Tag>
            <Tag color="volcano" className='h3 text-warning'>volcano</Tag>
            <Tag color="lime" className='h3 text-yellow'>lime</Tag>
            <Tag color="green" className='h3 text-success'>green</Tag>
            <Tag color="cyan" className='h3 text-info'>cyan</Tag>
            <Tag color="blue" className='h3 text-primary'>blue</Tag>
            <Tag color="geekblue" className='h3 text-purple'>geekblue</Tag>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Naves estelares</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            <Tag color="red" className='h3 text-danger'>red</Tag>
            <Tag color="volcano" className='h3 text-warning'>volcano</Tag>
            <Tag color="lime" className='h3 text-yellow'>lime</Tag>
            <Tag color="green" className='h3 text-success'>green</Tag>
            <Tag color="cyan" className='h3 text-info'>cyan</Tag>
            <Tag color="blue" className='h3 text-primary'>blue</Tag>
            <Tag color="geekblue" className='h3 text-purple'>geekblue</Tag>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Vehículos</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <div>
            <Tag color="red" className='h3 text-danger'>red</Tag>
            <Tag color="volcano" className='h3 text-warning'>volcano</Tag>
            <Tag color="lime" className='h3 text-yellow'>lime</Tag>
            <Tag color="green" className='h3 text-success'>green</Tag>
            <Tag color="cyan" className='h3 text-info'>cyan</Tag>
            <Tag color="blue" className='h3 text-primary'>blue</Tag>
            <Tag color="geekblue" className='h3 text-purple'>geekblue</Tag>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default CharacterModal