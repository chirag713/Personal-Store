"use client";
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Productshow from '../Components/Productshow'
import { productnameget } from '../services/productnameservice'
import { productgetsingle } from '../services/productservice';

const Page = () => {
  const [names, setNames] = useState([]);
  const [products, setProducts] = useState([]);

  const getnames = async () => {
    try {
      const result = await productnameget("children");
      setNames(result);
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  }

  const fetchproduct = async () => {
    try {
      const result = await productgetsingle("children");
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getnames();
    fetchproduct();
  }, []);

  return (
    <div>
      <Header />
      {names.map((name, index) => {
        const filteredProducts = products.filter(product => product.name === name.name);
        return (
          <Productshow key={index} product={filteredProducts} />
        );
      })}
    </div>
  )
}

export default Page;
