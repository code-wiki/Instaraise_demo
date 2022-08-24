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
            return state;
    }
};
