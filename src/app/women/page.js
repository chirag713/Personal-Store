
"use client";
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Productshow from '../Components/Productshow'
import { productnameget } from '../services/productnameservice'

const Page = () => {
  const [names, setNames] = useState([]);

  const getnames = async () => {
    try {
      const result = await productnameget("women");
      setNames(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getnames();
  }, []);

  return (
    <div>
      <Header />
      {names.map((name) => (
        <Productshow key={name._id} usedfor="women" name={name.name} />
      ))}
    </div>
  )
}

export default Page;
