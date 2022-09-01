import React from 'react';
import { BLOG_HEADER_DATA } from '../../../config/BlogConfig/BlogHeaderConfig/config.blog.header';
import { Link } from 'react-router-dom';
import '../../../scss/components/_header.css';
import HeaderData from '../../home/Header/headerData';
const BlogHeader = () => {
    return (
        <>
            <HeaderData />
            <section className="page-title">
                <div className="container headerBelow">
                    {BLOG_HEADER_DATA.map((props, index) => (
                        <div className="chg d-flex" key={index}>
                            <Link to="/">
                                <i className="fa fa-angle-left mt-3 pr-3"></i>
                            </Link>
                            <Link to="/">
                                <h2>{props.CompName}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default BlogHeader;
