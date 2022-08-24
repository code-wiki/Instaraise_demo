import React from 'react';
import '../../../scss/components/_blogCotent.css';
import BlogSocial from './BlogSocial';
import RelatedPosts from '../RelatedPosts';
const BlogContent = (props) => {
    // const items = props.BlogReducer;
    return (
        <div className="container">
            <div className="row mt-5 ContentEdit">
                <React.Fragment>
                    <div className="col-md-8">
                        <h5>
                            <strong>{props.BlogReducer.subtitle}</strong>
                        </h5>
                        <p>{props.BlogReducer.cardDate}</p>
                        <img
                            src={props.BlogReducer.image_url}
                            className="img-fluid"
                            alt="Responsive image"
                        ></img>

                        <p className="paraEdit">
                            <em>{props.BlogReducer.descHeader}</em>
                        </p>
                        <p className="paraEdit">
                            {props.BlogReducer.description}
                        </p>
                        <p className="paraEdit">{props.BlogReducer.descPara}</p>
                        <p className="paraEdit">
                            {props.BlogReducer.descPara2}
                        </p>
                    </div>

                    <div className="col-md-4">
                        <div className="sidebar-section ">
                            <div className="sidebar-content sticky-top">
                                <div className="sharedPost">
                                    <h4>Share Posts</h4>
                                    <BlogSocial />
                                </div>
                                <RelatedPosts
                                    currentPageId={props.BlogReducer.id}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        </div>
    );
};

export default BlogContent;
