import React from 'react';
import ProductList from '../components/ProductList';
import './home.css';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },

    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },
    
  
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },
    
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },
  
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },
  
    
  ];


  return (
    <div>
      <h1>Welcome to Our Bakery</h1>
      <p>Freshly baked goods every day!</p>
      <ProductList products={featuredProducts} />
    </div>
  );
}

export default Home;
