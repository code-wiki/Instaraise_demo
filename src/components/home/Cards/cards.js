import React from 'react';
import { BsSearch } from 'react-icons/bs';
import '../../../scss/components/_cards.css';
const Cards = () => {
    return (
        <div className="container mt-5">
            <div className="row g-0">
                <div className="col-sm-6 col-md-1">All</div>
                <div className="col-sm-6 col-md-1">DeFi tools</div>
                <div className="col-sm-6 col-md-1">Dev updates</div>
                <div className="col-sm-6 col-md-5">Product exploration</div>
                <div className=" col-6 col-md-4 input-group rounded">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span>
                        <BsSearch />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Cards;
