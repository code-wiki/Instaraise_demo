import React from 'react';
import { TABS_DATA } from '../../../config/HomeConfig/CardConfig/config.tabs';
const Tabs = (props) => {
    return (
        <>
            {TABS_DATA.map((elem, index) => (
                <li key={index} className="nav-item">
                    <a
                        className={
                            elem.tabCateg === 'All'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                        id="pills-home-tab"
                        data-toggle="pill"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        onClick={() => props.filterItemData(elem.tabCateg)}
                    >
                        <span>{elem.tabName}</span>
                    </a>
                </li>
            ))}
        </>
    );
};

export default Tabs;
