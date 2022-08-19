import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/_cards.css';

const Cards = (props) => {
    const [search, setSearch] = useState('');
    const items = props.currentReducer;
    return (
        <>
            <div className="container mt-5">
                <div className="row g-0">
                    <ul
                        className="nav nav-pills mb-3 ml-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item active">
                            <a
                                className="nav-link active"
                                id="pills-home-tab"
                                data-toggle="pill"
                                href="#pills-home"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                                onClick={() => props.allItemData('All')}
                            >
                                <span>All</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                class="nav-link"
                                id="pills-profile-tab"
                                data-toggle="pill"
                                href="#pills-profile"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                onClick={() =>
                                    props.filterItemData('DefiTools')
                                }
                            >
                                <span>Defi tools</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="pills-contact-tab"
                                data-toggle="pill"
                                href="#pills-contact"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                onClick={() =>
                                    props.filterItemData('DevUpdates')
                                }
                            >
                                <span>Defi updates</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="pills-contact-tab"
                                data-toggle="pill"
                                href="#pills-contact"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                onClick={() =>
                                    props.filterItemData('Product Exploration')
                                }
                            >
                                <span>Product exploration</span>
                            </a>
                        </li>
                    </ul>
                    <div className="input-group searchEdit">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Posts"
                            onChange={(event) => {
                                setSearch(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row hoverChange">
                    {items
                        .filter((props) => {
                            if (search === '') {
                                return props;
                            } else if (
                                props.subtitle
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return props;
                            }
                            return false;
                        })
                        .map((props, index) => (
                            <>
                                <div
                                    key={index}
                                    className="col-md-4 py-3 py-sm-0 px-4 cardEdit"
                                >
                                    <img
                                        src={props.image_url}
                                        alt="image_description"
                                    />
                                    <div className="imageInfo">
                                        <h5>{props.subtitle}</h5>
                                        <p>{props.description}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6>{props.cardDate}</h6>
                                        </div>
                                        <div className="col readAlign">
                                            <Link to="/understanding-decentralised-finance/">
                                                Read More
                                                <i className="fa fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Cards;
{
    /* <div className="row dateEdit ">
                                            <div className="col-md-6">
                                                <h6>{props.cardDate}</h6>
                                            </div>
                                            <div className="col-md-6 readAlign">
                                                <Link to="/understanding-decentralised-finance/">
                                                    Read More
                                                    <i className="fa fa-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div> */
}
