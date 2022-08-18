import { SEARCH_ITEM } from '../../actions/index.action';
export const ReduxReducer = (initialState = '', action) => {
    switch (action.type) {
        case SEARCH_ITEM:
            return action.payload;
        default:
            return initialState;
    }
};
