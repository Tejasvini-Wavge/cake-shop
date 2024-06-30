import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import productsData from './data/product.json';
import '../src/style.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="product-list">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;