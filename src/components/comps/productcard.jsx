// components/ProductCard.js
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProductList.module.css';

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

export default ProductCard;