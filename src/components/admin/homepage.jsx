import React from 'react'
import ProductAdmin from './productAdmin'
import Navbar from '../Navbar/navbar'
import axios from 'axios'
const HomePage = () => {

  return (
    <div>
      <div className='h-screen'>
        <ProductAdmin />
      </div>
        
    </div>
  )
}

export default HomePage