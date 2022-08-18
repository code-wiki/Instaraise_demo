import React from 'react';
import Header from './Header/header';
import Description from './Description/description';
import Cards from './Cards/cards';
import Footer from './Footer/footer';
const HomeComponent = (props) => {
    //all the home components will be called here
    return (
        <>
            <Header {...props} />
            <Description {...props} />
            <Cards {...props} />
            <Footer {...props} />
        </>
    );
};

export default HomeComponent;
