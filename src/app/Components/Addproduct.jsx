"use client"
import React, { useState } from 'react'

const Addproduct = () => {

    //use to store data of product which we want to add
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        usedfor: "",
        image: null,
    });

    //update image 
    const handleImageChange = (event) => {
        setData({
            ...data,
            image: event.target.files[0],
        });
    };

    //logic for add product
    const handlesubmitproduct = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center min-h-screen text-gray-200'>
            <div className='bg-gray-800 p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-xl min-w-[70vw] max-w-[800px]'>
                <h1 className='text-4xl text-center font-bold underline mb-8'>Add Your Item</h1>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="item_name" className='block text-xl font-medium mb-2'>Name</label>
                        <input
                            className='w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            placeholder="Enter name of item"
                            id="item_name"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    name: event.target.value,
                                })
                            }}
                            value={data.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="item_price" className='block text-xl font-medium mb-2'>Price</label>
                        <input
                            className='w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none no-arrow'
                            type="number"
                            placeholder="Enter Price in rupees"
                            id="item_price"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    price: event.target.value,
                                })
                            }}
                            value={data.price}
                            onWheel={(e) => e.target.blur()}
                        />
                    </div>
                    <div>
                        <label htmlFor="item_usedfor" className='block text-xl font-medium mb-2'>Used For</label>
                        <select
                            className='w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                            id="item_usedfor"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    usedfor: event.target.value,
                                })
                            }}
                            value={data.usedfor}
                        >
                            <option value="" disabled>Select category</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="children">Children</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="item_description" className='block text-xl font-medium mb-2'>Description</label>
                        <textarea
                            className='w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Enter description of Your Product"
                            id="item_description"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    description: event.target.value,
                                })
                            }}
                            value={data.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="item_image" className='block text-xl font-medium mb-2'>Image</label>
                        <input
                            className='w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="file"
                            id="item_image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <button
                            type='submit'
                            className='bg-green-600 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200'
                            onClick={handlesubmitproduct}
                        >
                            Add Item
                        </button>
                        <button
                            type='button'
                            className='bg-red-600 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200'
                            onClick={() => {
                                setData({
                                    name: "",
                                    description: "",
                                    price: "",
                                    usedfor: "",
                                    image: null,
                                })
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addproduct
