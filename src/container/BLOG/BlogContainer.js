import React from 'react';
import { connect } from 'react-redux';
import BlogComponent from '../../components/blog/BlogComponent';
import { handleSelectedCardAction } from '../../redux/actions/BlogAction/index.blog';
const BlogContainer = (props) => {
    return (
        <>
            <BlogComponent {...props} />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    handleSelectedCardAction: (payload) =>
        dispatch(handleSelectedCardAction(payload)),
});
const mapStateToProps = (state) => ({
    BlogReducer: state.BlogReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
