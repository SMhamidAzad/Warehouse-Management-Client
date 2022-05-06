import React, { useEffect, useState } from 'react';
import useReload from '../../hooks/useReload';
import Products from '../Products/Products';

const ManageSingleIn = ({ product }) => {
    const { _id, img, name, price, supplierName, quantity } = product;
    const [isReload, setIsReload] = useReload();

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://blooming-hollows-74511.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])
    const handleDeleteBtn = id => {
        // console.log("deleted",id);
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://blooming-hollows-74511.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setIsReload(!isReload)

                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                {/* <td>{supplierName}</td> */}
                <td><button className='bg-danger text-white border-0 rounded' onClick={() => handleDeleteBtn(_id)}>Delete</button></td>
            </tr>
        </>

    );
};

export default ManageSingleIn;