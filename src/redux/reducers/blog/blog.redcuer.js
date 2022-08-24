import { SELECTED_CARD_DETAILS } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
const initialState = null;
const SELECTED_BLOG_DETAILS = window.location.pathname;
export const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CARD_DETAILS:
            return action.payload;
        default:
            if (SELECTED_BLOG_DETAILS != '/') {
                const BlogDetails = CARD_DATA.filter(
                    (elem) => elem.blogLink === window.location.pathname
                );
                return BlogDetails[0];
            } else {
                return state;
            }
    }
};
