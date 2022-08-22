import React from 'react';
import Footer from '../home/Footer/footer';
import BlogHeader from './BlogHeader/BlogHeader';
import BlogContent from './BlogContent/BlogContent';
const BlogComponent = (props) => {
    return (
        <>
            <BlogHeader {...props} />
            <BlogContent {...props} />
            <Footer {...props} />
        </>
    );
};

export default BlogComponent;
