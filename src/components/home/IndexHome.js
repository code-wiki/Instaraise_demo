import React from 'react';
import Header from './Header/header';
import Description from './Description/description';
import Cards from './Cards/cards';

const IndexHome = () => {
    //all the home components will be called here
    return (
        <>
            <Header />
            <Description />
            <Cards />
        </>
    );
};

export default IndexHome;
