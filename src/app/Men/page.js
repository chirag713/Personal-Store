"use client";
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Productshow from '../Components/Productshow'
import { productnameget } from '../services/productnameservice'

const Page = () => {
  const [names, setNames] = useState([]);

  const getnames = async () => {
    try {
      const result = await productnameget("men");
      setNames(result);
      
    } catch (error) {

    }
  }

  useEffect(() => {
    getnames();
  }, []);

  return (
    <div>
      <Header />
      {names.map((name) => (
        <Productshow key={name._id} usedfor="men" name={name.name} />
      ))}
    </div>
  )
}

export default Page;
