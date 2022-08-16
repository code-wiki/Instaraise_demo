import React from 'react';
import { HEADER_DATA } from '../../../config/HomeConfig/HeaderConfig/config.header';
import '../../../scss/components/_header.css';
const Header = () => {
    return (
        // <div className="headercolor">
        //     <nav className="navbar navbar-expand-lg navbar-light container">
        //         <div className="branding">
        //             <a href="http://instaraise.rswebs.in/">
        //                 <img
        //                     src="http://instaraise.rswebs.in/wp-content/uploads/2022/07/logo-2.png"
        //                     alt="Instaraise Logo"
        //                 />
        //             </a>
        //         </div>
        //         <div className="compName">
        //             <p>Instaraise</p>
        //         </div>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-toggle="collapse"
        //             data-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div
        //             className="collapse navbar-collapse "
        //             id="navbarSupportedContent"
        //         >
        //             <ul className="navbar-nav mx-auto">
        //                 <li className="nav-item active">
        //                     <a
        //                         className="nav-link"
        //                         href="https://www.instaraise.io/"
        //                         target="_blank"
        //                     >
        //                         <p>Website</p>
        //                         <span className="sr-only">(current)</span>
        //                     </a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a
        //                         className="nav-link"
        //                         href="https://docs.instaraise.io/"
        //                         target="_blank"
        //                     >
        //                         <p>Docs</p>
        //                         <span className="sr-only">(current)</span>
        //                     </a>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <a
        //                         className="nav-link"
        //                         href="https://docs.google.com/forms/d/e/1FAIpQLSfCcJ9knICdpYUbUGe82AH91pKsUA6M-u5I2ZHl3xSQ4BmKsg/viewform"
        //                         target="_blank"
        //                     >
        //                         <p>Apply for Incubation</p>
        //                         <span className="sr-only">(current)</span>
        //                     </a>
        //                 </li>
        //             </ul>
        //             <i className="fa fa-moon-o" aria-hidden="true"></i>
        //         </div>
        //     </nav>
        //     <div className="container headerBelow">
        //         {HEADER_DATA.map((props, index) => (
        //             <div key={index}>
        //                 <h2>{props.CompName}</h2>
        //                 <p>{props.CompDesc}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <header className="site-header">
            <nav class="container navbar navbar-expand-lg navbar-light">
                <div className="branding">
                    <a className="navbar-brand d-flex" href="#">
                        <img
                            src="http://instaraise.rswebs.in/wp-content/uploads/2022/07/logo-2.png"
                            alt="Instaraise logo"
                        />
                        <h5 className="compName mt-1">Instaraise</h5>
                    </a>
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
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.instaraise.io/"
                                target="_blank"
                            >
                                Website <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                class="nav-link"
                                href="https://docs.instaraise.io/"
                                target="_blank"
                            >
                                Docs <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfCcJ9knICdpYUbUGe82AH91pKsUA6M-u5I2ZHl3xSQ4BmKsg/viewform"
                                target="_blank"
                            >
                                Apply for Incubation{' '}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <img
                            src="http://instaraise.rswebs.in/wp-content/themes/Instaraise-theme/assets/images/dark-theme.svg"
                            alt="dark mode image"
                        />
                    </div>
                </div>
            </nav>
            <section>
                <div className="container headerBelow">
                    {HEADER_DATA.map((props, index) => (
                        <div key={index}>
                            <h2>{props.CompName}</h2>
                            <p>{props.CompDesc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </header>
    );
};

export default Header;
