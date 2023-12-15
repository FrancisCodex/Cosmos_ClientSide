import React from 'react'
import Navbar from './Navbar/navbar'


const Landingpage = () => {
  return (
    <div className="homepage"> {/* Apply the CSS class */}
      <Navbar /> {/* Use the Header component */}
      <main>
        {/* Your homepage content here */}
        <h2>Welcome to Our Website</h2>
        <p>This is the homepage content.</p>
      </main>
    </div>
  )
}

export default Landingpage