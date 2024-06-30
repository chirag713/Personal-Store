"use client";
import React, { useState, useEffect } from 'react';
import { productget } from '../services/productservice';
import Singleproduct from './singleproduct';

const Productshow = ({ usedfor, name }) => {
    const [product, setProduct] = useState(null);

    const gettheproduct = async () => {
        try {
            const result = await productget(usedfor, name);
            
            setProduct(result);
        } catch (error) {
           
        }
    }

    useEffect(() => {
        gettheproduct();
    }, [usedfor, name]);

    if (!product) {
        return <p>Loading...</p>;
    }

    if (Array.isArray(product) && product.length > 0) {
        return (
            <div>
                <h1 className='flex justify-center mt-6 text-4xl'>{name}</h1>
                <div className='flex flex-wrap justify-center pt-12'>
                    { product.map((element) => (
                        <Singleproduct element={element} key={element._id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return null; 
    }
};

export default Productshow;
