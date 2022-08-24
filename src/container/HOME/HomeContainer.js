import React from 'react';
import { connect } from 'react-redux';
import HomeComponents from '../../components/home/HomeComponent';
import {
    filterItemData,
    handleCategoryChange,
} from '../../redux/actions/HomeActions/action.home';
import { handleSelectedCardAction } from '../../redux/actions/BlogAction/index.blog';
const HomeContainer = (props) => {
    return (
        <>
            <HomeComponents {...props} />
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    filterItemData: (payload) => dispatch(filterItemData(payload)),
    handleSelectedCardAction: (payload) =>
        dispatch(handleSelectedCardAction(payload)),
    handleCategoryChange: (payload) => dispatch(handleCategoryChange(payload)),
});
const mapStateToProps = (state) => ({
    CardReducer: state.CardReducer,
    TabsSelectReducer: state.TabsSelectReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
