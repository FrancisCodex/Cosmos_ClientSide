import React from 'react'

const AdminCard = ({product, deleteProduct}) => {
  return (
    <div>
        <div class="flex flex-col py-3">
        <div class="relative flex flex-col mx-auto md:mx-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full border border-white bg-white flex flex-col justify-between">
        <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={product.image_url} className='h-64 w-auto' alt="tailwind logo" class="rounded-xl" />
        </div>
        <div class="w-full md:w-3/3 bg-white flex flex-col space-y-2 p-3">
            <div>
            <div class="flex justify-between item-center">
                <p class="text-gray-500 font-medium hidden md:block">Coffee</p>
            </div>
            <h3 class="font-black text-gray-800 md:text-3xl text-xl">{product.name}</h3>
            <p class="md:text-lg text-gray-500 text-base">{product.description}</p>
            <p class="text-xl font-black text-gray-800">
                ₱{Number(product.price).toFixed(2)}
            </p>
            </div>
            <div class="flex justify-between items-center mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteProduct(product.product_id)}>
                Delete
            </button>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AdminCard