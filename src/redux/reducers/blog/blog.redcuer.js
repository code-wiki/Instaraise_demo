import {
    SELECTED_CARD_DETAILS,
    RELATED_POSTS,
} from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
const initialState = null;
const SELECTED_BLOG_URL = window.location.pathname;
export const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CARD_DETAILS:
            return action.payload;
        default:
            if (SELECTED_BLOG_URL != '/') {
                const BlogDetails = CARD_DATA.filter(
                    (elem) => elem.blogLink === SELECTED_BLOG_URL
                );
                return BlogDetails[0];
            } else {
                return state;
            }
    }
};
export const relatedBlogReducer = (state = [], action) => {
    switch (action.type) {
        case RELATED_POSTS:
            return action.payload;
        default:
            if (SELECTED_BLOG_URL != '/') {
                const BlogDetails = CARD_DATA.filter(
                    (elem) => elem.blogLink === SELECTED_BLOG_URL
                );
                return relatedFilter(BlogDetails[0].id, CARD_DATA.length);
            } else {
                return state;
            }
    }
};
const relatedFilter = (data, totalLength) => {
    if (data === totalLength) {
        return [CARD_DATA[0], CARD_DATA[1]];
    } else if (data === totalLength - 1) {
        return [CARD_DATA[data], CARD_DATA[0]];
    }
    return CARD_DATA.filter(
        (item) => item.id === data + 1 || item.id === data + 2
    );
};
