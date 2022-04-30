import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id}=useParams();
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [id]);
    return (
        <div className='container'>
            <h2 className="text-center">Welcome to our inventory page</h2>
           <div className="row">
               <div className="col-md-4">
                  <img src={product.img} alt="" />
               </div>
               <div className="col-md-8">
                 <h5>{product.name}</h5>
                 <p>{product.description}</p>
                 <h4>Quantity: {product.quantity}</h4>
                 <h4>Price: {product.price}</h4>
               </div>
           </div>
        </div>
    );
};

export default Inventory;