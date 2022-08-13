import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import IndexHome from '../components/home/IndexHome';
import IndexBlog from '../components/blog/IndexBlog';
const Root = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexHome />} />
                    <Route
                        path="/understanding-decentralised-finance/"
                        element={<IndexBlog />}
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
