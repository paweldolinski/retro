import React from 'react';
import Line from './Line'

const AboutMeItem = ({ img, alt, title, subtitle, text }) => {
  return (
    <div className="about__item item">
      <div className="about__item-img">
        <img src={img} alt={alt}></img>
      </div>
      <h2 className="about__item-title">{title}</h2>
      <h3 className="about__item-subtitle">{subtitle}</h3>
      <Line className={"line"} />
      <div className="about__item-text" dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    </div>
  );
}

export default AboutMeItem;