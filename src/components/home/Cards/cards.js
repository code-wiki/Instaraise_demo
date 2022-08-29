import React, { useState } from 'react';
import Tabs from './tabs';
import '../../../scss/components/_cards.css';

import CardItems from './CardItems';
const Cards = (props) => {
    const [search, setSearch] = useState('');
    return (
        <section className="featured-cards">
            <div className="container pt-5">
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
        </section>
    );
};

export default Cards;
