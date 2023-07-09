import React from 'react';
import BlogSocial from './BlogSocial';
import { NavLink } from 'react-router-dom';
const RelatedPostsBlog = (props) => {
    const filter_RelatedPost_Length = props.CardReducer.length;
    const item = props.relatedBlogReducer[0];
    const item2 = props.relatedBlogReducer[1];
    return (
        <>
            {filter_RelatedPost_Length > 1 ? (
                <div className="col-md-4">
                    <div className="sidebar-section ">
                        <div className="sidebar-content sticky-top">
                            <div className="sharedPost">
                                <h4>Share Posts</h4>
                                <BlogSocial {...props} />
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
                                                ...item,
                                            });
                                            props.handleRelatedPosts({
                                                ...item,
                                            });
                                        }}
                                        to={item.blogLink}
                                    >
                                        <img
                                            src={'https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg'}
                                            alt="realtedPost img"
                                        />
                                    </NavLink>
                                </div>
                                <div className="textSticky">
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="combineCard">
                                <div className="sidebarimg">
                                    <NavLink
                                        onClick={() => {
                                            // debugger;
                                            props.handleSelectedCardAction({
                                                ...item2,
                                            });
                                            props.handleRelatedPosts({
                                                ...item2,
                                            });
                                        }}
                                        to={item2.blogLink}
                                    >
                                        <img src={'https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg'} />
                                    </NavLink>
                                </div>
                                <div className="textSticky">
                                    <p>{item2.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default RelatedPostsBlog;
