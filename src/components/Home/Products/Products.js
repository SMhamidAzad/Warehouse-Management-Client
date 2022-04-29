import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2>This is product section</h2>
            <div className='row g-4'>
            {
                products.map(product => <Product key={product._id}
                product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;