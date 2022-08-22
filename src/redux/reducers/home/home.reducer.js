import { FILTER_CARDS } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

const initialState = CARD_DATA;
export const ReduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CARDS:
            return action.payload;
        default:
            return state;
    }
};
