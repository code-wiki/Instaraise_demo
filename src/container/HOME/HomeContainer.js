import React from 'react';
import { connect } from 'react-redux';
import HomeComponents from '../../components/home/HomeComponents';
import { FilterCardData } from '../../redux/actions/HomeActions/action.home';

const HomeContainer = (props) => {
    return (
        <>
            <HomeComponents {...props} />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    FilterCardData: (payload) => dispatch(FilterCardData(payload)),
});
const mapStateToProps = (state) => ({
    currentState: state.ReduxReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
