import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>This is product section</h2>
            {
                products.map(product => <div>
                    <p>{product.name}</p>
                    <img src={product.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Products;