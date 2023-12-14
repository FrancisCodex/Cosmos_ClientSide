import Image from "next/image";
import React from 'react';
import Navbar from './Navbar/navbar';
import Coffee from '../assets/Macchiato.jpeg';

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'Iced Macchiato',
      price: '39.00',
    },
    {
      id: 2,
      name: 'Iced Matcha',
      price: '39.00',
    },
    {
      id: 3,
      name: 'Iced Coffee',
      price: '39.00',
    },
  ];

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="homepage">
        <br />
        <br />
        <br />
        <header className="header">
          <h1>Welcome to Cosmos Café</h1>
          <p>Your source for the finest coffee!</p>
        </header>

        <section className="product-list">
          <h2>Our Products</h2>
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <Image
                  src={Coffee}
                  alt={product.name}
                  width={300}
                  height={200}
                />
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
