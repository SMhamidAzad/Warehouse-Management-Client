import axios from 'axios';
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
        const getMyItems = async () => {
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyItems(data)
        }
        getMyItems();
    }, [])

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