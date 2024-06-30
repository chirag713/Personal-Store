"use client";
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cartadd } from '../services/cartservice';

const SingleProduct = ({ element }) => {
  const router = useRouter();
  const [user, setUser] = useState(null); // Use to store the data of user
  const [data, setData] = useState({
    userid: "",
    productid: element._id
  });

  // Function to fetch the data of user from local storage
  useEffect(() => {
    let userData = localStorage.getItem("username");
    if (userData) {
      try {
        userData = JSON.parse(userData);
        setUser(userData);
        console.log(userData);
        setData({
          ...data,
          userid: userData._id
        });
      } catch (e) {
        
      }
    }
  }, []);

  const addToCart = async () => {
    if (!user) {
      toast.warning("Please log in first!");
      router.push("/Signinpage");
      return;
    } else {
      try {
        const result = await cartadd(data);
        if (result.message === "Cart already exists") {
          toast.info("Product already in cart", {
            position: "top-center"
          });
        } else {
          toast.success("Product added to cart", {
            position: "top-center"
          });
        }
      } catch (error) {
        toast.error("Failed to add product to cart", {
          position: "top-center"
        });
      }
    }
  };

  return (
    <div className="flex hoverable-div justify-center flex-col h-68 min-w-52 p-6 w-23vw m-6 border bg-slate-400 border-black rounded-2xl cursor-pointer">
      <img src={element.img_path} alt="" className="h-64 cursor-pointer w-44 rounded-lg" />
      <div className="flex mt-2 justify-between">
        <span>{element.Brand}</span>
        <h5>₹ {element.price}</h5>
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <FiShoppingCart onClick={addToCart} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleProduct;
