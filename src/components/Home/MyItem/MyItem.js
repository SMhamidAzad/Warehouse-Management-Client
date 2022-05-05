import React from 'react';

const MyItem = ({myitem}) => {
    console.log(myitem);
    const {name,img,price,quantity,supplierName}=myitem;
    return (
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default MyItem;