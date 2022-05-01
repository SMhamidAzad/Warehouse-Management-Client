import React, { useEffect, useState } from 'react';
import useReload from '../../hooks/useReload';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [isReload,setIsReload]=useReload();
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
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