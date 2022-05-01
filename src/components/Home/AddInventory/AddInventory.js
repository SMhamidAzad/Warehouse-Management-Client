import React from 'react';

const AddInventory = () => {
    const handleNewInventory = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;

        console.log(typeof price);
        console.log(typeof quantity);
        const product = {name,img,description,price,quantity,supplierName};
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
        <div>
            <h1>This is add inventory page</h1>
            <form onSubmit={handleNewInventory}>
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
               <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddInventory;


