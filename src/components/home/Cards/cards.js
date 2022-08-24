import React, { useState } from 'react';
import Tabs from './tabs';
import '../../../scss/components/_cards.css';

import CardItems from './CardItems';
const Cards = (props) => {
    // const items = props.CardReducer;
    const [search, setSearch] = useState('');
    return (
        <>
            <div className="container mt-5">
                <div className="row g-0">
                    <div className="col">
                        <ul
                            className="nav nav-pills mb-3 ml-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            <Tabs {...props} />
                        </ul>
                    </div>
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
                    <CardItems
                        search={search}
                        setSearch={setSearch}
                        {...props}
                    />
                </div>
            </div>
        </>
    );
};

export default Cards;
{
    /* <li className="nav-item">
                                <a
                                    class="nav-link active"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-profile"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                    onClick={() => props.filterItemData('All')}
                                >
                                    <span>All</span>
                                </a>
                            </li> */
}
