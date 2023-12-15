// components/ProductList.js
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from '@/styles/ProductList.module.css';
import Navbar from '@/components/Navbar/navbar';
import Prod1 from '../assets/ecom2.jpg';
import Cart from "@/components/comps/cart";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Card from "./comps/card";
import ProductCard from "./comps/productcard";

  const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
      name: "",
      price: 0,
      qty: 0,
    });
    const router = useRouter(); // Initialize the useRouter hook
  
    const productsPerPage = 3;
  
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
  
    const addToCart = async (product) => {
      // Check if the product is already in the cart
      const existingProductIndex = cartItems.findIndex(item => item.name === product.name);
    
      // Get the JWT token from wherever you have stored it (e.g., localStorage, cookies)
      const token = Cookies.get('authToken'); // replace with your token retrieval logic
    
      // Determine the quantity to add
      const qtyToAdd = existingProductIndex !== -1 ? cartItems[existingProductIndex].qty + 1 : 1;
    
      try {
        await axios.post('http://localhost:8000/api/cart/add', 
          { ...product, qty: qtyToAdd }, 
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
      } catch (error) {
        // handle error
      }
    
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, create a new array with the updated product
        const newCartItems = cartItems.map((item, index) => {
          if (index !== existingProductIndex) {
            return item;
          }
    
          return {
            ...item,
            qty: item.qty + 1,
            price: Number(item.price) + Number(product.price)
          };
        });
    
        setCartItems(newCartItems);
      } else {
        // If the product is not in the cart, add it
        setCartItems(prevCartItems => [...prevCartItems, {...product, qty: 1, price: Number(product.price)}]);
      }
    };
  
    const removeFromCart = (index) => {
      setCartItems((prevCartItems) => {
        const newCartItems = [...prevCartItems];
        newCartItems.splice(index, 1);
        return newCartItems;
      });
    };

    useEffect(() => {
      const fetchProducts = async () => {
        const authToken = Cookies.get('authToken');
        const config = {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        };
        try {
          const response = await axios.get('http://localhost:8000/api/p/view', config);
          setProducts(response.data);
        } catch (error) {
          if (error.response && error.response.status === 403) {
            console.log('Unauthorized')
          } else {
            // Handle other errors
            console.error(error);
          }
        }
      };
  
      fetchProducts();
    }, []);
  
    const checkout = () => {
      // Add your checkout logic here
      // For now, let's navigate to the PaymentForm page
      router.push('/payments');
    };
  
    return (
      <div className={styles['product-list-container']}>
        <Navbar checkout={checkout}/>
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
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
              <Card product={product} addToCart={addToCart} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">Coffee not found</p>
          </div>
        )}
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