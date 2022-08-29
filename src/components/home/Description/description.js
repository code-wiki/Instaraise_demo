import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/_description.css';
import { DESC_DATA } from '../../../config/HomeConfig/DescConfig/config.desc';
const Description = (props) => {
    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    <>
                        {DESC_DATA.map((elem) => (
                            <React.Fragment key={elem.id}>
                                <div className="col-md-6">
                                    <Link
                                        // onClick={() => {
                                        //     props.handleSelectedCardAction({
                                        //         ...props.CardReducer[0],
                                        //     });
                                        //     props.handleRelatedPosts({
                                        //         ...props.CardReducer[0],
                                        //     });
                                        // }}
                                        to={props.CardReducer[0].blogLink}
                                    >
                                        <img
                                            className="imageEdit"
                                            src={elem.image_url}
                                            alt="descImage"
                                        />
                                    </Link>
                                </div>
                                <div className="col-md-6 featured-heading">
                                    <h5>{elem.subtitle}</h5>
                                    <p>{elem.descHeader}</p>
                                    <div className="line-btn">
                                        <Link
                                            // onClick={() => {
                                            //     props.handleSelectedCardAction({
                                            //         ...props.CardReducer[0],
                                            //     });
                                            //     props.handleRelatedPosts({
                                            //         ...props.CardReducer[0],
                                            //     });
                                            // }}
                                            to={props.CardReducer[0].blogLink}
                                        >
                                            Read More
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}

                        {/* <Link
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
                            </Link> */}
                    </>
                </div>
            </div>
        </section>
    );
};

export default Description;
