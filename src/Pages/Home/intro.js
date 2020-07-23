import React from 'react';
import { styles, socialMedia, descriptionText } from './config';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {socialMedia.map((item, index) => (
        <div key={index}>
          <a target="__blank" href={item.link}>{item.icon}</a>
        </div>
      ))}
    </div>
  );
};

const DescriptionLeft = props => {
  return (
    <div className="box-items">
      <div>
        <h1 style={props.styleColor}>Jonathan Ortiz</h1>
        <p>Software Engineer</p>
        <p>San Francisco, California</p>
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
};

const DescriptionRight = props => {
  return (
    <div className="box-items">
      <div className="breakfast-text">
        <span>javascript4breakfast</span>
      </div>
      <div>
        <span>{descriptionText}</span>
      </div>
    </div>
  );
};


export default function Intro(props) {
  return (
    <div className="intro-wrapper">
      <DescriptionLeft styleColor={props.styleColor} />
      <DescriptionRight />
    </div>
  );
};
