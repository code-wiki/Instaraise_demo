import React from 'react';
import { connect } from 'react-redux';
import HomeComponents from '../../components/home/HomeComponent';
import {
    filterItemData,
    allItemData,
} from '../../redux/actions/HomeActions/action.home';
const HomeContainer = (props) => {
    return (
        <>
            <HomeComponents {...props} />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    filterItemData: (payload) => dispatch(filterItemData(payload)),
    allItemData: (payload) => dispatch(allItemData(payload)),
});
const mapStateToProps = (state) => ({
    currentReducer: state.ReduxReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
