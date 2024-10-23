import React from 'react';
import ProductList from '../components/ProductList';
import './home.css';

const Products = () => {
  const allProducts = [
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
  
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Rich and creamy.', img: 'chocolate-cake.jpg' },
    { id: 2, name: 'Cupcake', price: '$5', description: 'Light and fluffy.', img: 'cupcake.jpg' },
    // More products
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList products={allProducts} />
    </div>
  );
}

export default Products;
