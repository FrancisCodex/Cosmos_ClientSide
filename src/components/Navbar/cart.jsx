import React, {useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Cart = ({ checkout }) => {
  // { cartItems, removeFromCart, checkout }
    const [cartItems, setCartItems] = useState([]);
    const [itemsRemove, setItemsRemove] = useState([]);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCartItems = useCallback(async () => {
      const token = Cookies.get('authToken'); // replace with your token retrieval logic
      setIsLoading(true);
  
      try {
        const response = await axios.get('http://localhost:8000/api/cart/view', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setCartItems(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.log('Unauthorized')
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    }, []);
  
    useEffect(() => {
      fetchCartItems();
    }, [fetchCartItems]);

  const handleRemoveFromCart = async (id) => {
    // Send a DELETE request to the API
    const token = Cookies.get('authToken'); // replace with your token retrieval logic

    try {
      await axios.delete(`http://localhost:8000/api/cart/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Remove the item from the local state
      setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.log('Unauthorized')
      } else {
        // Handle other errors
        console.error(error);
      }
    }
  };

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  console.log(cartItems);
  return (
    <div className="block relative">
        <button className="flex items-center hover:text-red-800" href="#" onClick={toggleDropdownMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
            </span>
        </button>

        {/* Dropdown for Cart */}
        
        {isLoading ? (
          <p>Loading cart items...</p>
        ) : ( <>
          {
          isDropdownMenuOpen && (
            <div className="dropdown-menu absolute top-full right-0 z-10 w-48 rounded-md bg-white shadow-lg">
              <div className="shadow-xl w-64">
                {cartItems.map((item, index) => (
                  <div key={index} className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                    <div className="p-2 w-12"><img src={item.product_image_url} alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                      <div className="font-bold">{item.product_name}</div>
                      <div className="text-gray-400">Qt: {item.product_quantity}</div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveFromCart(item.product_order_item_id)}>
                      Remove
                    </button>
                      <div>₱{item.subtotal}</div>
                    </div>
                  </div>
                ))}
                <div className="p-4 justify-center flex">
                  <button onClick={checkout} className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-teal-700 hover:text-teal-100 
                    bg-teal-100 
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">Checkout</button>
                </div>
              </div>
            </div>
          )
        }
        </> )}
    </div>
  )
}

export default Cart