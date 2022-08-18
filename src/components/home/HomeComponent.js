import React from 'react';
import Header from './Header/header';
import Description from './Description/description';
import Cards from './Cards/cards';

const HomeComponent = (props) => {
    //all the home components will be called here
    return (
        <>
            <Header {...props} />
            <Description {...props} />
            <Cards {...props} />
        </>
    );
};

export default HomeComponent;
