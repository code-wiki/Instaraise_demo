import React from 'react';
import { HEADER_DATA } from '../../../config/HeaderConfig/config.header';
import '../../../scss/components/_header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Webiste
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Docs
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Apply for Incubation
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <button>Here</button>
                </div>
            </nav>
            {/* {HEADER_DATA.map((props) => (
                <div>
                    <h2>{props.CompName}</h2>
                    <p>{props.CompDesc}</p>
                </div>
            ))} */}
        </div>
    );
};

export default Header;
