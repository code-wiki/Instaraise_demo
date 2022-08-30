import React from 'react';
import { connect } from 'react-redux';
import BlogComponent from '../../components/blog/BlogComponent';
import { handleRelatedPosts } from '../../redux/actions/BlogAction/action.blog';
import { handleSelectedCardAction } from '../../redux/actions/BlogAction/action.blog';
const BlogContainer = (props) => {
    return (
        <>
            <BlogComponent {...props} />
        </>
    );
};
//we removed the dispatch action
const mapDispatchToProps = (dispatch) => ({
    handleRelatedPosts: (payload) => dispatch(handleRelatedPosts(payload)),
    handleSelectedCardAction: (payload) =>
        dispatch(handleSelectedCardAction(payload)),
});
const mapStateToProps = (state) => ({
    BlogReducer: state.BlogReducer,
    relatedBlogReducer: state.relatedBlogReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
