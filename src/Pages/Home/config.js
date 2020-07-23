import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';

const getFormattedDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
};

const styles = {
  dark : {
    color : '#fff'
  },
  light :  {
    color : 'inherit'
  }
};

const baseURL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=United%20States';
const apiConfig = {
  headers : {
    'x-rapidapi-host' : 'covid-19-coronavirus-statistics.p.rapidapi.com',
    'x-rapidapi-key'  : 'cc21ce830emsh3208fce7208ed7ep141090jsn229088062263'
  }
};

const initialState = {
  covidData : [],
  error     : null,
  world     : {},
  usa       : {},
  search    : []
};

const socialMedia = [
  {
    medium : 'LinkedIn',
    link   : 'https://linkedin.com/in/jonathanortiz31',
    icon   : <LinkedinOutlined />
  },
  {
    medium : 'GitHub',
    link   : 'https://github.com/javascript4breakfast',
    icon   : <GithubOutlined />
  }
];

const descriptionText = `Full Stack Software Engineer with more than five years of professional experience designing enterprise software applications for
various business and consumer needs. Detail oriented team player who stays abreast of emerging javascript technology trends specifically in
React, ReactRouter and Node.js ecosystem. Skilled at efficiently resolving project issues and meeting deadlines.`;


export {
  initialState,
  descriptionText,
  styles,
  socialMedia,
  baseURL,
  apiConfig,
  getFormattedDate
};
