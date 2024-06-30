import React from 'react';
import theme from '../data/theme.json';
import vanilla from '../images/vanilla.webp';
import Redvelvet from '../images/red-velvet.webp';
import choc from '../images/chok.jpeg';
import cupcake from '../images/cupcake.jpeg';

const images = {
  "1": vanilla,
  "2": Redvelvet,
  "3": choc,
  "4": cupcake,
 
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{ backgroundColor: theme.backgroundColor }}>
      <img src={images[product.image]} alt={product.name} />
      <h2 style={{ color: theme.headingColor }}>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;