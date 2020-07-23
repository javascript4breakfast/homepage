import React from 'react';
import { Divider, Statistic, Row, Col, Typography, Space } from 'antd';
const emojiMap = {
  'World' : '🌎',
  'USA'   : '🇺🇸'
};

import { FcLineChart, FcBullish, FcCalculator, FcApprove, FcBadDecision } from "react-icons/fc";
const { Text } = Typography;

export default function StatisticItem(props) {
  const countryText = props.dataItem['Country_text'];

  return (
    <div className="row-wrapper">
      <Text code style={props.styles}>
        <span>{emojiMap[countryText]}{` `}</span>
        {countryText}
      </Text>
      <Row gutter={16}>
        <Col md={12} sm={24}>
          <Statistic
            valueStyle={props.styles}
            title={<div style={props.styles}>Active</div>}
            value={props.dataItem['Active Cases_text']}
            prefix={<FcLineChart />}
          />
        </Col>
        <Col md={12} sm={24}>
          <Statistic
            valueStyle={props.styles}
            title={<div style={props.styles}>New</div>}
            value={props.dataItem['New Cases_text']}
            prefix={<FcBullish />}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={12} sm={24}>
          <Statistic
            valueStyle={props.styles}
            title={<div style={props.styles}>Total</div>}
            value={props.dataItem['Total Cases_text']}
            prefix={<FcCalculator />}
          />
        </Col>
        <Col md={12} sm={24}>
          <Statistic
            valueStyle={props.styles}
            title={<div style={props.styles}>Recovered</div>}
            value={props.dataItem['Total Recovered_text']}
            prefix={<FcApprove />}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Statistic
            valueStyle={props.styles}
            title={<div style={props.styles}>Deaths</div>}
            value={props.dataItem['Total Deaths_text']}
            prefix={<FcBadDecision />}
          />
        </Col>
      </Row>
    </div>
  );
};
