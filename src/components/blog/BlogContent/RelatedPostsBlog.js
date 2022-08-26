import React from 'react';
import BlogSocial from './BlogSocial';
import { NavLink } from 'react-router-dom';
const RelatedPostsBlog = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="sidebar-section ">
                    <div className="sidebar-content sticky-top">
                        <div className="sharedPost">
                            <h4>Share Posts</h4>
                            <BlogSocial />
                        </div>
                        <div className="sharedPost">
                            <h4 className="postpadding">Related Posts</h4>
                        </div>
                        <div className="combineCard">
                            <div className="sidebarimg">
                                <NavLink
                                    onClick={() => {
                                        // debugger;
                                        props.handleSelectedCardAction({
                                            ...props.relatedBlogReducer[0],
                                        });
                                        props.handleRelatedPosts({
                                            ...props.relatedBlogReducer[0],
                                        });
                                    }}
                                    to={props.relatedBlogReducer[0].blogLink}
                                >
                                    <img
                                        src={
                                            props.relatedBlogReducer[0]
                                                .image_url
                                        }
                                    />
                                </NavLink>
                            </div>
                            <div className="textSticky">
                                <p>{props.relatedBlogReducer[0].subtitle}</p>
                            </div>
                        </div>
                        <div className="combineCard">
                            <div className="sidebarimg">
                                <img
                                    src={props.relatedBlogReducer[1].image_url}
                                />
                            </div>
                            <div className="textSticky">
                                <p>{props.relatedBlogReducer[1].subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedPostsBlog;
