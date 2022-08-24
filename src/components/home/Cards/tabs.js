import React from 'react';
import { TABS_DATA } from '../../../config/HomeConfig/CardConfig/config.tabs';
const Tabs = (props) => {
    return (
        <>
            {TABS_DATA.map((elem, index) => (
                <li key={index} className="nav-item">
                    <a
                        className={
                            props.TabsSelectReducer === elem.tabCateg
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                        id="pills-home-tab"
                        data-toggle="pill"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        onClick={() => {
                            props.handleCategoryChange(elem.tabCateg);
                            props.filterItemData(elem.tabCateg);
                        }}
                    >
                        <span>{elem.tabName}</span>
                    </a>
                </li>
            ))}
        </>
    );
};

export default Tabs;
