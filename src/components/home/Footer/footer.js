import React from 'react';
import '../../../scss/components/_footer.css';
import { FOOTER_DATA } from '../../../config/FooterConfig/config.footer';

const Footer = () => {
    return (
        <footer className="bg-light pt-5 pb-4 mt-5">
            <div className="container">
                {FOOTER_DATA.map((props) => (
                    <>
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h5 className="mb-4">
                                            {props.footerHeading}
                                        </h5>
                                        <p className="aboutHeading">
                                            {props.footerPara}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h5 className="mb-4">
                                    {props.footerNavigation}
                                </h5>
                                <p>
                                    <a href="#">{props.footerHome}</a>
                                </p>
                                <p>
                                    <a href="#">{props.footerFarm}</a>
                                </p>
                                <p>
                                    <a href="#">{props.footerCommunity}</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="mb-4">
                                    {props.footerCategories}
                                </h5>
                                <p>
                                    <li className="mr-3">{props.footerDefi}</li>
                                </p>
                                <p>
                                    <li className="mr-3">{props.footerUpd}</li>
                                </p>
                                <p>
                                    <li className="mr-3">
                                        {props.footerProduct}
                                    </li>
                                </p>
                            </div>
                            <hr className="mb-4" />
                        </div>

                        <div className="text-center p-4 social">
                            <hr className="mb-4" />
                            {props.footerCopyRight}
                        </div>
                    </>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
