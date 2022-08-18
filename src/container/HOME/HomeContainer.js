import React from 'react';
import { connect } from 'react-redux';
import HomeComponents from '../../components/home/HomeComponent';

const HomeContainer = (props) => {
    return (
        <>
            <HomeComponents {...props} />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
    currentReducer: state.ReduxReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
