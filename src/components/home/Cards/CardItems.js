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
                <div key={index} className="col-md-4 cardEdit">
                    <NavLink
                        onClick={() => {
                            props.handleSelectedCardAction({ ...elem });
                            props.handleRelatedPosts({ ...elem });
                        }}
                        to={elem.blogLink}
                    >
                        <img src={'https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg'} alt="image_description" />
                    </NavLink>
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
                                    props.handleRelatedPosts({
                                        ...elem,
                                    });
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
