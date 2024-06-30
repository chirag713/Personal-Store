
import React from 'react';
import Singleproduct from './singleproduct';

const Productshow = ({ product }) => {
    console.log(product);
    return (
        <div>
            <h1 className='flex justify-center mt-6 text-4xl'>{product[0]?.name}</h1>
            <div className='flex flex-wrap justify-center pt-12'>
                {product.map((element) => (
                    <Singleproduct element={element} key={element._id} />
                ))}
            </div>
        </div>
    );

};

export default Productshow;
