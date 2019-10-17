import React from 'react';
import Line from './Line'

const AboutMeItem = ({ img, alt, title, subtitle, children }) => {
  return (
    <div className="about__item item">
      <div className="about__item-img">
        <img src={img} alt={alt}></img>
      </div>
      <h2 className="about__item-title">{title}</h2>
      <h3 className="about__item-subtitle">{subtitle}</h3>
      <Line />
      <div className="about__item-text">
        {children}
      </div>
    </div>
  );
}

export default AboutMeItem;