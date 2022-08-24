import React from 'react';
import { connect } from 'react-redux';
import BlogComponent from '../../components/blog/BlogComponent';
const BlogContainer = (props) => {
    return (
        <>
            <BlogComponent {...props} />
        </>
    );
};
//we removed the dispatch action
const mapStateToProps = (state) => ({
    BlogReducer: state.BlogReducer,
});
export default connect(mapStateToProps)(BlogContainer);
