import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from '../container/HOME/HomeContainer';
import BlogContainer from '../container/BLOG/BlogContainer';
import { CARD_DATA } from '../config/HomeConfig/CardConfig/config.card';

const Root = () => {
    const DETAILS_PAGE_ROUTE = CARD_DATA.map((elem) => (
        <Route
            key={elem.id}
            path={elem.blogLink}
            element={<BlogContainer />}
        ></Route>
    ));
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    {DETAILS_PAGE_ROUTE}
                    <Route
                        path="*"
                        element={<div>Error 404 Page Not Found</div>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Root;
