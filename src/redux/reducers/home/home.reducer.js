import { FILTER_CARDS } from '../../actions/index.action';
export const ReduxReducer = (initialState = '', action) => {
    switch (action.type) {
        case FILTER_CARDS:
            return action.payload;
        default:
            return initialState;
    }
};
