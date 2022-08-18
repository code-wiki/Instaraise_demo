import { FILTER_CARDS, SEARCH_ITEM } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

const initialState = '';
export const ReduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ITEM:
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};
