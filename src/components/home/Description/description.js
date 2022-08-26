import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/_description.css';
const Description = (props) => {
    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    <React.Fragment>
                        <div className="col-md-6">
                            <Link
                                onClick={() => {
                                    props.handleSelectedCardAction({
                                        ...props.CardReducer[0],
                                    });
                                    props.handleRelatedPosts({
                                        ...props.CardReducer[0],
                                    });
                                }}
                                to={props.CardReducer[0].blogLink}
                            >
                                <img
                                    className="imageEdit"
                                    src={props.CardReducer[0].image_url}
                                    alt="descImage"
                                />
                            </Link>
                        </div>
                        <div className="col-md-6 featured-heading">
                            <h5>{props.CardReducer[0].subtitle}</h5>
                            <p>{props.CardReducer[0].descHeader}</p>
                            <div className="line-btn">
                                <Link
                                    onClick={() => {
                                        props.handleSelectedCardAction({
                                            ...props.CardReducer[0],
                                        });
                                        props.handleRelatedPosts({
                                            ...props.CardReducer[0],
                                        });
                                    }}
                                    to={props.CardReducer[0].blogLink}
                                >
                                    Read More
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </React.Fragment>
                </div>
            </div>
        </section>
    );
};

export default Description;
