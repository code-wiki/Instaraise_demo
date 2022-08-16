import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import IndexHome from '../components/home/IndexHome';
import IndexBlog from '../components/blog/IndexBlog';
const Root = () => {
    return (
        <>
            <HashRouter>
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
            </HashRouter>
        </>
    );
};

export default Root;
