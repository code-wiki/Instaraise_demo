import React from 'react';
import { NavLink } from 'react-router-dom';

const CardItems = (props) => {
    return (
        <>
            {props.CardReducer.filter((elem) => {
                if (props.search === '') {
                    return props;
                } else if (
                    elem.subtitle
                        .toLowerCase()
                        .includes(props.search.toLowerCase())
                ) {
                    return elem;
                }
                return false;
            }).map((elem, index) => (
                <div
                    key={index}
                    className="col-md-4 py-3 py-sm-0 px-4 cardEdit"
                >
                    <img src={elem.image_url} alt="image_description" />
                    <div className="imageInfo">
                        <div className="item-title">
                            <h5>{elem.subtitle}</h5>
                        </div>
                        <div className="item-desc">
                            <p>{elem.description}</p>
                        </div>
                    </div>
                    <div className="cardFooter">
                        <h6>{elem.cardDate}</h6>
                        <div className="alignbtn">
                            <NavLink
                                onClick={() => {
                                    props.handleSelectedCardAction({ ...elem });
                                    // props.handleNextItems([
                                    //     props.CardReducer[
                                    //         index ===
                                    //         props.CardReducer.length - 1
                                    //             ? props.CardReducer.length -
                                    //               index +
                                    //               1
                                    //             : index + 1
                                    //     ],
                                    //     props.CardReducer[
                                    //         index ===
                                    //         props.CardReducer.length - 1
                                    //             ? props.CardReducer.length -
                                    //               index +
                                    //               2
                                    //             : index + 2
                                    //     ],
                                    // ]);
                                }}
                                to={elem.blogLink}
                            >
                                Read More
                                <i className="fa fa-angle-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardItems;
