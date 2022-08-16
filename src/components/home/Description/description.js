import React from 'react';
import { DESCDATA } from '../../../config/HomeConfig/DescriptionConfig/config.desc';
import '../../../scss/components/_description.css';
const Description = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {DESCDATA.map((props) => (
                    <>
                        <div className="col">
                            <img
                                className="descImg"
                                src={props.descImage}
                                alt="descData"
                            />
                        </div>
                        <div className="col descEdit">
                            <h5>{props.descHeading}</h5>
                            <p>{props.descPara}</p>
                            <h6>
                                <a href="#">Read More</a>
                                <i className="fa fa-angle-right"></i>
                            </h6>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Description;
