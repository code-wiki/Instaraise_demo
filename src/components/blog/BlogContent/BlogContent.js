import React from 'react';
import { BLOG_CONTENT_DATA } from '../../../config/BlogConfig/BlogContentConfig/config.blog.content';
import '../../../scss/components/_blogCotent.css';
const BlogContent = () => {
    return (
        <div className="container">
            <div className="row mt-5 ContentEdit">
                <div className="col-9">
                    {BLOG_CONTENT_DATA.map((props) => (
                        <>
                            <h5>
                                <strong>{props.BlogSubtitle}</strong>
                            </h5>
                            <p>{props.BlogDate}</p>
                            <img
                                src={props.BlogImg}
                                class="img-fluid"
                                alt="Responsive image"
                            ></img>

                            <p className="paraEdit">{props.BlogHeading}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                            <p className="paraEdit">{props.BlogPara}</p>
                        </>
                    ))}
                </div>

                <div className="col-3">
                    {BLOG_CONTENT_DATA.map((props) => (
                        <div class="sidebar-section">
                            <div class="sidebar-item sticky-top">
                                <div class="sidebar-content">
                                    <h4>Related Posts</h4>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
<body>
    <article>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="title-section">
                        <h1>Stacking Sticky Sidebars with Bootstrap 4</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-7">
                    <div class="content-section">Content Section</div>
                </div>
                <div class="col-5">
                    <div class="sidebar-section">
                        <div class="sidebar-item sticky-top">
                            <div class="sidebar-content">Container 1</div>
                        </div>
                        <div class="sidebar-item sticky-top">
                            <div class="sidebar-content">Container 2</div>
                        </div>

                        <div class="sidebar-item sticky-top">
                            <div class="sidebar-content">Container 3</div>
                        </div>

                        <div class="sidebar-item sticky-top">
                            <div class="sidebar-content">Container 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</body>;
