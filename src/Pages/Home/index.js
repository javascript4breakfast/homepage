import React from 'react';
import { AppContext } from '../../context';
import Intro from './intro';
import MarketingTabs from './marketingTabs';
import HelpModal from '../../components/HelpModal';
import { styles } from './config';
import './home.css';

export default function Home(props) {
  const [state] = React.useContext(AppContext);
  const styleColor = state.theme === 'dark-mode' ? styles.dark : styles.light;

  return (
    <>
      <Intro styleColor={styleColor} />
      <MarketingTabs styleColor={styleColor} />
      <HelpModal />
    </>
  );
};
