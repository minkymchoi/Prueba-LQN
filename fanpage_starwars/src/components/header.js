import { Col, Row } from 'antd';
import Header from '../assets/img/Title.jpeg';

const HeaderNav = () => {

  return (
    <div className='header-background col-img-6'>
        <div className='text-center'>
          <img src={Header} width="200" height="100" class="img-responsive center-block"/>
        </div>
    </div>
  )
};
  export default HeaderNav 

