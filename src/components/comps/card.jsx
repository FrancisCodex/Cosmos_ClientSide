import React from 'react'

const Card = ({product, addToCart}) => {
    const name = product.name;
    const price = product.price;
    const image = product.image_url;
    const product_id = product.product_id;
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
        <a href="#" className="flex-shrink-0">
          <img className="rounded-t-lg p-8 object-cover h-96 w-full" src={product.image_url} alt="product image" />
        </a>
        <div className="px-5 pb-5 flex flex-col flex-grow">
          <a href="#">
            <h3 className="text-black font-semibold text-xl tracking-tight flex-grow line-clamp-3">{name}</h3>
          </a>
            <p className='text-black tracking-tight flex-grow line-clamp-2'>{product.description}</p>
          <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold text-black">₱{Number(product.price).toFixed(2)}</span>
            <button onClick={() => addToCart({ name, price, image, product_id })} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
              to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card