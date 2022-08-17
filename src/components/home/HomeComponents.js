import React from 'react';
import Header from './Header/header';
import Description from './Description/description';
import Cards from './Cards/cards';

const HomeComponents = () => {
    //all the home components will be called here
    return (
        <>
            <Header />
            <Description />
            <Cards />
        </>
    );
};

export default HomeComponents;
