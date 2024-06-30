"use client";

import React, { useEffect, useState } from 'react'
import { deletecart } from '../services/cartservice';
import { toast } from 'react-toastify';

const Cartproduct = ({ element }) => {

    const [user, setUser] = useState(null); // Use to store the data of user

    // Function to fetch the data of user from local storage
    useEffect(() => {
        let userData = localStorage.getItem("username");
        if (userData) {
            try {
                userData = JSON.parse(userData);
                setUser(userData);
            } catch (e) {
                console.error("Error parsing JSON from localStorage", e);
            }
        } else {

        }
    }, []);

    const deletethecart = async () => {
        try {
            const result = await deletecart(user._id, element._id);
            toast.success("Product successfully deleted!!",{
                position:'top-center'
            })
            console.log(result);

        } catch (error) {

        }
    }
    return (

        <div>
            < img src={element.img_path} alt="" className=" h-72 w-full object-cover rounded-t-lg mb-4" />
            <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{element.Brand}</span>
                <h5 className="text-xl font-bold text-green-600">₹{element.price}</h5>
            </div>
            <button onClick={deletethecart} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Remove from Cart
            </button>
        </div > 

    )
}

export default Cartproduct
