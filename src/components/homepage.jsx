import Image from "next/image";
import React from 'react';
import Navbar from './Navbar/navbar';
import Coffee from '../assets/Macchiato.jpeg'; 
import Background from '../components/Navbar/homepage/image/home-bg.jpg'
import '../styles/home.module.css'

const HomePage = () => {

  


  return (
    <div>
      
          <div>
      <Navbar />
      </div>
      
      <div className="background">
        
        <div className="homepage">
        <br />
        <br />
        <br />
        <header className="header background">
          <h1>Welcome to Cosmos Café</h1>
          <p>Your source for the finest coffee!</p>
        </header>
        </div>

     <Image src={Background} className="absolute"/>
        
       
      </div>
</div>
    );
};

export default HomePage;
