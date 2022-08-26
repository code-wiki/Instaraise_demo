import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_DATA } from '../../../config/HomeConfig/HeaderConfig/config.header';
const HeaderData = () => {
    return (
        <>
            <header className="site-header">
                <nav className="container navbar navbar-expand-lg navbar-light">
                    <div className="branding">
                        <Link to="/">
                            <a className="navbar-brand d-flex">
                                <img
                                    src="http://instaraise.rswebs.in/wp-content/uploads/2022/07/logo-2.png"
                                    alt="Instaraise logo"
                                />
                                <h5 className="compName mt-1">Instaraise</h5>
                            </a>
                        </Link>
                    </div>
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
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto">
                            {HEADER_DATA.map((props, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        className="nav-link"
                                        href={props.externalLink}
                                        target="_blank"
                                    >
                                        <p>
                                            {props.headerNav}{' '}
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="0.8em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                                                <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                                            </svg>
                                        </p>{' '}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <img
                                src="http://instaraise.rswebs.in/wp-content/themes/Instaraise-theme/assets/images/dark-theme.svg"
                                alt="dark mode image"
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderData;
