// components/ProductList.js
import Image from "next/image";
import React from 'react';
import styles from '@/styles/ProductList.module.css';
import Navbar from '@/components/Navbar/navbar';
import Prod1 from '../assets/ecom2.jpg';
import { useState } from "react";
import Cart from "@/components/comps/cart";
import { useRouter } from "next/navigation";
const products = [
    {
        name: 'Macchiato',
        image: Prod1,
        description: 'The espresso macchiato is comparable to a mini foamy flat white.',
        price: '69.00',
    },
    {
        name: 'Matcha',
        image: Prod1,
        description: 'Matcha is a high-grade green tea ground into powdered form.',
        price: '69.00',
    },
    {
        name: 'Latte',
        image: Prod1,
        description: 'A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.',
        price: '89.00',
    },
    {
        name: 'Cappuccino',
        image: Prod1,
        description: 'Cappuccino is an Italian coffee drink that is traditionally composed of double espresso and steamed milk foam.',
        price: '79.00',
    },
    {
        name: 'Americano',
        image: Prod1,
        description: 'An Americano is a style of coffee prepared by brewing espresso with added hot water.',
        price: '65.00',
    },
    {
        name: 'Espresso',
        image: Prod1,
        description: 'Espresso is a concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.',
        price: '55.00',
    },
    {
        name: 'Mocha',
        image: Prod1,
        description: 'Mocha is a chocolate-flavored variant of a latte, typically with espresso, steamed milk, and chocolate syrup.',
        price: '75.00',
    },
    {
        name: 'Irish Coffee',
        image: Prod1,
        description: 'Irish coffee is a cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream.',
        price: '99.00',
    },
    {
        name: 'Flat White',
        image: Prod1,
        description: 'A flat white is a coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency).',
        price: '79.00',
    },
    // Add more products as needed
];


const ProductCard = ({ name, image, description, price, addToCart }) => {
    return (
      <div className={styles['product-card']}>
        <Image src={image} alt={name} className={styles['product-card-image']} />
        <h3 className={styles['product-card-title']}>{name}</h3>
        <p className={styles['product-card-description']}>{description}</p>
        <span className={styles['product-card-price']}>{price}</span>
        <button className={styles['product-card-button']} onClick={() => addToCart({ name, price })}>
          Add to Cart
        </button>
      </div>
    );
  };
  
  const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter(); // Initialize the useRouter hook
  
    const productsPerPage = 4;
  
    const filteredProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const addToCart = (item) => {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    };
  
    const removeFromCart = (index) => {
      setCartItems((prevCartItems) => {
        const newCartItems = [...prevCartItems];
        newCartItems.splice(index, 1);
        return newCartItems;
      });
    };
  
    const checkout = () => {
      // Add your checkout logic here
      // For now, let's navigate to the PaymentForm page
      router.push('/Payment');
    };
  
    return (
      <div className={styles['product-list-container']}>
        <Navbar cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout}/>
        <div className={styles['product-list']}>
          <h1>Coffee Products</h1>
  
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for a coffee product"
            value={searchTerm}
            onChange={(e) => {
              setCurrentPage(1);
              setSearchTerm(e.target.value);
            }}
          />
  
          <div className={styles['product-container']}>
            {currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                addToCart={addToCart}
              />
            ))}
          </div>
  
          {/* Next and Previous Buttons */}
          <div className={styles['pagination']}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
  
        </div>
        <div className="my-4"/>
      </div>
    );
  };
  
  export default ProductList;