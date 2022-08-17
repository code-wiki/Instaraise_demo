import { FILTER_CARDS } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
export const ReduxReducer = (initialState = CARD_DATA, action) => {
    switch (action.type) {
        case FILTER_CARDS:
            return action.payload;
        default:
            return initialState;
    }
};
