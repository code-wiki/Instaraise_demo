import React from 'react';
import { Link } from 'react-router-dom';
import { DESCDATA } from '../../../config/HomeConfig/DescriptionConfig/config.desc';
import '../../../scss/components/_description.css';
const Description = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    {DESCDATA.map((props) => (
                        <>
                            <div className="col-md-6">
                                <Link to="/understanding-decentralised-finance/">
                                    <img
                                        className="imageEdit"
                                        src={props.descImage}
                                        alt="descImage"
                                    />
                                </Link>
                            </div>
                            <div className="col-md-6 featured-heading">
                                <h5>{props.descHeading}</h5>
                                <p>{props.descPara}</p>
                                <div className="line-btn">
                                    <Link to="/understanding-decentralised-finance/">
                                        Read More
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Description;
