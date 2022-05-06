import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReload from '../../hooks/useReload';
import Product from '../Product/Product';
import './Products.css'
import { BsArrowRight } from 'react-icons/bs';

const Products = () => {
    const [products, setProducts] = useState([])
    const [isReload,setIsReload]=useReload();
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    return (
       <div className='products pb-5'>
            <div className='container'>
            <h2 className='py-5 text-white fw-bold'>Inventory Items</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 mb-4'>
            {
                products.slice(0,6).map(product => <Product key={product._id}
                product={product}
                ></Product>)
            }
            </div>
            <Link className='manage-btn ' to='/manage'>Manage Inventory <BsArrowRight></BsArrowRight></Link>
        </div>
       </div>
    );
};

export default Products;