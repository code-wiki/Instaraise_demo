import { SELCTED_CARD_DETAILS } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
const initialState = null;
export const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELCTED_CARD_DETAILS:
            return action.payload;
        default:
            if (window.location.pathname != '/') {
                const BlogDetails = CARD_DATA.filter(
                    (elem) => elem.blogLink === window.location.pathname
                );
                return BlogDetails[0];
            } else {
                return state;
            }
    }
};
