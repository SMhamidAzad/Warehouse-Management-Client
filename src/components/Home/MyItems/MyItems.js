import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    const email = user.email;
    const url = `https://blooming-hollows-74511.herokuapp.com/product?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setMyItems(data)
            })
    }, [])
    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(myItems)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    return (
        <div className='py-4' style={{ backgroundColor: '#021B29' }}>
            <h2 className='text-center text-white'>All of my items</h2>
            <div className='container'>
                {
                    myItems.map(myitem => <MyItem
                        key={myitem._id}
                        myitem={myitem}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;