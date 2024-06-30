"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { cartget } from '../services/cartservice';
import { singleproductget } from '../services/productservice'; // Assuming this service exists
import Cartproduct from './Cartproduct';

const Usercart = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); // Use to store the data of user
  const [cartItems, setCartItems] = useState([]); // Use to store the cart items
  const [products, setProducts] = useState([]); // Use to store the product details

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
      toast.warning("Please login first !!", {
        position: "top-center"
      });
      router.push("/Signinpage");
    }
  }, []);

  const fetchProductDetails = async (productId) => {
    try {
      const productDetails = await singleproductget(productId);
      console.log(productDetails, productId);
      return productDetails;
    } catch (error) {
      console.error("Failed to fetch product details", error);
      return null;
    }
  };

  const getCartItems = async () => {
    if (user) {
      try {
        const result = await cartget(user._id);
        setCartItems(result); // Store the result in the cartItems state

        const productDetailsPromises = result.map(item => fetchProductDetails(item.productid));
        const productDetailsArray = await Promise.all(productDetailsPromises);

        setProducts(productDetailsArray.filter(details => details !== null)); // Store product details, excluding any that failed to fetch
      } catch (error) {
        console.error("Failed to fetch cart items", error);
      }
    }
  };

  useEffect(() => {
    getCartItems();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((element) => (
              <div key={element._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow">
                <Cartproduct  element={element} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Usercart;
