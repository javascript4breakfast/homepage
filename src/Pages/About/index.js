import React from 'react';
import { Row, Col, Typography } from 'antd';
import { FcElectronics } from "react-icons/fc";
import { AppContext } from '../../context';
import { styles } from '../Home/config';
import './about.css';
const { Title } = Typography;


export default function About(props) {
  const [state] = React.useContext(AppContext);
  const styleColor = state.theme === 'dark-mode' ? styles.dark : styles.light;

  return (
    <>
      <Title className="center-text" style={styleColor}>About</Title>
      <div className="about-wrapper">
        <div>
          <FcElectronics className="big-icon" />
        </div>
        <div>
          <Title code style={styleColor}>under-construction</Title>
        </div>
        <div>
          <FcElectronics className="big-icon" />
        </div>
      </div>
    </>
  );
};
