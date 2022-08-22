import React from 'react';
import { BLOG_CONTENT_DATA } from '../../../config/BlogConfig/BlogContentConfig/config.blog.content';
import '../../../scss/components/_blogCotent.css';
const BlogContent = () => {
    return (
        <div className="container">
            <div className="row mt-5 ContentEdit">
                <div className="col-md-8">
                    {BLOG_CONTENT_DATA.map((props) => (
                        <>
                            <h5>
                                <strong>{props.BlogSubtitle}</strong>
                            </h5>
                            <p>{props.BlogDate}</p>
                            <img
                                src={props.BlogImg}
                                className="img-fluid"
                                alt="Responsive image"
                            ></img>

                            <p className="paraEdit">
                                <em>{props.BlogHeading}</em>
                            </p>
                            <p className="paraEdit">{props.BlogPara}</p>
                        </>
                    ))}
                </div>

                <div className="col-md-4">
                    {BLOG_CONTENT_DATA.map((props) => (
                        <div class="sidebar-section ">
                            <div class="sidebar-content sticky-top">
                                <div className="sharedPost">
                                    <h4>Share Posts</h4>
                                    <ul className="d-flex">
                                        <li>
                                            <a
                                                href="https://twitter.com/instaraise"
                                                target="_blank"
                                            >
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://twitter.com/instaraise"
                                                target="_blank"
                                            >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://t.me/instaraise"
                                                target="_blank"
                                            >
                                                <i className="fa fa-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-twitter"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-twitter"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sharedPost">
                                    <h4 className="postpadding">
                                        Related Posts
                                    </h4>
                                </div>
                                <div className="combineCard">
                                    <div className="sidebarimg">
                                        <img src={props.image_url} />
                                    </div>
                                    <div className="textSticky">
                                        <p>{props.stickText}</p>
                                    </div>
                                </div>
                                <div className="combineCard">
                                    <div className="sidebarimg">
                                        <img src={props.image_url2} />
                                    </div>
                                    <div className="textSticky">
                                        <p>{props.stickText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
