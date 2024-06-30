"use client"

import React, { useState } from 'react'
import { productnameadd } from '../services/productnameservice';

const Addjustname = () => {


    const [data, setData] = useState({
        name: "",
        usedfor: "",
    });


    const handlesubmitproduct=async(e)=>{
        e.preventDefault();
        try {
           const result =  await productnameadd(data);
           
        } catch (error) {
            
        }
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

                                    usedfor: "",

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

export default Addjustname
