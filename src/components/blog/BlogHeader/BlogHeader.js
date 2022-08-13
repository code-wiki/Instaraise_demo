import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_HEADER_DATA } from '../../../config/BlogConfig/BlogHeaderConfig/config.blog.header';
import '../../../scss/components/_header.css';
const BlogHeader = () => {
    return (
        <div className="headercolor">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <a className="navbar-brand" href="#">
                    Instaraise
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a
                                className="nav-link"
                                href="https://www.instaraise.io/"
                                target="_blank"
                            >
                                <p>Webiste</p>
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link"
                                href="https://docs.instaraise.io/"
                                target="_blank"
                            >
                                <p>Docs</p>
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfCcJ9knICdpYUbUGe82AH91pKsUA6M-u5I2ZHl3xSQ4BmKsg/viewform"
                                target="_blank"
                            >
                                <p>Apply for Incubation</p>
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                </div>
            </nav>
            <div className="container headerBelow">
                {BLOG_HEADER_DATA.map((props, index) => (
                    <div key={index} className="d-flex">
                        <Link to="/">
                            <i className="fa fa-angle-left iconChg"></i>
                        </Link>
                        <h2>{props.CompName}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogHeader;
