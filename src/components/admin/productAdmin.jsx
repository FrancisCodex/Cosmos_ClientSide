import React, {useState, useEffect} from 'react'
import AdminCard from './adminCard'
import axios from 'axios'
import Cookies from 'js-cookie'

const ProductAdmin = () => {
    const [products, setProducts] = useState([]);

  // Replace this with the actual JWT token
  const token = Cookies.get('authToken');

  useEffect(() => {
    axios.get('http://localhost:8000/api/p/view', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setProducts(response.data));
  }, []);

  const addProduct = (product) => {
    axios.post('/api/products', product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setProducts(prevProducts => [...prevProducts, response.data]));
  };

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/p/remove/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)));
  };

  const editProduct = (productId, updatedProduct) => {
    axios.put(`http://localhost:8000/api/p/edit/${productId}`, updatedProduct, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setProducts(prevProducts => prevProducts.map(product => product.id === productId ? response.data : product)));
  };

  return (
    <div>
        <div className="flex bg-gray-200 relative min-h-screen">
            <div className="flex flex-col flex-1">
            <main className="flex-1 bg-gray-200">
                <div className="container px-6 py-8 mx-auto">
                <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
                <div className="mt-4">
                    <div className="flex flex-wrap -mx-6">
                    
                    <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/2 sm:mt-0">
                        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div className="p-3 bg-green-800 bg-opacity-75 rounded-full">
                        <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 21.0001V15.0001H10V21.0001M19 9.77818V16.2001C19 17.8802 19 18.7203 18.673 19.362C18.3854 19.9265 17.9265 20.3855 17.362 20.6731C16.7202 21.0001 15.8802 21.0001 14.2 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">3</h4>
                            <div className="text-gray-500">Total Properties</div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/2 xl:mt-0">
                        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div className="p-3 bg-green-800 bg-opacity-75 rounded-full">
                        <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C17.2111 20.7499 17.0492 20.8087 16.868 20.8537M5 9.7774V16.2C5 17.8801 5 18.7202 5.32698 19.3619C5.6146 19.9264 6.07354 20.3854 6.63803 20.673C6.78894 20.7499 6.95082 20.8087 7.13202 20.8537M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M7.13202 20.8537C7.65017 18.6447 9.63301 17 12 17C14.367 17 16.3498 18.6447 16.868 20.8537M7.13202 20.8537C7.72133 21 8.51495 21 9.8 21H14.2C15.485 21 16.2787 21 16.868 20.8537M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">0</h4>
                            <div className="text-gray-500">Current Renters</div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="mt-8">
                </div>
                </div>
                {/* The Part of the world */}

                <div className="container text-3xl px-5">
                <h1>Properties Listed</h1>

                {/* Property List for users */}
                <div className='my-4'>
                {products.map((product, index) => (
                    <AdminCard key={index} product={product} deleteProduct={deleteProduct}/>
                ))}
                </div>

                </div>
            </main>
            </div>
        </div>
    </div>
  )
}

export default ProductAdmin