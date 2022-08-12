import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../../../scss/components/_cards.css';
import { CARD_DATA } from '../../../config/CardConfig/config.card';
const Cards = () => {
    const [items, setItems] = useState(CARD_DATA);
    const filterItems = (categItem) => {
        const updatedItems = CARD_DATA.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    };
    return (
        <div className="container mt-5">
            <div className="row g-0">
                <ul>
                    <li>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => setItems(CARD_DATA)}
                        >
                            All
                        </button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => filterItems('DefiTools')}
                        >
                            Defi tools
                        </button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => filterItems('DevUpdates')}
                        >
                            Dev updates
                        </button>
                    </li>
                </ul>
                <ul className="searchEdit">
                    <li>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => filterItems('Product Exploration')}
                        >
                            Product exploration
                        </button>
                    </li>
                </ul>
                {/* <div className="col-sm-6 col-md-1">All</div>
                <div className="col-sm-6 col-md-1">DeFi tools</div>
                <div className="col-sm-6 col-md-1">Dev updates</div>
                <div className="col-sm-6 col-md-5">Product exploration</div>
                <div className=" col-6 col-md-4 input-group rounded">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span>
                        <BsSearch />
                    </span>
                </div> */}
            </div>
            <div className="row">
                {items.map((props) => (
                    <div className="col-sm-4  py-3 py-sm-0 px-4 cardEdit">
                        <div>
                            <img
                                src={props.image_url}
                                alt="image_description"
                            />
                            <div className="imageInfo">
                                <h5>{props.subtitle}</h5>
                                <p>{props.description}</p>
                                <p>{props.cardDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
