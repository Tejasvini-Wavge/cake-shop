import React from 'react';
import footerData from '../data/footer.json';
import theme from '../data/theme.json';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: theme.backgroundColor }}>
      <p style={{ color: theme.headingColor }}>{footerData.text}</p>
    </footer>
  );
};

export default Footer;