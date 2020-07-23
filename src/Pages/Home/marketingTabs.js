import React from 'react';
import axios from 'axios';
import useApp from '../../core/useApp';
import { Button, Divider, Typography } from 'antd';
import { baseURL, apiConfig, initialState, getFormattedDate } from './config';
import StatisticItem from './statisticItem';
import { FcFinePrint } from "react-icons/fc";

const { Text } = Typography;

const AsyncLoader = () => {
  return (
    <div className="async-wrapper">
      <div className="triforce" />
    </div>
  )
}

const Covid19Section = ({ styles }) => {
  const [state, setState] = React.useState({...initialState});

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      const COVID_API = "https://covid-19-tracking.p.rapidapi.com/v1";
      try {
        axios.get(COVID_API, {
          headers: {
            "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
            "x-rapidapi-key": "cc21ce830emsh3208fce7208ed7ep141090jsn229088062263"
          },
          cancelToken: source.token
        })
        .then(({ data }) => {
          const [world, usa] = data;
          setState(prevState => ({ ...prevState, covidData : data, world, usa }));
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled, there was an error', error);
          setState(prevState => ({ ...prevState, error : error}))
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, []);

  const { world, usa } = state

  if (!state.covidData.length) return <AsyncLoader />

  return (
    <>
      <div className="last-updated">
        Last Updated: {getFormattedDate()}
      </div>
      <div className="covid-wrapper">
        <StatisticItem styles={styles} dataItem={world} />
        <StatisticItem styles={styles} dataItem={usa} />
      </div>
      <StopTheSpread styles={styles} />
    </>
  )
};

const StopTheSpread = ({ styles }) => {
  const { toggleHelpModal } = useApp();
  const { color } = styles;
  const shouldGhost = color !== 'inherit' ? true : false;
  const customStyles = {
    iconBig : {
      fontSize : '2.5rem'
    },
    smPadding : {
      padding : '0.5em'
    }
  };
  return (
    <div className="stop-wrapper">
      <div>
        <FcFinePrint style={customStyles.iconBig} />
      </div>
      <div style={customStyles.smPadding}>
        <Text code style={styles}>How to help</Text>
      </div>
      <div>
        <Button onClick={toggleHelpModal} type={shouldGhost ? 'secondary' : 'primary'}  ghost={shouldGhost} shape="round">
          Stop the Spread
        </Button>
      </div>
    </div>
  );
};

export default function MarketingTabs({ styleColor }){
  const { color } = styleColor;
  const fontStyle = { color };
  return (
    <>
      <Divider orientation="right">
        <div style={fontStyle}>
          🦠Latest Covid-19 Data
        </div>
      </Divider>
      <Covid19Section styles={fontStyle} />
    </>
  );
};
