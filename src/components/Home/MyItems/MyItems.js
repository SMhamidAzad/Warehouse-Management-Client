import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    const email = user.email;
    const url = `http://localhost:5000/product?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setMyItems(data)})
    }, [])
    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(myItems)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    return (
        <div>
            <h2>This is my item components</h2>
            <h1>{myItems.length}</h1>
            <h5><small>--------------</small> {myItems[0]?.email}</h5>
        </div>
    );
};

export default MyItems;