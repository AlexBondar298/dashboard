import React, { useState } from "react";

const MenuItem = ({ title, defaultImg, hoverImg, alt }) => {
  const [imgSrc, setImgSrc] = useState(defaultImg);

  const handleMouseEnter = () => {
    setImgSrc(hoverImg);
  };

  const handleMouseLeave = () => {
    setImgSrc(defaultImg);
  };

  return (
    <li className="menu__item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#" className="menu__link">
        <img src={imgSrc} className="menu__link-img" alt={alt} />
        <h2 className="menu__link-title">{title}</h2>
        <svg className="menu__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#9197B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* &gt; */}
      </a>
    </li>
  );
};

export default MenuItem;
