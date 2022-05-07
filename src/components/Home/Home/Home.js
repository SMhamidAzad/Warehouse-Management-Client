import React from 'react';
import Advantage from '../Advantage/Advantage';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Recommanded from '../Recommanded/Recommanded';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Recommanded></Recommanded>
            <Advantage></Advantage>
        </div>
    );
};

export default Home;