import React from 'react';
import '../../../scss/components/_footer.css';
import { FOOTER_DATA } from '../../../config/HomeConfig/FooterConfig/config.footer';

const Footer = (props) => {
    return (
        <footer className="bg-light pt-5 pb-4 mt-5">
            <div className="container">
                {FOOTER_DATA.map((val, index) => (
                    <div key={index}>
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4 className="mb-4 footer-heading-text">
                                            {val.footerHeading}
                                        </h4>
                                        <p className="aboutHeading">
                                            {val.footerPara}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h4 className="mb-4 footer-heading-text">
                                    {val.footerNavigation}
                                </h4>
                                <div className="footer-description-text">
                                    <p>
                                        <a href="#">{val.footerHome}</a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://instaraise.io/farms"
                                            target="_blank"
                                        >
                                            {val.footerFarm}
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://t.me/Instaraise"
                                            target="_blank"
                                        >
                                            {val.footerCommunity}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h4 className="mb-4 footer-heading-text">
                                    {val.footerCategories}
                                </h4>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a
                                        href="#"
                                        onClick={() =>
                                            props.filterItemData('DefiTools')
                                        }
                                    >
                                        {val.footerDefi}
                                    </a>
                                </p>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a
                                        href="#"
                                        onClick={() =>
                                            props.filterItemData('DevUpdates')
                                        }
                                    >
                                        {val.footerUpd}
                                    </a>
                                </p>
                                <p>
                                    <i className="fa fa-angle-right"></i>
                                    <a
                                        href="#"
                                        onClick={() =>
                                            props.filterItemData(
                                                'Product Exploration'
                                            )
                                        }
                                    >
                                        {val.footerProduct}
                                    </a>
                                </p>
                            </div>
                            <hr className="mb-4" />
                        </div>

                        <div className="text-center social">
                            <hr className="mb-4" />
                            {val.footerCopyRight}
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
