import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from '../container/HOME/HomeContainer';
import BlogContainer from '../container/BLOG/BlogContainer';
const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route
                        path="/understanding-decentralised-finance/"
                        element={<BlogContainer />}
                    ></Route>
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
