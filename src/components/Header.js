import React from 'react';
import homepageData from '../data/homepage.json';
import theme from '../data/theme.json';

const Header = () => {
  return (
    <header style={{ backgroundColor: theme.backgroundColor }}>
      <h1 style={{ color: theme.headingColor }}>{homepageData.title}</h1>
      <p style={{ color: theme.descriptionColor }}>{homepageData.description}</p>
    </header>
  );
};

export default Header;