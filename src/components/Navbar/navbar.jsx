import Image from "next/image";
import React, {useState} from "react";
import Logo from "../../assets/cosmos.svg"
import Logo2 from "../../assets/suitslogo1.png"
import Cart from "./cart";




const Navbar = ({ cartItems, removeFromCart, checkout }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }
    return <div>
    <nav className="flex justify-between bg-transparent text-black w-screen fixed shadow-md backdrop-blur-md top-0">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
        <Image className="h-9" src={Logo} alt="logo"/>

        </a>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-gray-200" href="/">Home</a></li>
          <li><a className="hover:text-gray-200" href="/listings">Listing</a></li>
          <li><a className="hover:text-gray-200" href="/auth/profile">Profile</a></li>
        </ul>
        <div className="hidden xl:flex items-center space-x-5">
          {/* Wishlist */}
          <a className="hover:text-red-800" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
          {/* Cart */}
          <div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />
          </div>
          {/* Profile */}
          <a className="flex items-center hover:text-red-800" href="/auth/login">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          
        </div>
      </div>
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
  </div>;
};
export default Navbar;



        {/* <nav className="flex justify-between py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">

            <div className="flex items-center mx-10">
                <a className="cursor-pointer">
                    <h3 className="text-3xl font-medium text-blue-500">
                        <Image className=" object-cover"
                            src={Logo} alt="Store Logo"/>
                    </h3>
                </a>
            </div>
            <div className="items-center hidden space-x-8 lg:flex">
                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Home
                </a>

                <a className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    hover:text-blue-600">
                    Shop
                </a>

                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Team
                </a>

                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Contact Us
                </a>


                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    About Us
                </a>
            </div>

            <div className="flex items-center space-x-5 mx-10">
                <a className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Register
                </a>

                <a className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                     hover:text-blue-600">
                    Login
                </a>
            </div>
        </nav> */}