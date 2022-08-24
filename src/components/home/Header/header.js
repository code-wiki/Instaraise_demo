import React from 'react';
import { HEADER_DATA } from '../../../config/HomeConfig/HeaderConfig/config.header';
import '../../../scss/components/_header.css';
import HeaderData from './headerData';
const Header = () => {
    return (
        <>
            <HeaderData />
            <section className="page-title">
                <div className="container headerBelow">
                    {HEADER_DATA.map((props, index) => (
                        <div key={index}>
                            <h2>{props.CompName}</h2>
                            <p>{props.CompDesc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Header;
