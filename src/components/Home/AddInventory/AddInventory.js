import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddInventory.css'

const AddInventory = () => {
    const [user]=useAuthState(auth)
    const handleNewInventory = e=>{
        e.preventDefault();
        const email = user.email;
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;

        console.log(typeof price);
        console.log(typeof quantity);
        const product = {email,name,img,description,price,quantity,supplierName};
        console.log(product);


        fetch('http://localhost:5000/product',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data=>{
            console.log("Added New Item ",data);
            alert('successfully new inventory added')
            e.target.reset()
        })
    }
    return (
        <div className='d-flex justify-content-center form-container'>
            <div className='form-div'>
            <h1 className='text-white py-3'>Add Your Inventory Here</h1>
            <form className='addItem-form' onSubmit={handleNewInventory}>
               <input type="text" name="name" id="" placeholder='name'/>
               <br />
               <input type="text" name="img" id="" placeholder='photo URL'/>
               <br />
               <input type="text" name="description" id="" placeholder='description'/>
               <br />
               <input type="text" name="price" id="" placeholder='price'/>
               <br />
               <input type="text" name="quantity" id="" placeholder='quantity'/>
               <br />
               <input type="text" name="supplierName" id="" placeholder='Supplier Name'/>
               <br />
               <input className='addForm-btn' type="submit" value="Add Item" />
            </form>
            </div>
        </div>
    );
};

export default AddInventory;


