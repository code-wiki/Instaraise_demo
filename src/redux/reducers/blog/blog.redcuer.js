import { BLOG_CONTENT_DATA } from '../../../config/BlogConfig/BlogContentConfig/config.blog.content';

const initialState = BLOG_CONTENT_DATA;
export const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
