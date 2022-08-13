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
                            <img src={props.BlogImg} alt="descData" />
                            <p className="paraEdit">{props.BlogHeading}</p>
                            <p>{props.BlogPara}</p>
                        </>
                    ))}
                </div>

                <div className="col-3">col-4</div>
            </div>
        </div>
    );
};

export default BlogContent;
